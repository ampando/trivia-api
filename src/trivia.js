export default class Trivia {
  static getTrivia() {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest(); 
      const url = `https://opentdb.com/api.php?amount=1&category=9&difficulty=easy&type=multiple`; 

      request.onload = function() {
        if (this.status === 200 && JSON.parse(request.response).response_code === 0) {
          resolve(request.response); 
        } else {
          reject(request.response); 
        }
      };
      request.open("GET", url, true); 
      request.send(); 
    }); 
  }
}