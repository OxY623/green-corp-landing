const INCREASE_NUMBER_ANIMATION_SPEED = 40;
let animation = false;

const element = document.querySelector(".features__clients-count");

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

function updateScroll() {
  if (!element) return;
  const countElementPosition = element.offsetTop;
  const windowBottomPosition = window.scrollY + window.innerHeight;

  if (windowBottomPosition >= countElementPosition && !animation) {
    initIncreaseNumberAnimation(element);
    animation = true;
  }
}

window.addEventListener("scroll", updateScroll);
