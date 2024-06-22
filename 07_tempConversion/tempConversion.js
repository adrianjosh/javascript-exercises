const convertToCelsius = function(temp) {
  let tempConversion = ((temp - 32) * (5/9));
  let roundedTemp = Math.round(tempConversion * 10) / 10;
  return roundedTemp;
};

const convertToFahrenheit = function(temp) {
  let tempConversion = ((temp * (9/5)) +32)
  let roundedTemp = Math.round(tempConversion * 10) / 10;
  return roundedTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
