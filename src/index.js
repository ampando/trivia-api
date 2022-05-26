//for UI logic
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Trivia from './trivia.js'; 


$(document).ready(function() {
  $('#triviaParty').click(function() {  
    let promise = Trivia.getTrivia(); 
    
    let currentResponse; 
    promise.then(function(response) {
      const body = JSON.parse(response);
      currentResponse = body; 
      $('#question').text(`${body.results[0].question}`);
      $('.answer').text(`${body.results[0].correct_answer}`);
      $('#incorrect1').text(`${body.results[0].incorrect_answers[0]}`);
      $('#incorrect2').text(`${body.results[0].incorrect_answers[1]}`);
      $('#incorrect3').text(`${body.results[0].incorrect_answers[2]}`); 
      $('#hidden').show(); 
      $('.start').hide(); 
      $('.showErrors').text(""); 
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error}`);
      
    });
    $('#submitAnswer').click(function(event) {
      event.preventDefault(); 
      $('#hidden').hide(); 
      $('.answerDisplay').text(`${currentResponse.results[0].correct_answer}`);
      $('.showAnswer').show(); 
    });
  });
});