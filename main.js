// Creating an array of objects and passing the numbers, questions, options and answers

let questions = [
 
 {
  numb: 1,
  question: 'What JavaScript operand is % ...?',
  answer: 'Modulo',
  options: [
   'Percentage',
   'Decimal',
   'Modulo',
   'Divisor'
   ]
 },
 
 
 
  {
  numb: 2,
  question: 'All these are types of loops except...?',
  answer: 'arrow()',
  options: [
   'forEach()',
   'for Of',
   'for in',
   'arrow()'
   ]
 },
 
  {
  numb: 3,
  question: 'CSS property for editing images?',
  answer: 'CSS filter property',
  options: [
   'CSS box-shadow property',
   'CSS edit property ',
   'CSS filter property',
   'CSS image-design property'
   ]
 },
 
  {
  numb: 4,
  question: 'What does hsl() stand for?',
  answer: 'hue, saturation, lightness',
  options: [
   'height, string, length',
   'hue, saturation, lightness',
   'hue, saturation, length',
   'height, saturation, light'
   
   ]
 },
 
  {
  numb: 5,
  question: 'What kind of data type is "100" ?',
  answer: 'String',
  options: [
   'Number',
   'Math.floor()',
   'Boolean',
   'String'
   ]
 },
 
  {
  numb: 6,
  question: 'All are JavaScript data types except...?',
  answer: 'Variable',
  options: [
   'Boolean',
   'String',
   'Numbers',
   'Variable'
   ]
 },
 
  {
  numb: 7,
  question: 'An example of absolute unit...?',
  answer: 'px',
  options: [
   '%',
   'rem',
   'px',
   'vw'
   ]
 },
 
  {
  numb: 8,
  question: 'What are favicons?',
  answer: 'An icon associated with a site',
  options: [
   'An array method',
   'A CSS property',
   'An icon associated with a site',
   'A site for importing icons'
   ]
 },
 
  {
  numb: 9,
  question: 'What does CDN stand for?',
  answer: 'Content Delivery Network',
  options: [
   'Content Delivery Net',
   'Content Delivery Network',
   'Cascading Distance Network',
   'Common Delivery Network'
   ]
 },
 
  {
  numb: 10,
  question: 'What does HTTP stand for?',
  answer: 'Hyper Text Transfer Protocol',
  options: [
   'Hyper Text Table Processor',
   'High Text Tool Pool',
   'Hyper Text Transfer Protocol',
   'High Tally Table Paragraph'
   ]
 },
 
  {
  numb: 11,
  question: 'What does XML stand for?',
  answer: 'eXtensible Markup Language',
  options: [
   'Xtensible Markup Link',
   'eXtensible Markup Language',
   'Extensible Multi Language',
   'Xtensible Multi Link'
   ]
 },
 
  {
  numb: 12,
  question: 'What does SQL stand for?',
  answer: 'Structured Query Language',
  options: [
   'Standard Quantum Limit',
   'Standard Query Language',
   'Structured Query Limit',
   'Structured Query Language'
   ]
 },
 
  {
  numb: 13,
  question: 'What does PHP stand for?',
  answer: 'Hypertext PreProcessor',
  options: [
   'Hypertext PreProcessor',
   'PreProcessor Hypertext',
   'Programming Hyper Processor',
   'Hometext processor'
   ]
 },
 
  {
  numb: 14,
  question: 'What does CSS stand for?',
  answer: 'Cascading Style Sheet',
  options: [
   'Cascading Style Sheet',
   'Computer Style Sheet',
   'Common Style Sheet',
   'Colorful Style Sheet'
   ]
 },
 
  {
  numb: 15,
  question: 'Which of these is a CSS framework?',
  answer: 'Bootstrap',
  options: [
   'jQuery',
   'Bootstrap',
   'React',
   'Vue'
   ]
 },
 
 
];




//Getting all required elements

let startButton = document.querySelector(".start-btn button");
let infoBox = document.querySelector(".info-box");
let exitButton = infoBox.querySelector(".buttons   .quit");
let continueButton = infoBox.querySelector(".buttons .restart");
let quizBox = document.querySelector(".quiz-box");
let timeCount = quizBox.querySelector(".timer .timer-sec");
let timeLine = quizBox.querySelector(".time-line");
let timeOff = quizBox.querySelector(".timer-text");

let optionList = document.querySelector('.option-list');


//If Start button is clicked

startButton.onclick = () => {
 infoBox.classList.add("activeInfo"); //show InfoBox
 console.log('hey');
}



//If Exit button is clicked

exitButton.onclick = () => {
 infoBox.classList.remove("activeInfo"); //hide/remove infoBox
 console.log('go');
}
 
 
 
//If Continue button is clicked
continueButton.onclick = () => {
 infoBox.classList.remove("activeInfo"); //hide InfoBox
 quizBox.classList.add("activeQuiz"); //show quizBox
 showQuestions(0);
 queCounter(1);
 startTimer(15);
 startTimerLine(0);
 console.log('come');
}



let queCount = 0;
let queNumb = 1;
let counter;
let counterLine;
let timeValue = 15;
let widthValue = 0;
let userScore = 0;




let nextBtn = quizBox.querySelector('.next-btn');
let resultBox = document.querySelector('.result-box');
let restartQuiz = resultBox.querySelector('.restart-btn');
let quitQuiz = resultBox.querySelector('.quit-btn');



