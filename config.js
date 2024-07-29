
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
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "true";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "false";
global.read_status_from = process.env.READ_STATUS_FROM || "false";

global.api_smd = "https://HyHamza.vercel.app";
global.scan = "https://byte-session.vercel.app/";




global.SESSION_ID =
  process.env.SESSION_ID ||





  


//___________________________________________________________________________________________________


  
  "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidU1RNXAvWFAzMTMySEZLcFQ1RTJvb1dzMHNHeitZVDdXVG5qL05UQU1YND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibDJsQ0xvaE56cnJRSEtCUStpOEVaT0pROVlwZFBtOU5aWUI4c0hhcTJHUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBSHJpKzdocnZtbEZObWFKSHNKa3puRkh4a3Y1cnJiVmcvVmV0ZVM3TTN3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmamUyL09DT0hPLzNhbHE3UkxpemxUNTFES0ZaQnVnc2Y2WitBOG1YOEZjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1FQ0hXc1hCdzRzUlZXYzhiblUxQ2ZsMEtiYVNiL0dmelZTODNpQlFGME09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtYL3Z1Vno2RmcyVVA2d2RlOWZ1ajBQWk03REQ3ZjJNc2VlVmVNSEIxeEU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUIyVU1SaFRqaG92K3pkeitqNXVITDVpN3ozcWJQcU13emlVU0lBMTMyVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZVZUcDhvcGJSNEE2RDBNMWdpWFM2RnhaejZhM3FjVVNVcGpqallEQUJ6ND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imw1d291ellFZjY0YmtxYTQyWVR5QTZFS2MvbGdQNXdCMUZ4RHVaZU1oMVVyYTFHdmVsdEFIYVFVUk5RendwUDFJZ3QvalNEeXdtQnZBRXNYNTg0Q0F3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NywiYWR2U2VjcmV0S2V5IjoiNmJYVzEwM2hvWGVzK2FYMTRWejVmTWF2OG8vV3hyUnZpTWpkTlg5K2hPaz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiREFpcnBCMWJSNjJUTTBCV1g5cnFxQSIsInBob25lSWQiOiI1NTNjNTFiMy0wODFkLTQ1MzEtYTdkZC04MWY1ZmViMzJjYWUiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOS9QL3IwOVV5SjNrN3hST3dVNDljWnJiOVlRPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFNRUV1UXlhQlRjYVYrY1JpcEZRTlhKVzZKcz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJNSzk5U1hGViIsIm1lIjp7ImlkIjoiMjMzMjQ3OTIzNTI1OjQ4QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKS3F3K2dGRU1pOW43VUdHQWtnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI2cVhsVXBwN2RpTnpxeTIyQnhPYVpOUHFhU20xaEMxSkxpRFBlL0lUN2xrPSIsImFjY291bnRTaWduYXR1cmUiOiJlVEtMNHMvNDZhNWlRS3ZWMTNpNHJEUTN5S1lRVExhZy9aVmJyMUlvYXdNYk1Pb2xSdVBYWk1wYmxXRG9kaDNhUStwdHEyc2NwZmx6UHV3TUlTa1ZCQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiS2MxL1NWbm9RQ0piM3BxMFBhZDNzTXIranVla0tPcXFaQ1pZSWExaDhhOXkwdG91SkViNzEvN0lHbHd5OG5ncXlHc0ZoZEowODhESitIZ1o0ODB5QUE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzMyNDc5MjM1MjU6NDhAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZXFsNVZLYWUzWWpjNnN0dGdjVG1tVFQ2bWtwdFlRdFNTNGd6M3Z5RSs1WiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMjI3NzU4OCwibXlBcHBTdGF0ZUtleUlkIjoiQUFjQUFEcm8ifQ==" //Make sure session id starts with Byte;;;



//________________________________________________________________________









module.exports = {
  menu: process.env.MENU || "",

  //Prefix variable
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "*Powered By MRWILLTECH-10*",
  author: process.env.PACK_AUTHER || "MRWILLTECH-10",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "MRWILLTECH-10",
  ownername: process.env.OWNER_NAME || "MRWILLTECH-10",
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
