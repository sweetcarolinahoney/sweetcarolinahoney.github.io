function onToggle(event) {
  if (event.target.open) {
    document.querySelectorAll(".accordion-flush > details[open]").forEach((el) => {
      if (el === event.target) {
        return;
      }

      el.open = false;
    });
  }
}

document
  .querySelectorAll(".accordion-flush > details")
  .forEach((el) => el.addEventListener("toggle", onToggle));