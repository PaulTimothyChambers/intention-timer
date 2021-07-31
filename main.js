// var countdownTimer = document.querySelector('.countdown');
// var startActivity = document.querySelector('.btn-start-activity');
// var inputMinute = document.querySelector('#min');
// var inputSecond = document.querySelector('#sec');

// var classInstance = new Activity('exercise', 'Doing things', 5, 34);

// startActivity.addEventListener('click', startCount)

// function startCount() {
//   countdownTimer.classList.remove('hidden');
//   var classInstance = new Activity('exercise', 'Doing things', 5, 34);
//   setInterval(countdown, 1000);
//   var seconds = inputSecond.value;
//   var minutes = inputMinute.value * 60;
//   let time = parseInt(minutes) + parseInt(seconds)
//
//     function countdown() {
//       const minutesLeft = Math.floor(time / 60);
//       let secondsLeft = time % 60;
//       secondsLeft = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft
//       document.querySelector('.countdown').innerHTML = `<span>${minutesLeft}: ${secondsLeft}</span>`
//       time--;
//     }
// }

var countdownTimer = document.querySelector('.countdown');
var startActivity = document.querySelector('.btn-start-activity');
var inputMinute = document.querySelector('#min');
var inputSecond = document.querySelector('#sec');
// var studyBtn = document.querySelector('#study-button');
// var meditateBtn = document.querySelector('#meditate-button');
// var exerciseBtn = document.querySelector('#exercise-button');
// var classInstance = new Activity('exercise', 'Doing things', 5, 34);
var btnActivities = document.querySelector('.btn-activities');
var studyBtn = document.querySelector('#study-btn');
var meditateBtn = document.querySelector('#meditate-btn');
var exerciseBtn = document.querySelector('#exercise-btn');
var textStudy = document.querySelector('#textstudy')
var textMedi = document.querySelector('#textmedi')
var textExer = document.querySelector('#textexer')
var imgStud = document.querySelector('#imgstud')
var imgMedi = document.querySelector('#imgmedi')
var imgExer = document.querySelector('#imgexer')

//query selectors for button and images

// startActivity.addEventListener('click', startCount)
// btnActivities.addEventListener('click', clickActivityButton)
studyBtn.addEventListener('click', changeStudyColor);
meditateBtn.addEventListener('click', changeMeditateColor);
exerciseBtn.addEventListener('click', changeExerciseColor);

// function startCount() {
//   countdownTimer.classList.remove('hidden');
//   var classInstance = new Activity('exercise', 'Doing things', 5, 34);
//   setInterval(countdown, 1000);
//   var seconds = inputSecond.value;
//   var minutes = inputMinute.value * 60;
//   let time = parseInt(minutes) + parseInt(seconds)
//
//     function countdownDisplay() {
//       const minutesLeft = Math.floor(time / 60);
//       let secondsLeft = time % 60;
//       secondsLeft = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft
//       document.querySelector('.countdown').innerHTML = `<span>${minutesLeft}: ${secondsLeft}</span>`
//       time--;
//     }

//changing colors on the buttons when they are clicked
//need to take click eventListener to instigate the function
//if clicled -- check and change

// function changeColor() {
//
// }
function changeStudyColor() {
  textStudy.classList.add('study-text-top-button');
  studyBtn.classList.add('study-btn-activity');
  imgStud.classList.add('study-image-activity');
  // studyBtn.classList.remove('text-top-buttons');
  // studyBtn.classList.remove('btn-activites');
  // studyBtn.classList.remove('image-activities');

}

function changeMeditateColor(){
  textMedi.classList.add('meditate-text-top-button');
  meditateBtn.classList.add('meditate-btn-activity');
  imgMedi.classList.add('meditate-image-activity');
  // meditateBtn.classList.remove('text-top-buttons');
  // meditateBtn.classList.remove('btn-activites');
  // meditateBtn.classList.remove('image-activities');
}

function changeExerciseColor(){
  textExer.classList.add('exercise-text-top-button');
  exerciseBtn.classList.add('exercise-btn-activity');
  imgExer.classList.add('exercise-image-activity');
  // exerciseBtn.classList.remove('text-top-buttons');
  // exerciseBtn.classList.remove('btn-activites');
  // exerciseBtn.classList.remove('image-activities');
}
