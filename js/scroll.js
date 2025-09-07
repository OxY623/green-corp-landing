function addSmoothScroll(link) {
  link.addEventListener("click", onLinkClick);
}
function onLinkClick(event) {
  event.preventDefault();
  const patch = event.target.getAttribute("href");
  const target = document.querySelector(`${patch}`);
  target.scrollIntoView({
    behavior: "smooth",
  });
}

const linkElements = document.querySelectorAll(`a[href^='#']`);
linkElements.forEach((el) => addSmoothScroll(el));
const btnFindOutMore = document.body.querySelector(".more-button");
addSmoothScroll(btnFindOutMore);
