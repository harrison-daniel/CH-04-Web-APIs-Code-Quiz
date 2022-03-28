// var quizList = [
//   "Question 1",
//   "Question 2",
//   "Question 3",
//   "Question 4",
// ];

// var stringQuestions1 = JSON.stringify(quizList);
// localStorage.setItem("quizList", stringQuestions1);


// var displayQuizQuestions = function() {
//   var text = "";

//   var questions = localStorage.getItem("quizList");

//   var questionsArray = JSON.parse(questions);
//   for (var i=0; i < questionsArray.length; i++) {
//     text += quizList[i] + "<br>";
//   };

//   document.getElementById("list").innerHTML = text;
// };

// displayQuizQuestions();

//var listEl = document.querySelector()
// var sec = 60;
// var time = setInterval(myTimer, 1000);

// function myTimer() {
//   document.getElementById("timer").innerHTML=sec + "sec left";
//   sec--;
//   if (sec == -1){
//     clearInterval(time);
//     alert("Out of time! :(");
//   }
// }
  


// var count = 60;
// var interval = setInterval(function(){
//   document.getElementById("count").innerHTML=count;
//   count --;
//   if (count === 0){
//     clearInterval(interval);
//     document.getElementById("count").innerHTML = "Done";

//     alert("Out of time!");
//   }
// }, 1000);


var buttonEl = document.querySelector("#start-quiz");
var displayQuizQuestionsEl = document.querySelector("#displayQuizQuestions");

var createQuestionHandler = function() {
  var listItemEl = document.createElement("li");
  listItemEl.className = "question-item";
  listItemEl.textContent = "This is a new Q";
  displayQuizQuestionsEl.appendChild(listItemEl);
  };

  buttonEl.addEventListener("click", createQuestionHandler);