var countdownTimer = document.querySelector('.countdown');
var startActivity = document.querySelector('.btn-start-activity');
var inputMinute = document.querySelector('#min');
var inputSecond = document.querySelector('#sec');
var inputDescription = document.querySelector('#txt');
var inputActivity = document.querySelector('.input-activity');
var cardSelectCategory = document.querySelector('.select-a-category');

var btnActivities = document.querySelector('.btn-activities');
var btnStudy = document.querySelector('#btnStudy');
var btnMeditate = document.querySelector('#btnMeditate');
var btnExercise = document.querySelector('#btnExercise');
var txtStudy = document.querySelector('#txtStudy');
var txtMeditate = document.querySelector('#txtMeditate');
var txtExercise = document.querySelector('#txtExercise');
var txtTextError = document.querySelector('.text-txt-error');
var txtMinError = document.querySelector('.text-min-error');
var txtSecError = document.querySelector('.text-sec-error');
var imgTextError = document.querySelector('.image-txt-error');
var imgMinError = document.querySelector('#minError');
var imgSecError = document.querySelector('#secError');
var imgStudy = document.querySelector('#imgStudy');
var imgMeditate = document.querySelector('#imgMeditate');
var imgExercise = document.querySelector('#imgExercise');
var imgStudyAlt = document.querySelector('#imgStudyAlt');
var imgMeditateAlt = document.querySelector('#imgMeditateAlt');
var imgExerciseAlt = document.querySelector('#imgExerciseAlt');

var exerciseCategory;

startActivity.addEventListener('click', startCount);
btnStudy.addEventListener('click', changeStudyColor);
btnMeditate.addEventListener('click', changeMeditateColor);
btnExercise.addEventListener('click', changeExerciseColor);

function startCount() {
  var totalInput = inputMinute.value + inputSecond.value;
  if (totalInput > 0 && Number.isInteger(parseInt(inputMinute.value)) && Number.isInteger(parseInt(inputSecond.value)) && inputDescription.value !== '') {
    cardSelectCategory.classList.add('hidden');
    countdownTimer.classList.remove('hidden');
    var classInstance = new Activity('exercise', inputDescription.value, inputMinute.value, inputSecond.value);
    classInstance.saveToStorage(classInstance);
    classInstance.countdown();
  } else if (inputDescription.value === '') {
    descError();
  } else if (!Number.isInteger(parseInt(inputMinute.value))) {
    minError();
  } else if (!Number.isInteger(parseInt(inputSecond.value))) {
    secError();
  }
  // } else if (input)
  // }
}

function descError() {
  txtTextError.classList.remove('hidden');
  imgTextError.classList.remove('hidden');
  txtErrorStyling();
}

function minError() {
  txtMinError.classList.remove('hidden');
  imgMinError.classList.remove('hidden');
  minuteErrorStyling();
}

function secError() {
  txtSecError.classList.remove('hidden');
  imgSecError.classList.remove('hidden');
  secondErrorStyling();
}

function secondErrorStyling() {
  inputSecond.classList.add('input-activity-error');
  inputSecond.classList.remove('input-activity');
}

function txtErrorStyling() {
  inputDescription.classList.add('input-activity-error');
  inputDescription.classList.remove('input-activity');
}

function minuteErrorStyling() {
  inputMinute.classList.add('input-activity-error');
  inputMinute.classList.remove('input-activity');
}

function changeStudyColor() {
  txtStudy.classList.toggle('study-text-top-button');
  btnStudy.classList.toggle('study-btn-activity');
  imgStudy.classList.toggle('hidden');
  imgStudyAlt.classList.toggle('hidden');
}

function changeMeditateColor(){
  txtMeditate.classList.toggle('meditate-text-top-button');
  btnMeditate.classList.toggle('meditate-btn-activity');
  imgMeditate.classList.toggle('hidden');
  imgMeditateAlt.classList.toggle('hidden');
}

function changeExerciseColor(){
  txtExercise.classList.toggle('exercise-text-top-button');
  btnExercise.classList.toggle('exercise-btn-activity');
  imgExercise.classList.toggle('hidden');
  imgExerciseAlt.classList.toggle('hidden');
}

function errorHandler() {

}
