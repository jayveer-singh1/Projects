const fs = require('fs');

fs.readFile('index.html', 'utf8', (err, data) => {
  if (err) return console.error(err);

  const userDetails = { name: 'Jayveer', age: '19', email: 'jayveer@example.com', address: 'Borimada, Pali, Rajasthan 306023' };
  const result = data.replace(/{%%NAME%%}/g, userDetails.name)
                     .replace(/{%%AGE%%}/g, userDetails.age)
                     .replace(/{%%EMAIL%%}/g, userDetails.email)
                     .replace(/{%%ADDRESS%%}/g, userDetails.address);

  fs.writeFile('index.html', result, 'utf8', err => {
    if (err) return console.error(err);
    console.log('User details have been written to index.html');
  });
});
