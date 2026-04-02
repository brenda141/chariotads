import * as ftp from "basic-ftp";
import * as dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function deployLogo() {
    console.log("🚀 Deploying ONLY Logo Assets for instant update...");
    const client = new ftp.Client();
    client.ftp.verbose = true;
    client.ftp.timeout = 60000;

    try {
        await client.access({
            host: process.env.FTP_HOST,
            user: process.env.FTP_USER,
            password: process.env.FTP_PASS,
            secure: false
        });
        
        console.log("✅ Logged in!");
        
        // Root logo
        console.log("⬆️ Uploading Root Logo...");
        await client.uploadFrom("public/chariotads_logo.png", "/chariotads_logo.png");
        
        // Theme logo
        console.log("⬆️ Uploading Theme Logo...");
        await client.ensureDir("/wp-content/themes/chariotads-elite");
        await client.uploadFrom("public/chariotads_logo.png", "/wp-content/themes/chariotads-elite/chariotads_logo.png");

        console.log("🎉 LOGO DEPLOYMENT COMPLETE!");
    } catch (err) {
        console.error("❌ Error:", err.message);
    } finally {
        client.close();
    }
}

deployLogo();
