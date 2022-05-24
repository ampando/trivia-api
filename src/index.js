//for UI logic
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';


$(function() {
  $('#dayTrivia').on('submit', function() { 
    
    let promise = new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest(); 
      const url = `https://opentdb.com/api.php?amount=1&category=9&difficulty=easy&type=multiple`; 

      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response); 
        } else {
          reject(request.response); 
        }
      };
      request.open("GET", url, true); 
      request.send(); 
    }); 
    
    promise.then(function(response) {
      const body = JSON.parse(response); 
      $('#question').text(`${body.results[0].question}`);
    });
    
  });
}); 