class Activity {
  constructor(category, input, min, sec) {
    this.id = Date.now();
    this.category = category;
    this.description = input;
    this.minutes = min;
    this.seconds = sec;
    this.completed = []
  }
  // will initiate countdown timer (using numbers input by user) upon btn click "Start Activity", and alert user when time is up, and then invoke markComplete() func
// counts down, then alerts user of time up, creates new instance of activity, and invokes next method
  countdown() {

  }
  // will push dynamic HTML into completed activities array and changing the appropriate HTML element to match, then invoke saveToStorage()
// assign vars dynamically to "keys" (instances of Activity class), pushes dynamic html with instance interpolated into this.completed array
  markComplete() {

  }
  // will save completed activities to local storage
// uses docqueryselec.values and passes them to storage along with vars created by markComplete as the keys (which are passed using quotes: "key")
  saveToStorage() {

  }
}
