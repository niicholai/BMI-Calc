function bmiPromptImperial() {
  var heightImp = prompt("What is your height in inches?");
  var weightImp = prompt("What is your weight in pounds?");
  var finalBmiImp = ((weightImp / (heightImp * heightImp)) * 703);
  alert("Your BMI is " + Math.floor(finalBmiImp) + ", hope this has been informative!")
}

function bmiPromptMetric() {
  var heightMet = prompt("What is your height in meters?");
  var weightMet = prompt("What is your weight in kilograms?");
  var finalBmiMet = ((weightMet / (heightMet * heightMet)) * 10000);
  alert("Your BMI is " + Math.floor(finalBmiMet) + ", hope this has been informative!")
}
