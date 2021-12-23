function bmiPromptImperial() {
  var heightImp = prompt("What is your height in inches?");
  var weightImp = prompt("What is your weight in pounds?");
  var finalBmiImp = ((weightImp / (heightImp * heightImp)) * 703);
  if (finalBmiImp < 18.5) {
    alert("Your BMI is " + finalBmiImp.toFixed(1) + ", this indicates you are underweight.");
  }
  if (finalBmiImp >= 18.5 && finalBmiImp <= 24.9) {
    alert("Your BMI is " + finalBmiImp.toFixed(1) + ", this indicates you are of normal weight.");
  }
  if (finalBmiImp >= 25) {
    alert("Your BMI is " + finalBmiImp.toFixed(1) + ", this indicates you are overweight.");
  }
};

function bmiPromptMetric() {
  var heightMet = prompt("What is your height in centimeters?");
  var weightMet = prompt("What is your weight in kilograms?");
  var finalBmiMet = ((weightMet / (heightMet * heightMet)) * 10000);
  if (finalBmiMet < 18.5) {
    alert("Your BMI is " + finalBmiImp.toFixed(1) + ", this indicates you are underweight.");
  }
  if (finalBmiMet >= 18.5 && finalBmiMet <= 24.9) {
    alert("Your BMI is " + finalBmiImp.toFixed(1) + ", this indicates you are of normal weight.");
  }
  if (finalBmiMet >= 25) {
    alert("Your BMI is " + finalBmiImp.toFixed(1) + ", this indicates you are overweight.");
  }
};
