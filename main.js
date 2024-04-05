// This should toggle the dark mode on and off when button is clicked
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    document.getElementById('darkModeSwitch').textContent = "Light Mode";
}
else {
    document.getElementById('darkModeSwitch').textContent = "Dark Mode";
}

document.getElementById('darkModeSwitch').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    //If text == Dark Mode, change to Light Mode, class="toggle" to "toggle dark-mode"
    if(document.getElementById('darkModeSwitch').textContent == "Light Mode"){
        document.getElementById('darkModeSwitch').textContent = "Dark Mode";
    } else if (document.getElementById('darkModeSwitch').textContent == "Dark Mode"){
        document.getElementById('darkModeSwitch').textContent = "Light Mode";
    }
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
});


// Quiz
questions = [
    {
      question: "What is 2 + 2?",
      options: ["2", "4", "22", "None of the above"],
      answer: "4"
    },
    {
        question: "What is 10 - 5?",
        options: ["5", "10", "15", "None of the above"],
        answer: "5"
    },
    {
        question: "What is 3 * 3?",
        options: ["6", "9", "12", "None of the above"],
        answer: "9"
    },
    {
        question: "What is 10 / 2?",
        options: ["2", "5", "10", "None of the above"],
        answer: "5"
    },
    {
        question: "Is this the best Website ever?",
        options: ["Yes", "Yes", "Yes", "Absolutely Yes"],
        answer: "Absolutely Yes"
    }
    // Add more questions as needed
  ];
  
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
  
  // Shuffle questions
  questions = shuffle(questions);
  
  let currentQuestion = 0;
  let score = 0;
  
  function displayQuestion() {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
  
    questionElement.textContent = questions[currentQuestion].question;
    optionsElement.innerHTML = '';
    for (let i = 0; i < questions[currentQuestion].options.length; i++) {
      optionsElement.innerHTML += `<input type="radio" name="option" value="${questions[currentQuestion].options[i]}"> ${questions[currentQuestion].options[i]}<br>`;
    }
  }
  
  document.getElementById('submit').addEventListener('click', function() {
    const options = document.getElementsByName('option');
    for (let i = 0; i < options.length; i++) {
      if (options[i].checked) {
        if (options[i].value === questions[currentQuestion].answer) {
          score++;
        }
        currentQuestion++;
        if (currentQuestion < questions.length) {
          displayQuestion();
        } else {
          document.getElementById('result').textContent = `Quiz finished! Your score is ${score}.`;
          document.getElementById('quiz-container').style.display = 'none';
        }
        break;
      }
    }
  });
  
  displayQuestion();