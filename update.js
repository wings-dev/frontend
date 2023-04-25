const https = require("https");
const fs = require("fs");
const unzipper = require("unzipper");
const path = require("path");
require("dotenv").config();

const urls = [
  {
    url: "https://wings-web.s3.us-east-2.amazonaws.com/nuxt/" + process.env.SITE + ".zip",
    outputDir: "./",
  },
  {
    url: "https://wings-web.s3.us-east-2.amazonaws.com/nuxt/" + process.env.SITE + "_301.zip",
    outputDir: "./",
  },
  {
    url: "https://wings-web.s3.us-east-2.amazonaws.com/nuxt/" + process.env.SITE + "_sitemap.zip",
    outputDir: "./static",
  },
];

function downloadAndUnzip(urlObj) {
  return new Promise((resolve, reject) => {
    const url = urlObj.url;
    const outputDir = urlObj.outputDir;
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
          })
          .on("error", (err) => {
            console.error(`Çıkarma işlemi sırasında hata oluştu: ${url}`, err);
            reject(err);
          });
      });
    }).on("error", (err) => {
      console.error(`Hata: ${err.message}`);
      reject(err);
    });
  });
}

(async () => {
  for (const urlObj of urls) {
    try {
      await downloadAndUnzip(urlObj);
    } catch (error) {
      console.error(`İşlem sırasında hata oluştu: ${urlObj.url}`, error);
      try {
        fs.unlinkSync(path.basename(urlObj.url));
        console.log(`Hatalı dosya silindi: ${urlObj.url}`);
      } catch (unlinkError) {
        console.error(`Dosya silinirken hata oluştu: ${urlObj.url}`, unlinkError);
      }
    }
  }
  console.log("Tüm işlemler tamamlandı.");
})();
