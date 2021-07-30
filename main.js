var countdownTimer = document.querySelector('.countdown');
var startActivity = document.querySelector('.btn-start-activity');
var inputMinute = document.querySelector('#min');
var inputSecond = document.querySelector('#sec');

// var classInstance = new Activity('exercise', 'Doing things', 5, 34);

startActivity.addEventListener('click', startCount)

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
