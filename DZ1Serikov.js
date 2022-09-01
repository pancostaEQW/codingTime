// 1 task
let city = "Kasli";
let country = "Russia";
let peopleNumbers = 15673;
let stadion = true;

// 2 task
let a = 40;
let b = 70;
let square = a * b + "cm";
console.log(square);

// 3 task
let time = 2;
let speedOfFirst = 95;
let speedOfSecond = 114;
let fullDistance = time * speedOfFirst + time * speedOfSecond;
console.log(fullDistance);

// 4 task
const randomNumber = Math.floor(Math.random() * 100);
if (randomNumber < 20) {
  console.log("randomNumber меньше 20");
} else if (randomNumber > 50) {
  console.log("randomNumber больше 50");
} else console.log("randomNumber больше 20, и меньше 50");

// 5 task
switch (true) {
  case randomNumber < 20:
    console.log("randomNumber меньше 20");
    break;
  case randomNumber > 50:
    console.log("randomNumber больше 50");
    break;
  default:
    console.log("randomNumber больше 20, и меньше 50");
    break;
}