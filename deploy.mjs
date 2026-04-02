import * as ftp from "basic-ftp";
import * as dotenv from "dotenv";
import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function deploy() {
    console.log("🚀 Building React App...");
    execSync("npm run build", { stdio: "inherit" });
    
    console.log(`\n📡 Connecting to FTP Server at ${process.env.FTP_HOST}...`);
    const client = new ftp.Client();
    client.ftp.verbose = false;
    client.ftp.timeout = 600000; // 10 minutes timeout for slow connections

    try {
        await client.access({
            host: process.env.FTP_HOST,
            user: process.env.FTP_USER,
            password: process.env.FTP_PASS,
            secure: false // HestiaCP additional accounts use pure FTP (Port 21)
        });
        
        console.log("✅ Successfully logged in via FTP!");
        console.log("⏳ Uploading files from 'dist' folder to the server. Please wait...");
        
        await client.ensureDir("/"); // Because HestiaCP chroots 'chariotads_orbyza' into public_html
        await client.uploadFromDir(path.join(__dirname, "dist"), "/");
        
        console.log("⏳ Uploading WordPress Theme (chariotads-elite)...");
        await client.ensureDir("/wp-content/themes/chariotads-elite");
        await client.uploadFromDir(path.join(__dirname, "chariotads-elite"), "/wp-content/themes/chariotads-elite");

        console.log("🎉 DEPLOYMENT COMPLETE! All files are now live.");
    } catch (err) {
        console.error("❌ FTP Error Found:", err.message);
        console.error("If it says '530 Login incorrect', your password or username is wrong. If it says 'ECONNREFUSED', your Server IP is wrong.");
    } finally {
        client.close();
    }
}

deploy();
