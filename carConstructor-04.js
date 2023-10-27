function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;
}

Car.prototype.fill = (gallons) => {
  this.tank += gallons;
}

Car.prototype.drive = (distance) => {
  if (!this.tank) {
    return 'can`t drive any more distance'
  }
  const realMiles = this.tank * this.milesPerGallon;
  if (distance <= realMiles) {
    this.odometer += distance;
    this.tank -= distance / this.milesPerGallon;
  } else {
    this.odometer += realMiles;
    this.tank = 0;
    return `I ran out of fuel at ${this.odometer} miles!`;
  }
}