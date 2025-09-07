function updateScroll() {
  const header = document.body.querySelector(".header");
  if (Boolean(header)) {
    if (window.scrollY > 0) {
      header.classList.add("header__scrolled");
    } else {
      header.classList.remove("header__scrolled");
    }
  }
}

window.addEventListener("scroll", updateScroll);
