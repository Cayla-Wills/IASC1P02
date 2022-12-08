function outputPlus() {
  var numberOne = document.getElementById('numberOne').value;
  var numberTwo = document.getElementById('numberTwo').value;
  var numOne = Number(numberOne);
  var numTwo = Number(numberTwo);
  document.getElementById('results').innerHTML= numOne + numTwo;
}

function outputSub() {
  var numberThree = document.getElementById('numberThree').value;
  var numberFour = document.getElementById('numberFour').value;
  var numThree = Number(numberThree);
  var numFour = Number(numberFour);
  document.getElementById('resultsTwo').innerHTML= numThree - numFour;
}

function outputMulti() {
  var numberFive = document.getElementById('numberFive').value;
  var numberSix = document.getElementById('numberSix').value;
  var numFive = Number(numberFive);
  var numSix = Number(numberSix);
  document.getElementById('resultsThree').innerHTML= numFive * numSix;
}

function outputDivi() {
  var numberSeven = document.getElementById('numberSeven').value;
  var numberEight = document.getElementById('numberEight').value;
  var numSeven = Number(numberSeven);
  var numEight = Number(numberEight);
  document.getElementById('resultsFour').innerHTML= numSeven / numEight;
}
