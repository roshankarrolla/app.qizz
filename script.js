// quiz questions and answers  
const quizData = [  
      {  
         question: "What is the capital of France?",  
         options: ["Paris", "London", "Berlin", "Rome"],  
         answer: 0  
      },  
      {  
         question: "What is the largest planet in our solar system?",  
         options: ["Earth", "Saturn", "Jupiter", "Uranus"],  
         answer: 2  
      },  
      {  
         question: "Who painted the Mona Lisa?",  
         options: ["Leonardo da Vinci", "Michelangelo", "Raphael", "Caravaggio"],  
         answer: 0  
      }  
   ];  
     
   // variables to store current question, score, and high score  
   let currentQuestion = 0;  
   let score = 0;  
   let highScore = 0;  
     
   // function to generate quiz question and options  
   function generateQuestion() {  
      const questionElement = document.getElementById("question");  
      const optionsElement = document.getElementById("options");  
      questionElement.textContent = quizData[currentQuestion].question;  
      optionsElement.innerHTML = "";  
      quizData[currentQuestion].options.forEach((option, index) => {  
         const li = document.createElement("li");  
         const input = document.createElement("input");  
         input.type = "radio";  
         input.name = "option";  
         input.value = index;  
         li.appendChild(input);  
         li.appendChild(document.createTextNode(option));  
         optionsElement.appendChild(li);  
      });  
   }  
     
   // function to handle submit button click  
   function handleSubmit() {  
      const selectedOption = document.querySelector("input[name='option']:checked");  
      if (selectedOption) {  
         const answer = quizData[currentQuestion].answer;  
         if (selectedOption.value == answer) {  
           score++;  
         }  
         currentQuestion++;  
         if (currentQuestion >= quizData.length) {  
           // quiz completed, display score and high score  
           document.getElementById("score").textContent = `Score: ${score}`;  
           if (score > highScore) {  
              highScore = score;  
              localStorage.setItem("highScore", highScore);  
           }  
           document.getElementById("high-score").textContent = `High Score: ${highScore}`;  
           // reset quiz  
           currentQuestion = 0;  
           score = 0;  
         } else {  
           generateQuestion();  
         }  
      }  
   }  
     
   // function to start timer  
   function startTimer() {  
      let time = 0;  
      const timerElement = document.getElementById("timer");  
      setInterval(() => {  
         time++;  
         timerElement.textContent = `Time: ${time}`;  
      }, 1000);  
   }  
     
   // function to update progress bar  
   function updateProgress() {  
      const progressElement = document.getElementById("progress");  
      progressElement.value = (currentQuestion / quizData.length) * 100;  
   }  
     
   // event listeners  
   document.getElementById("submit").addEventListener("click", handleSubmit);  
   document.addEventListener("DOMContentLoaded", () => {  
      generateQuestion();  
      startTimer();  
      updateProgress();  
   });
   
