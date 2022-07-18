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

