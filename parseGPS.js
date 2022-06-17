const fs = require('node:fs')
const path = require('node:path');
const exifr = require("exifr");

const folderPath = process.argv[2] || '';
const outputPath = process.argv[3] || `${folderPath}-gps.json`;

const processImages = async (folderPath) => {
  if (!fs.existsSync(folderPath)) {
    console.log(`No folder named ${folderPath} found.`);
    console.log('Usage: node parseGPS </path/to/images> <outputFile.json>');
    process.exit(0);
  }

  const files = await fs.promises.readdir(folderPath);

  if (!files.length) {
    console.error(`Folder ${folderPath} is empty`);
    process.exit(0);
  }

  return await Promise.all(
    files.map(async (src) => {
      const imagePath = path.join(folderPath, src);
      const gps = await exifr.gps(imagePath);
      if (gps) {
        return { src: imagePath, ...gps };
      }
    })
  );
}

processImages(folderPath)
  .then(res => {
    fs.writeFileSync(outputPath, JSON.stringify(res.filter(item => !!item), null, 2))
  })
  .catch(e => {
    throw new Error(e);
  });