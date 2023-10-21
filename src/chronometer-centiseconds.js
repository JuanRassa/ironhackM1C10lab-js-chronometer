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
    }, 10);
    this.intervalId = intervalId;
  }

  getMinutes() {
    // ... your code goes here
    let mins = Math.floor(this.currentTime / 6000);
    return mins;
  }

  getSeconds() {
    let secs = Math.floor((this.currentTime % 6000) / 100);
    return secs;
  }

  getCentiseconds() {
    let centisecs = this.currentTime % 100;
    return centisecs;
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
      )}:${this.computeTwoDigitNumber(
        this.getSeconds()
      )}${this.computeTwoDigitNumber(this.getCentiseconds())}`
    );
    return `${this.computeTwoDigitNumber(
      this.getMinutes()
    )}:${this.computeTwoDigitNumber(
      this.getSeconds()
    )}.${this.computeTwoDigitNumber(this.getCentiseconds())}`;
  }
}
