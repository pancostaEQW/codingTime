//1 task
for (let i = 10; i <= 50; i++) {
  console.log(i);
}

//2 task
const iAm = {
  name: "Pavel",
  surname: "Serikov",
  age: 26,
  animal: false,
};

//3 task
const array = [
  "я в Симбирск,",
  "в трактире.",
  "с утра",
  "В ту же ночь",
  "Я остановился",
  "для закупки",
  "что и было поручено Савельичу.",
  "приехал,",
  "где должен был",
  "нужных вещей",
  "отправился по лавкам",
  "пробыть сутки",
  "Савельич",
];
let result =
  array[3] +
  " " +
  array[7] +
  " " +
  array[0] +
  " " +
  array[8] +
  " " +
  array[11] +
  " " +
  array[5] +
  " " +
  array[9] +
  " " +
  array[6] +
  " " +
  array[4] +
  " " +
  array[1] +
  " " +
  array[12] +
  " " +
  array[2] +
  " " +
  array[10];
console.log(result);

// 4 task
function myName (firstName, lastName) {
    const fullName = `${firstName} ${lastName}`;
    console.log(fullName);
}
myName('Pavel', 'Serikov');

// 5 task
let firstNum = 21; 
while (firstNum <= 67) {
    console.log(firstNum)
    firstNum = firstNum + 2
}