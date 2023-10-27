function Person(name = '', age = 18) {
  this.name = name;
  this.age = age;
  this.stomach = []
}
Person.prototype.eat = function (food) {
  if (this.stomach.length < 10)
    this.stomach.push(food)
}
Person.prototype.poop = function () {
  this.stomach.length = 0;
}
Person.prototype.toString = function () {
  return `${this.name}, ${this.age}`
}


function Baby(name, age, favoriteToy) {
  Person.call(this, name, age);
  this.favoriteToy = favoriteToy;
}

Baby.prototype = Object.create(Person.prototype);
Baby.prototype.constructor = Baby;
Baby.prototype.play = function () {
  return "Playing with " + this.favoriteToy;
};
