function outputPlus() {
  document.getElementById('numberOne');
  document.getElementById('numberTwo');
  var numOne = Number(numberOne);
  var numTwo = Number(numberTwo);
  var numThree = numOne + numTwo;
  document.getElementById('btn1').innerHTML = numThree;
}

function outputMultiply() {
  document.getElementById('numberFour');
  document.getElementById('numberFive');
  var numFour = Number(numberFour);
  var numFive = Number(numberFive);
  var numSix = numFour * numFive;
  document.getElementById('btn2').innerHTML = numSix;
}

function outputDivide() {
  document.getElementById('numberSeven');
  document.getElementById('numberEight');
  var numSeven = Number(numberSeven);
  var numEight = Number(numberEight);
  var numNine = numSeven / numEight;
  document.getElementById('btn3').innerHTML = numNine;
}
