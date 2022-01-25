const variable = document.querySelectorAll(".code");

variable[0].focus();

variable.forEach((code, idx) => {
  code.addEventListener("keydown", (e) => {
    console.log(e.key);
    const keyPressed = e.key;

    if (keyPressed >= 0 && keyPressed <= 9) {
      variable[idx].value = "";
      if (idx < variable.length - 1) {
        setTimeout(() => variable[idx + 1].focus(), 10);
      }
    } else if (keyPressed === "Backspace") {
      if (idx > 0) {
        setTimeout(() => variable[idx - 1].focus(), 10);
      }
    }
  });
});
