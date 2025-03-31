document.addEventListener("DOMContentLoaded", () => {
  console.log("Секция загружена и готова к работе!");

  const items = document.querySelectorAll(".information__item");

  items.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      item.style.backgroundColor = "#333";
      item.style.transition = "0.3s";
    });

    item.addEventListener("mouseleave", () => {
      item.style.backgroundColor = "transparent";
      item.style.transition = "0.3s";
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".phone-flag").forEach((section) => {
    const flag = section.querySelector(".flag");
    const select = section.querySelector(".country-flag");
    const phoneInput = section.querySelector(".phone");

    select.addEventListener("change", function () {
      const selectedOption = select.options[select.selectedIndex];
      const selectedCode = selectedOption.value;
      const selectedFlag = selectedOption.getAttribute("data-flag");

      flag.src = selectedFlag;
      phoneInput.value = selectedCode + "";
    });

    phoneInput.addEventListener("input", function (event) {
      let inputValue = phoneInput.value;

      if (inputValue === "+") {
        phoneInput.value = "";
        return;
      }

      inputValue = inputValue.replace(/(?!^)\+/g, "");
      inputValue = inputValue.replace(/[^\d+]/g, "");

      if (
        !inputValue.startsWith("+") &&
        event.inputType !== "deleteContentBackward"
      ) {
        inputValue = "+" + inputValue;
      }

      if (inputValue.length >= 13) {
        inputValue = inputValue.slice(0, 13);
      }

      const options = select.options;
      const numericValue = inputValue.replace(/\D/g, "");

      for (let i = 0; i < options.length; i++) {
        const countryCode = options[i].value.replace("+", "");
        if (numericValue.startsWith(countryCode)) {
          flag.src = options[i].getAttribute("data-flag");
          select.value = options[i].value;
        }
      }

      let formattedValue = inputValue.charAt(0);
      if (numericValue.length > 0)
        formattedValue += "" + numericValue.slice(0, 3);
      if (numericValue.length >= 4)
        formattedValue += " " + numericValue.slice(3, 5);
      if (numericValue.length >= 6)
        formattedValue += "-" + numericValue.slice(5, 7);
      if (numericValue.length >= 8)
        formattedValue += "-" + numericValue.slice(7, 9);
      if (numericValue.length >= 10)
        formattedValue += "-" + numericValue.slice(9, 12);

      phoneInput.value = formattedValue;
    });
  });
});
