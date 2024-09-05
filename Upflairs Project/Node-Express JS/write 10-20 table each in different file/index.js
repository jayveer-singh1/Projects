const fs = require('fs');

const generateTable = number => {
  let table = '';
  for (let i = 1; i <= 10; i++) {
    table += `${number} x ${i} = ${number * i}\n`;
  }
  return table;
};

const writeTableToFile = number => {
  const table = generateTable(number);
  fs.writeFile(`table of ${number}.txt`, table, err => {
    if (err) return console.error(err);
    console.log(`File table of ${number}.txt has been saved!`);
  });
};

for (let number = 10; number <= 20; number++) {
  writeTableToFile(number);
}
