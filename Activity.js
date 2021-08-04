class Activity {
  constructor(category, input, min, sec) {
    this.id = Date.now();
    this.category = category;
    this.description = input;
    this.minutes = min;
    this.seconds = sec;
    this.completed = false;
  }

  countdown() {
    setInterval(countdownDisplay, 1000);
    var seconds = this.seconds;
    var minutes = this.minutes * 60;
    let time = parseInt(minutes) + parseInt(seconds);
    var description = this.description

      function countdownDisplay() {
        if (time >= 0 && btnStudy.classList.value === 'btn-activities study-btn-activity') {
          var minutesLeft = Math.floor(time / 60);
          var secondsLeft = time % 60;
          secondsLeft = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;
          countdownTimer.innerHTML = `
            <text class="text-description">${description}</text>
            <div class="base-timer">
              <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <g class="base-timer__circle">
                  <circle class="base-timer__study" cx="50" cy="50" r="45"></circle>
                </g>
              </svg>
              <span id="base-timer-label" class="base-timer__label">
                ${minutesLeft}:${secondsLeft}
              </span>
            </div>`
          time--;
        } else if (time >= 0 && btnMeditate.classList.value === 'btn-activities meditate-btn-activity') {
          var minutesLeft = Math.floor(time / 60);
          var secondsLeft = time % 60;
          secondsLeft = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;
          countdownTimer.innerHTML = `
            <text class="text-description">${description}</text>
            <div class="base-timer">
              <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <g class="base-timer__circle">
                  <circle class="base-timer__meditate" cx="50" cy="50" r="45"></circle>
                </g>
              </svg>
              <span id="base-timer-label" class="base-timer__label">
                ${minutesLeft}:${secondsLeft}
              </span>
            </div>`
          time--;
        } else if (time >= 0 && btnExercise.classList.value === 'btn-activities exercise-btn-activity') {
          var minutesLeft = Math.floor(time / 60);
          var secondsLeft = time % 60;
          secondsLeft = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;
          countdownTimer.innerHTML = `
            <text class="text-description">${description}</text>
            <div class="base-timer">
              <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <g class="base-timer__circle">
                  <circle class="base-timer__exercise" cx="50" cy="50" r="45"></circle>
                </g>
              </svg>
              <span id="base-timer-label" class="base-timer__label">
                ${minutesLeft}:${secondsLeft}
              </span>
            </div>`
          time--;
        } else if (time < 0) {
          btnLogActivity.classList.remove('hidden');
          txtComplete.classList.remove('hidden');
        }
      }
  }

  saveToStorage() {
    logged.unshift(this);
    var stringifiedLogCards = JSON.stringify(logged);
    localStorage.setItem('insta', stringifiedLogCards);
  }
}
