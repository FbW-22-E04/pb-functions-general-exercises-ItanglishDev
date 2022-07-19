// Ex 1

function takeOneParameter(parameter) {
  let newParameter = "";
  for (let i = 0; i <= 3; i++) {

    console.log(parameter);
  }
}

takeOneParameter("Cat");

// EX 2

function takeOneParameterFiveTimes(parameter) {
  let newParameter = "";
  for (let i = 0; i <= 5; i++) {
    newParameter = parameter.concat(newParameter);

  }
  console.log(newParameter);
}

takeOneParameterFiveTimes("Cat");


// Ex 3

function takesTwoParameters(num, string) {
  let newParameter = "";
  for (let i = 0; i < num; i++) {
    newParameter = string.concat(newParameter);

  }
  console.log(newParameter);
}

takesTwoParameters(3, "Woah")


// EX 4

function largestNumber(...largestNumber) {
  let largest = 0;
  for (let i = 0; i < largestNumber.length; i++) {
    if (largestNumber[i] > largest) {
      largest = largestNumber[i]
    }

  }
  for (let i = 0; i < largestNumber.length; i++) {
    if (largestNumber[i] === largest) {
    }

  }
  console.log(largest);
}
largestNumber(1, 6, 83, 91, 0, -4, 1337, 5)

// EX 5

function takeANumber(numb) {
  for (let i = 0; i < 125; i++) {
    if (numb % 10 == 0) {
      console.log("Even 10!");
    }

  }
}

takeANumber(10)

// EX 6

const largestOne = () => {
  console.log(Math.max(5, 8, 11, 54, 1));
}
largestOne()

// EX 7

const oneParameter = a =>
  typeof a === 'string' ? console.log(true) : console.log(false);


oneParameter("123")

//  EX 8

const twoParameters = (a, b) =>
  typeof a === 'string' && typeof b === 'string' ? console.log(true) : console.log(false);

twoParameters("a", '2')

// EX 9

const takeOneString = a => {
  let newValueString = a.split(" ")
  console.log(newValueString[0]);
}
takeOneString('Internetting is hard')

//EX 10

// const hardExerciseArrowFunction = string => {
//   let newString = "";
//   let newStringArray = string.split(" ")
//   for (let i = 0; i < newStringArray.length; i++) {
//     newString += newStringArray[i];
//     for (let j = 0; j < newStringArray.length; j++) {

//     }
//     console.log(newString.toString(""));
//   }
// }
// hardExerciseArrowFunction('cat food')

// EX 11
const firstLetterFunction = a => {
  console.log(a.slice(0, 1));
}
firstLetterFunction('dog')

// EX 12
const returnANewString = string => {
  let newString = string.split(" ")
  // console.log(newString);
  let brandNewString = "";
  for (let i = 0; i < newString.length; i++) {
    brandNewString += newString[i].slice(0, 1)
  }

  console.log(brandNewString.toString());
}

returnANewString('MongoDB Express Node Reac')


// EX 13
const recognizeString = a => {

  if (typeof a === 'string') {
    console.log(a.length);
  } else if (typeof a.isArray) {
    console.log(a.length)
  } else {
    console.log(null)
  }
}
recognizeString(['jfnjvn', 'dwc', 'xwdcx'])


// EX 14

const isItAString = string => {
  if (typeof string === 'string') {
    console.log(string.split(""));
  } else {
    console.log(null);
  }
}

isItAString('R & D')