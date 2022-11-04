// CLEAR
const clear = document.querySelector(".clear");

clear.addEventListener("click", (e) => {
  clearInput();
});

function clearInput() {
  let input = document.querySelector(".input");
  input.value = "";
  let error = document.querySelector(".error-message");
  error.innerHTML = "";
}

// CALCULATE
const calculate = document.querySelector(".calculate");

calculate.addEventListener("click", (e) => {
  calcSanitise();
});

function calcSanitise() {
  let input = document.querySelector(".input");
  if (!input.value) {
    // If no input
    let error = document.querySelector(".error-message");
    error.innerHTML = "Please input at least 2 values.";
  } else {
    // Removing invalid characters
    let sanitisedInput = input.value.replace(/[^0-9\.\,]+/g, "");
    input.value = sanitisedInput;
    // Converting to array
    let arr = sanitisedInput.split(",");
    let intArr = [];
    // Converting to number valid integers and floats
    arr.forEach((number) => {
      if (!isNaN(number * 1)) {
        intArr.push(number * 1);
      }
    });
    input.value = intArr.join(",");
    if (intArr.length < 2) {
      let error = document.querySelector(".error-message");
      error.innerHTML = "Please input at least valid 2 values.";
    } else {
      //calc median, calc mode
      document.querySelector(".value-mean").innerHTML = calcMean(intArr);
      document.querySelector(".value-median").innerHTML = calcMedian(intArr);
    }
  }
}

// MEAN

function calcMean(values) {
  let count = 0;
  // Sum of values
  values.forEach((number) => {
    count = count + number;
  });
  // Sum divided by amount of values
  return count / values.length;
}

// MEDIAN

function calcMedian(values) {
  // Sort in ascending order
  values.sort(function (a, b) {
    return a - b;
  });
  //   Find halfway index
  let halfIndex = Math.floor(values.length / 2);

  if (values.length % 2) {
    // Even number of values
    return values[halfIndex];
  } else {
    // Odd number of values
    return (values[halfIndex - 1] + values[halfIndex]) / 2.0;
  }
}
