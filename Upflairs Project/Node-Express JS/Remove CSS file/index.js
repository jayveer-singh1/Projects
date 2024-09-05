const fs = require('fs');

fs.readdir(__dirname, (err, files) => {
  if (err) return console.error(err);

  const cssFiles = files.filter(file => file.toLowerCase().endsWith('.css'));
  if (cssFiles.length === 0) return console.log('No CSS files found in the current directory.');

  cssFiles.forEach(file => fs.unlink(`${__dirname}/${file}`, err => {
    if (err) return console.log(err);
    console.log(`File ${file} has been deleted.`);
  }));
});
