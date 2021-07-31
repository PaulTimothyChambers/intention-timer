var countdownTimer = document.querySelector('.countdown');
var startActivity = document.querySelector('.btn-start-activity');
var inputMinute = document.querySelector('#min');
var inputSecond = document.querySelector('#sec');
//
// var studyBtn = document.querySelector('#study-button');
// var meditateBtn = document.querySelector('#meditate-button');
// var exerciseBtn = document.querySelector('#exercise-button');
// var classInstance = new Activity('exercise', 'Doing things', 5, 34);
var btnActivities = document.querySelector('.btn-activities');
var studyBtn = document.querySelector('#study-btn');
var meditateBtn = document.query('#meditate-btn');
var exerciseBtn = document.querySelector('#exercise-btn');
//query selectors for button and images

startActivity.addEventListener('click', startCount)
btnActivities.addEventListener('click', clickActivityButton)
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
}
//changing colors on the buttons when they are clicked
//need to take click eventListener to instigate the function
//if clicled -- check and change

// function changeColor() {
//
// }
function changeStudyColor() {
studyBtn.classList.add('study-text-top-button');
studyBtn.classList.add('study-btn-activity');
studyBtn.classList.add('study-image-activity');
}

function changeMeditateColor(){
meditateBtn.classList.add('meditate-text-top-button');
meditateBtn.classList.add('meditate-btn-activity');
meditateBtn.classList.add('meditate-image-activity');
}

function changeExerciseColor(){
exerciseBtn.classList.add('exercise-text-top-button');
exerciseBtn.classList.add('exercise-btn-activity');
exerciseBtn.classList.add('exercise-image-activity');
}
