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
  countdown() {
    
  }
  // will push dynamic HTML into completed activities array and changing the appropriate HTML element to match, then invoke saveToStorage()
  markComplete() {

  }
  // will save completed activities to local storage
  saveToStorage() {

  }
}
