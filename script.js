const container = document.querySelector("main");
let active = null;

container.addEventListener("click", (event) => {
  const questionDiv = event.target.closest("#question-div");

  if (questionDiv) {
    if (active) {
      active.classList.remove("active");
    }

    if (questionDiv === active) {
      questionDiv.classList.remove("active");
      active = null;
    } else {
      questionDiv.classList.add("active");
      active = questionDiv;
    }
  }
});
