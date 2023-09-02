/*
Create a method in the Person class which returns how another person's age compares. Given the
instances p1, p2 and p3, which will be initialised with the attributes name and age, return a sentence in the
following format:
{other person name} is {older than / younger than / the same age as} me.
*/

function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.compareAge = function (obj) {
  if (this.age > obj.age) return `${obj.name} is younger than me.`
  if (this.age < obj.age) return `${obj.name} is older than me.`
  return `${obj.name} is the same age as me.`
}
