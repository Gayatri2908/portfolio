document.addEventListener("DOMContentLoaded", () => {
  const filterTexts = document.querySelectorAll(".filter-text");
  const workItems = document.querySelectorAll(".work");

  filterTexts.forEach(text => {
    text.addEventListener("click", () => {
      // Remove active class from the currently active filter
      const active = document.querySelector(".filter-text.active");
      if (active) active.classList.remove("active");

      // Add active class to clicked filter text
      text.classList.add("active");

      const category = text.getAttribute("data-filter");

      workItems.forEach(item => {
        const itemCategory = item.getAttribute("data-category");

        if (category === "All" || itemCategory === category) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
});


