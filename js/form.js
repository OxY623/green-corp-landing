function handleSelectChange(event) {
  const form = document.querySelector("#form");
  if (event.target.value === "other") {
    const formContainer = document.createElement("div");
    formContainer.classList.add("form__group", "form__other-input");
    const input = document.createElement("input");
    input.type = "text";
    input.setAttribute("placeholder", "Введите ваш вариант");
    formContainer.appendChild(input);
    const button = document.querySelector(".form__submit");
    form.insertBefore(formContainer, button);
  }

  const otherInput = form.querySelector(".form__other-input");

  if (event.target.value !== "other" && Boolean(otherInput)) {
    if (otherInput) {
      otherInput.remove();
    }
  }
}

const select = document.querySelector("#budget");
select.addEventListener("change", handleSelectChange);
