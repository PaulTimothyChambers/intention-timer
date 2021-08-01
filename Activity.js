class Activity {
  constructor(category, input, min, sec) {
    this.id = Date.now();
    this.category = category;
    this.description = input;
    this.minutes = min;
    this.seconds = sec;
    this.completed = [];
  }
  // will initiate countdown timer (using numbers input by user) upon btn click "Start Activity", and alert user when time is up, and then invoke markComplete() func
// counts down, then alerts user of time up, creates new instance of activity, and invokes next method
  countdown() {
    setInterval(countdownDisplay, 1000);
    var seconds = this.seconds;
    var minutes = this.minutes * 60;
    let time = parseInt(minutes) + parseInt(seconds);

      function countdownDisplay() {
        if (time >= 0) {
          var minutesLeft = Math.floor(time / 60);
          var secondsLeft = time % 60;
          secondsLeft = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;
          document.querySelector('.countdown').innerHTML = `
            <div class="base-timer">
              <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <g class="base-timer__circle">
                  <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
                </g>
              </svg>
              <span id="base-timer-label" class="base-timer__label">
                ${minutesLeft}: ${secondsLeft}
              </span>
            </div>`
          time--;
        } else {
          return;
        }
      }
  }

  // markComplete(newInstance) {
  //   completedActivities.innerHTML +=
  //     <section class="">
  //       <div class="">${newInstance.category}</div>
  //       <div></div>
  //       <div class="">${newInstance.description},/div>
  //       etc.
  //     </section>
// }

  saveToStorage(newInstance) {
    localStorage.setItem('completedActivity', JSON.stringify(newInstance))
  }
}
