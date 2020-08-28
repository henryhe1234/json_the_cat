const argv = process.argv.slice(2);
const request = require('request');

const fetchBreedDescription = (breedName, callback) => {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    // console.log('err:', error);
    // console.log('status code:', response && response.statusCode);
    const data = JSON.parse(body);
    const dataObj = data[0];
    // console.log(data);if()
    if(dataObj){

      callback(error, dataObj.description);
    }else{
      console.log('invalid breed');
    }

    

  });
};
module.exports = { fetchBreedDescription };