const INCREASE_NUMBER_ANIMATION_SPEED = 40;

let element = document.querySelector(".features__clients-count");

function increaseNumberAnimationStep(i, element, endNumber) {
  if (i <= endNumber) {
    if (i === 4920) {
      element.textContent = i + 80 + "+";
    } else {
      element.textContent = i;
    }
    i += 123;
    setTimeout(function () {
      increaseNumberAnimationStep(i, element, endNumber);
    }, INCREASE_NUMBER_ANIMATION_SPEED);
  }
}

function initIncreaseNumberAnimation(element) {
  increaseNumberAnimationStep(0, element, 5000);
}
initIncreaseNumberAnimation(element);
