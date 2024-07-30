
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "TalkDrove@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Hamza:3800380ww@cluster0.uwommwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "923072380380@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/HyHamza/BYTE-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/logo.jpg";
global.devs = "923072380380";
global.sudo = process.env.SUDO || "233247923525";
global.owner = process.env.OWNER_NUMBER || "233247923525";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "all";
global.read_status_from = process.env.READ_STATUS_FROM || "all";

global.api_smd = "https://HyHamza.vercel.app";
global.scan = "https://byte-session.vercel.app/";




global.SESSION_ID =
  process.env.SESSION_ID ||





  


//___________________________________________________________________________________________________


  
  "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOE0zZTRyVTVUcXRBOG82NDN0aHNNT3gwS0xGY0djSVJoV1JDS0trZHNrST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoienM5dVBtNEJseVd1YlRQMU5EOGY2b252Q01NNVVSdGZVbS9Xa0tseXExST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpQVdrYkhSMGl1dmNhM1FZSTkyUUpsbEJOZDlSNnFMblk0SlpPS25pQW5zPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvWGlDaXVzZmNmNUVDZHhpM0ZMTGtCQ0ZJbTE1bWtHQ05FT2Zqc2VOUTA0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRLcC8zUzhNYUNTNjZVbUxlYmM2aDJoRUhJbU9NbDVrVXg2OEpLK0lnRzA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImpmYWZPTzJFaHh0NlNaZlVxOGNvWHQ3ZnM4NUJweHpVT3dVQkMwRGpDWG89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUpOOVJRajZEa0l4NVhoQVd5cDY4MkVjWmxWV05mOEZzNVV2akZLd3RFcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ2EwR0tsTld0ZEJ2Q21qVTd6dk12RFR6OWxGVVpTalBFM1JXVElhUFBEcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InU2OS9NbThoODFJbXZGWnBBSy9BN1l0VjUvMUZKczRvQXlxSmNZNmQ3R1BIRVlvcmV2a3U1U1F1Z3J3QnB0N09KT0liUmhuNDdHdTlZdjJSTGdBWEJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTMyLCJhZHZTZWNyZXRLZXkiOiJtc3FrVW1PeHVvNEtodGl1NmNkRWxxNENvK1lvTGZQSmRKWG1CdFdobWk0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzMzI0NzkyMzUyNUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI2Qzk0MTlGRDdCNjI2MDc4QThBNTY0MkMxRjg1MjU0NCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIyMzIwOTU4fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJocWltSlVjY1I4T3R0dE1oanpjMXh3IiwicGhvbmVJZCI6ImM0NGFkYzFmLTkyNmYtNDFjMi1hOWJjLTNhNDFhMzllMjc4YiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJORHJqbzBEbXlSaTJkZWdCV0Qva0I1ZTAwZW89In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiejZpZUFEazhpcXFveDIrdnA1ZXZKM04yaXJnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkxGM1NXNjcxIiwibWUiOnsiaWQiOiIyMzMyNDc5MjM1MjU6NDlAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0pLcXcrZ0ZFSzZRb3JVR0dBb2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjZxWGxVcHA3ZGlOenF5MjJCeE9hWk5QcWFTbTFoQzFKTGlEUGUvSVQ3bGs9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjNOVU5yS0JPRyt4aEkzZ0czWFJKamErNUN0a1pUekl3R3YrNllTY1kxbDV0TEprTjFGeDdQM2NNdlBReXFOY0RpT2hBbXpvQUFsS2huZHlIVmVYZUN3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ6NDh0cGk1aG8zcjRoaWwwVmdqZjdlN1lIeTJBZnNvVTdUWnFqN2ZYaFpuNzFyTkU4VllEaVN1TTRwNFhMNHgreG90MURWb040R0ZGRjkwemFESGhCZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzMzI0NzkyMzUyNTo0OUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJlcWw1VkthZTNZamM2c3R0Z2NUbW1UVDZta3B0WVF0U1M0Z3ozdnlFKzVaIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyMzIwOTUzLCJteUFwcFN0YXRlS2V5SWQiOiJBQWNBQURybyJ9" //Make sure session id starts with Byte;;;



//________________________________________________________________________









module.exports = {
  menu: process.env.MENU || "",

  //Prefix variable
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "*Powered By MRWILLTECH-09*",
  author: process.env.PACK_AUTHER || "MRWILLTECH-09",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "MRWILLTECH-09,
  ownername: process.env.OWNER_NAME || "MRWILLTECH-09",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "BYTE").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
