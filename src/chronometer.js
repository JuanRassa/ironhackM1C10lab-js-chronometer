class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }
  start(printTimeCallback) {
    // ... your code goes here
    const intervalId = setInterval(() => {
      this.currentTime++;
      if (printTimeCallback) printTimeCallback();
    }, 1000);
    this.intervalId = intervalId;
  }

  getMinutes() {
    // ... your code goes here
    let mins = Math.floor(this.currentTime / 60);
    return mins;
  }

  getSeconds() {
    // ... your code goes here
    let secs = this.currentTime % 60;
    return secs;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    let stringType = value.toString();
    return stringType.length === 1 ? `0${stringType}` : stringType;
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    console.log(
      `${this.computeTwoDigitNumber(
        this.getMinutes()
      )}:${this.computeTwoDigitNumber(this.getSeconds())}`
    );
    return `${this.computeTwoDigitNumber(
      this.getMinutes()
    )}:${this.computeTwoDigitNumber(this.getSeconds())}`;
  }
}
