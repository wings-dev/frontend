const https = require("https");
const fs = require("fs");
const unzipper = require("unzipper");
const path = require("path");
require("dotenv").config();

const urls = [
  "https://wings-web.s3.us-east-2.amazonaws.com/nuxt/" + process.env.SITE + ".zip",
  "https://wings-web.s3.us-east-2.amazonaws.com/nuxt/" + process.env.SITE + "_301.zip",
  // "https://wings-web.s3.us-east-2.amazonaws.com/nuxt/" + process.env.SITE + "_sitemap.zip",
];
const outputDir = "./";

function downloadAndUnzip(url) {
  return new Promise((resolve, reject) => {
    const fileName = path.basename(url);

    https.get(url, (response) => {
      const fileStream = fs.createWriteStream(fileName);
      response.pipe(fileStream);

      fileStream.on("finish", () => {
        console.log(`Dosya indirme işlemi tamamlandı: ${url}`);

        fs.createReadStream(fileName)
          .pipe(unzipper.Extract({ path: outputDir }))
          .on("close", () => {
            console.log(`Dosya çıkarma işlemi tamamlandı: ${url}`);

            fs.unlinkSync(fileName);

            console.log(`İşlem tamamlandı: ${url}`);
            resolve();
          });
      });
    }).on("error", (err) => {
      console.error(`Hata: ${err.message}`);
      reject(err);
    });
  });
}

(async () => {
  for (const url of urls) {
    try {
      await downloadAndUnzip(url);
    } catch (error) {
      console.error(`İşlem sırasında hata oluştu: ${url}`, error);
    }
  }
  console.log("Tüm işlemler tamamlandı.");
})();
