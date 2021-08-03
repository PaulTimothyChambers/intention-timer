var countdownTimer = document.querySelector('.countdown');
var inputMinute = document.querySelector('#min');
var inputSecond = document.querySelector('#sec');
var inputDescription = document.querySelector('#txt');
var inputActivity = document.querySelector('.input-activity');
var cardSelectCategory = document.querySelector('.select-a-category');
var sectionTwo = document.querySelector('#sectionTwo');
var startActivity = document.querySelector('.btn-start-activity');
var startTimer = document.querySelector('.btn-start-timer');
var baseTimer = document.querySelector('.base-timer');

var btnLogActivity = document.querySelector('.btn-log-activity');
var btnActivities = document.querySelector('.btn-activities');
var btnStudy = document.querySelector('#btnStudy');
var btnMeditate = document.querySelector('#btnMeditate');
var btnExercise = document.querySelector('#btnExercise');
var btnCategories = document.querySelector('.btn-categories');
var txtStudy = document.querySelector('#txtStudy');
var txtMeditate = document.querySelector('#txtMeditate');
var txtExercise = document.querySelector('#txtExercise');
var txtCategoryError = document.querySelector('.text-category-error');
var txtTextError = document.querySelector('.text-txt-error');
var txtMinError = document.querySelector('.text-min-error');
var txtSecError = document.querySelector('.text-sec-error');
var txtCardHeader = document.querySelector('.text-card-header');
var txtCategory = document.querySelector('.text-category');
var txtComplete = document.querySelector('#txtComplete');
var imgCategoryError = document.querySelector('.image-category-error');
var imgTextError = document.querySelector('.image-txt-error');
var imgMinError = document.querySelector('#minError');
var imgSecError = document.querySelector('#secError');
var imgStudy = document.querySelector('#imgStudy');
var imgMeditate = document.querySelector('#imgMeditate');
var imgExercise = document.querySelector('#imgExercise');
var imgStudyAlt = document.querySelector('#imgStudyAlt');
var imgMeditateAlt = document.querySelector('#imgMeditateAlt');
var imgExerciseAlt = document.querySelector('#imgExerciseAlt');
var imgLoggedActivities = document.querySelector('.logged-activities');

var activityCategory;
var currentActivity;
var key;

// btnLogActivity.addEventListener('click', )
startTimer.addEventListener('click', startTimerNow);
startActivity.addEventListener('click', determineCategory);
btnStudy.addEventListener('click', changeStudyColor);
btnMeditate.addEventListener('click', changeMeditateColor);
btnExercise.addEventListener('click', changeExerciseColor);

function determineCategory() {
  if (btnStudy.classList.value === 'btn-activities study-btn-activity') {
    activityCategory = 'Study';
    checkFields();
    return activityCategory;
  } else if (btnMeditate.classList.value === 'btn-activities meditate-btn-activity') {
    activityCategory = 'Meditate';
    checkFields();
    return activityCategory;
  } else if (btnExercise.classList.value === 'btn-activities exercise-btn-activity') {
    activityCategory = 'Exercise';
    checkFields();
    return activityCategory;
  } else if (btnStudy.classList.value !== 'btn-activities study-btn-activity' && btnMeditate.classList.value !== 'btn-activities meditate-btn-activity' && btnExercise.classList.value !== 'btn-activities exercise-btn-activity') {
    categoryError();
  }
}

