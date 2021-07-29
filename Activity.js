class Activity {
  constructor(category, input, min, sec) {
    this.id = Date.now();
    this.category = category;
    this.description = input;
    this.minutes = min;
    this.seconds = sec;
    this.isCompleted = false
  }
  countdown() {
    
  }
  markComplete() {

  }
  saveToStorage() {

  }
}
