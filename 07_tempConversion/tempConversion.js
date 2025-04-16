const convertToCelsius = function(x) {
  let fahrenheitCoverted = (x - 32) * (5 / 9);
  let fixedResult = +fahrenheitCoverted.toFixed(1);

  if (fixedResult === 0.0) {
    return 0;
  } else {
    return fixedResult;
  };
  
};

const convertToFahrenheit = function(y) {
  let celsiusConverted = (y * (9 / 5)) + 32;
  let fixedResult = +celsiusConverted.toFixed(1);

  if (fixedResult === 0.0) {
    return 0;
  } else {
    return fixedResult;
  };
  
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