function checkFields() {
  var totalInput = parseInt(inputMinute.value * 60) + parseInt(inputSecond.value);
  if (totalInput > 0 && Number.isInteger(parseInt(inputMinute.value)) && Number.isInteger(parseInt(inputSecond.value)) && inputDescription.value !== '' && activityCategory === 'Study') {
    var minutesLeft = Math.floor(totalInput / 60);
    var secondsLeft = totalInput % 60;
    secondsLeft = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;
    countdownTimer.innerHTML = `
      <text class="text-description">${inputDescription.value}</text>
      <div class="base-timer">
        <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <g class="base-timer__circle">
            <circle class="base-timer__study" cx="50" cy="50" r="45"></circle>
          </g>
        </svg>
        <span id="base-timer-label" class="base-timer__label">
          ${minutesLeft}: ${secondsLeft}
        </span>
      </div>`;
    changeCardsToTimer();
  } else if (totalInput > 0 && Number.isInteger(parseInt(inputMinute.value)) && Number.isInteger(parseInt(inputSecond.value)) && inputDescription.value !== '' && activityCategory === 'Meditate') {
    var minutesLeft = Math.floor(totalInput / 60);
    var secondsLeft = totalInput % 60;
    secondsLeft = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;
    countdownTimer.innerHTML = `
      <text class="text-description">${inputDescription.value}</text>
      <div class="base-timer">
        <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <g class="base-timer__circle">
            <circle class="base-timer__meditate" cx="50" cy="50" r="45"></circle>
          </g>
        </svg>
        <span id="base-timer-label" class="base-timer__label">
          ${minutesLeft}: ${secondsLeft}
        </span>
      </div>`;
    changeCardsToTimer();
  } else if (totalInput > 0 && Number.isInteger(parseInt(inputMinute.value)) && Number.isInteger(parseInt(inputSecond.value)) && inputDescription.value !== '' && activityCategory === 'Exercise') {
    var minutesLeft = Math.floor(totalInput / 60);
    var secondsLeft = totalInput % 60;
    secondsLeft = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;
    countdownTimer.innerHTML = `
      <text class="text-description">${inputDescription.value}</text>
      <div class="base-timer">
        <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <g class="base-timer__circle">
            <circle class="base-timer__exercise" cx="50" cy="50" r="45"></circle>
          </g>
        </svg>
        <span id="base-timer-label" class="base-timer__label">
          ${minutesLeft}: ${secondsLeft}
        </span>
      </div>`;
    changeCardsToTimer();
  } else if (inputDescription.value === '') {
    descError();
  } else if (!Number.isInteger(parseInt(inputMinute.value))) {
    minError();
  } else if (!Number.isInteger(parseInt(inputSecond.value))) {
    secError();
  }
}

function startTimerNow() {
  var classInstance = new Activity(activityCategory, inputDescription.value, inputMinute.value, inputSecond.value);
  key = classInstance.id;
  localStorage.setItem(JSON.stringify(key), JSON.stringify(classInstance));
  classInstance.countdown();
  startTimer.classList.add('hidden');
}

function categoryError() {
  txtCategoryError.classList.remove('hidden');
  imgCategoryError.classList.remove('hidden');
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
  hideAltMedi()
  hideAltExer()
}

function changeMeditateColor(){
  txtMeditate.classList.toggle('meditate-text-top-button');
  btnMeditate.classList.toggle('meditate-btn-activity');
  imgMeditate.classList.toggle('hidden');
  imgMeditateAlt.classList.toggle('hidden');
  hideAltStudy()
  hideAltExer()
}

function changeExerciseColor(){
  txtExercise.classList.toggle('exercise-text-top-button');
  btnExercise.classList.toggle('exercise-btn-activity');
  imgExercise.classList.toggle('hidden');
  imgExerciseAlt.classList.toggle('hidden');
  hideAltMedi()
  hideAltStudy()
}

function hideAltMedi() {
  txtMeditate.classList.remove('meditate-text-top-button');
  btnMeditate.classList.remove('meditate-btn-activity');
  imgMeditate.classList.remove('hidden');
  imgMeditateAlt.classList.add('hidden');
}

function hideAltExer() {
  txtExercise.classList.remove('exercise-text-top-button');
  btnExercise.classList.remove('exercise-btn-activity');
  imgExercise.classList.remove('hidden');
  imgExerciseAlt.classList.add('hidden');
}

function hideAltStudy() {
  txtStudy.classList.remove('study-text-top-button');
  btnStudy.classList.remove('study-btn-activity');
  imgStudy.classList.remove('hidden');
  imgStudyAlt.classList.add('hidden');
}

function changeCardsToTimer() {
  txtCardHeader.innerText = 'Current Activity';
  countdownTimer.classList.remove('hidden');
  txtCategory.classList.add('hidden');
  txtCategoryError.classList.add('hidden');
  imgCategoryError.classList.add('hidden');
  btnCategories.classList.add('hidden');
  sectionTwo.classList.add('hidden');
  startActivity.classList.add('hidden');
  startTimer.classList.remove('hidden');

}
