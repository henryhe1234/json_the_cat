const argv = process.argv.slice(2);
const request = require('request');
request(`https://api.thecatapi.com/v1/breeds/search?q=${argv[0]}`, (error, response, body) => {
  console.log('err:', error);
  console.log('status code:', response && response.statusCode);
  if (response.statusCode !== 200) {
    console.log('some error with website');
  }
  const data = JSON.parse(body);
  console.log(data);
  if (data) {
    console.log('The breed not found');
  } else {
    console.log(data[0]);
  }
});