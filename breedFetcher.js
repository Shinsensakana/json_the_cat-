
const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {

    if (error) {
      callback(error);
    } else {
      const data = JSON.parse(body);
         
        
      if (data.length === 0) {
        callback(null);
      } else {
        callback(error,data[0].description);
      }
    }
  }
  );
}
module.exports = { fetchBreedDescription }


