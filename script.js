function showSection(sectionId) {
  const sections = document.querySelectorAll(".content-section");

  sections.forEach((section) => {
    if (section.style.display !== "none") {
      section.classList.add("page-exit");
      section.style.display = "none";
    }
  });

  const selectedSection = document.getElementById(sectionId);
  selectedSection.style.display = "flex";
  selectedSection.classList.remove("page-exit");
  selectedSection.classList.add("content-section");
}

const modeToggle = document.getElementById("mode-toggle");

modeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    modeToggle.textContent = "Light Mode";
  } else {
    modeToggle.textContent = "Dark Mode";
  }
});