restartQuiz.onclick = () => {
 quizBox.classList.add("activeQuiz");
 resultBox.classList.remove("activeResult");
 let queCount = 0;
 let queNumb = 1;
 let timeValue = 15;
 let widthValue = 0;
 let userScore = 0;
 showQuestions(queCount);
 queCounter(queNumb);
 clearInterval(counter);
 startTimer(timeValue);
 clearInterval(counterLine);
 startTimerLine(widthValue);
 nextBtn.style.display = 'none';
 timeOff.textContent = "Time-Left:";
}




quitQuiz.onclick = () => {
 window.location.reload();
 console.log('Done');
}


//If Next btn is clicked


nextBtn.onclick = () => {
 
 if(queCount < questions.length - 1){
  queCount++;
  queNumb++;
 showQuestions(queCount);
 queCounter(queNumb);
 clearInterval(counter);
 startTimer(timeValue);
 clearInterval(counterLine);
 startTimerLine(widthValue);
 nextBtn.style.display = 'none';
 timeOff.textContent = "Time-Left:";
 }else{
  clearInterval(counter);
  clearInterval(counterLine);
  console.log('Questions completed');
  showResultBox();
 }
 
}



//Getting questions amd options from the array


let showQuestions = (index) => {
 let queText = document.querySelector('.que-text');
 let queTag = '<span>'+ questions[index].numb + '.  ' + questions[index].question +'</span>';
 let optionTag = '<div class="options">' + questions[index].options[0] + '<span></span></div>' + '<div class="options">'  + questions[index].options[1] + '<span></span></div>' + '<div class="options">'  + questions[index].options[2] + '<span></span></div>' +  '<div class="options">'  + questions[index].options[3] + '<span></span></div>';
 
 queText.innerHTML = queTag;
 optionList.innerHTML = optionTag;
 let option = optionList.querySelectorAll('.options');
 for(let i = 0; i < option.length; i++ ){
  option[i].setAttribute('onclick', 'optionSelected(this)');
 }
 console.log(queText)
 }
 
 
 let tickIcon = '<div class="icon-tick"><i class="fas fa-check"></i></div>';
 let crossIcon = '<div class="icon-cross"><i class="fas fa-times"></i></div>';


let optionSelected = (answer) => {
 clearInterval(counter);
 let userAns = answer.textContent;
 let correctAns = questions[queCount].answer;
 let allOptions = optionList.children.length;
 
 
 
 if(userAns == correctAns) {
  userScore += 1;
  console.log(userScore);
 answer.classList.add('correct');
 console.log('Answer is correct');
 answer.insertAdjacentHTML('beforeend', tickIcon);
}else{
 answer.classList.add('incorrect')
 console.log('Answer is wrong');
 answer.insertAdjacentHTML('beforeend', crossIcon);
 
 
 
 //if user answer is incorrect, automatically select correct answer.
 
 
 
 for( let i = 0; i < allOptions; i++){
  if(optionList.children[i].textContent == correctAns){
   optionList.children[i].setAttribute('class', 'options correct');
   optionList.children[i].insertAdjacentHTML('beforeend', tickIcon);
  }
   }
   
}


//Once user selects disable other options


for ( let i = 0; i < allOptions; i++ ) {
 optionList.children[i].classList.add('disabled');
}
nextBtn.style.display = 'block';
}



function showResultBox(){
 infoBox.classList.remove("activeInfo"); //hide InfoBox
 quizBox.classList.remove("activeQuiz"); //hide quizBox
 resultBox.classList.add("activeResult"); //show resultBox
 let scoreTest = resultBox.querySelector('.score-test');
 if(userScore > 10){
  let scoreTag = '<span>Yaaaay!🥳, You got <p>' + userScore +  '</p> out of <p>' + questions.length +  '</p></span>';
  scoreTest.innerHTML = scoreTag;
 } 
 else if(userScore > 7){
  let scoreTag = '<span>Niceeee!🎉, You got <p>' + userScore +  '</p> out of <p>' + questions.length +  '</p></span>';
  scoreTest.innerHTML = scoreTag;
 }
 else{
  let scoreTag = '<span>Nice try! You got only <p>' + userScore +  '</p> out of <p>' + questions.length +  '</p></span>';
  scoreTest.innerHTML = scoreTag;
 }
}


function startTimer(time){
  counter = setInterval(timer, 1000);
  function timer(){
   timeCount.textContent = time;
   time--;
   if(time < 9){
    let addZero = timeCount.textContent;
    timeCount.textContent = '0' + addZero;
   }
   if(time < 0){
    clearInterval(counter);
    timeCount.textContent = '00';
    timeOff.textContent = "Time Off";
    
  let correctAns = questions[queCount].answer;
  let allOptions = optionList.children.length;
    
  for( let i = 0; i < allOptions; i++){
  if(optionList.children[i].textContent == correctAns){
   optionList.children[i].setAttribute('class', 'options correct');
   optionList.children[i].insertAdjacentHTML('beforeend', tickIcon);
  }
   }
   
for ( let i = 0; i < allOptions; i++ ) {
 optionList.children[i].classList.add('disabled');
}
nextBtn.style.display = 'block';
   }
  }
}



function startTimerLine(time){
 counterLine = setInterval(timer, 44);
 function timer(){
  time += 1;
  timeLine.style.width = time + 'px';
  if(time > 357){
   clearInterval(counterLine);
  }
 }
 
}



let queCounter = (index) => {
let bottomQuesCounter = quizBox.querySelector('.total-que');
let totalQuesCountTag = '<span><p>'+ index +'</p> of <p>'+ questions.length +'</p> Questions</span>';
bottomQuesCounter.innerHTML = totalQuesCountTag;
}

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 



























































































































