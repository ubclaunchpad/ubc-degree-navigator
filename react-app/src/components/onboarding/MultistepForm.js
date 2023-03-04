const steps = document.querySelectorAll('.step');
let currentStep = 0;

function showStep(n) {
  steps[currentStep].style.display = 'none';
  steps[n].style.display = 'block';
  currentStep = n;
}

function nextStep() {
  if (currentStep < steps.length - 1) {
    showStep(currentStep + 1);
  }
}

function prevStep() {
  if (currentStep > 0) {
    showStep(currentStep - 1);
  }
}

showStep(currentStep);
