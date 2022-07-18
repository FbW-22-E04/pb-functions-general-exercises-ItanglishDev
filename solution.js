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