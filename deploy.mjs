import * as ftp from "basic-ftp";
import * as dotenv from "dotenv";
import { execSync } from "child_process";
import path from "path";
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function deploy() {
    try {
        console.log("🚀 Building Next.js App (Static Export)...");
        // Next.js static export generates files in the 'out' directory by default
        execSync("npm run build", { stdio: "inherit" });
        
        console.log(`\n📡 Connecting to FTP Server at ${process.env.FTP_HOST}...`);
        const client = new ftp.Client();
        client.ftp.verbose = false;
        client.ftp.timeout = 600000; // 10 minutes timeout for slow connections

        await client.access({
            host: process.env.FTP_HOST,
            user: process.env.FTP_USER,
            password: process.env.FTP_PASS,
            secure: false
        });
        
        console.log("✅ Successfully logged in via FTP!");
        
        // 1. Upload Next.js static files from 'out' folder
        console.log("⏳ Uploading Next.js static files from 'out' folder to root...");
        await client.ensureDir("/"); 
        await client.uploadFromDir(path.join(__dirname, "out"), "/");
        
        // 2. Upload WordPress Theme
        console.log("⏳ Uploading WordPress Theme (chariotads-elite)...");
        const themePath = "/wp-content/themes/chariotads-elite";
        await client.ensureDir(themePath);
        await client.uploadFromDir(path.join(__dirname, "chariotads-elite"), themePath);

        console.log("🎉 DEPLOYMENT COMPLETE! Next.js site is now live via FTP.");
        client.close();
    } catch (err) {
        console.error("❌ Deployment Error:", err.message);
        process.exit(1);
    }
}

deploy();
