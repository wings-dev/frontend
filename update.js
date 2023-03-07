const https = require('https');
const fs = require('fs');
const unzipper = require('unzipper');
const path = require('path');
require("dotenv").config();


const url = 'https://wings-web.s3.us-east-2.amazonaws.com/nuxt/' + process.env.SITE  + '.zip';
const outputDir = './';

// Dosya indirme işlemi
https.get(url, (response) => {
  const fileStream = fs.createWriteStream('store.zip');
  response.pipe(fileStream);
  fileStream.on('finish', () => {
    console.log('Dosya indirme işlemi tamamlandı.');

    // Dosya çıkarma işlemi
    fs.createReadStream('store.zip')
      .pipe(unzipper.Extract({ path: outputDir }))
      .on('close', () => {
        console.log('Dosya çıkarma işlemi tamamlandı.');

        // İndirilen dosya silme işlemi
        fs.unlinkSync('store.zip');

        console.log('Program sonlandı.');
      });
  });
}).on('error', (err) => {
  console.error(`Hata: ${err.message}`);
});
