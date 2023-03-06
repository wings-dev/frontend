const https = require('https');
const fs = require('fs');

const fileURL = 'https://wings-web.s3.us-east-2.amazonaws.com/test/filter.json';
const fileName = 'filter.json';

https.get(fileURL, (res) => {
  let fileStream = fs.createWriteStream(fileName);
  res.pipe(fileStream);
  fileStream.on('finish', () => {
    console.log(`Dosya "${fileName}" başarıyla kaydedildi.`);
  });
}).on('error', (err) => {
  console.error(`Hata oluştu: ${err.message}`);
});
