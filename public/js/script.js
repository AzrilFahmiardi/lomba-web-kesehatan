document.addEventListener("DOMContentLoaded", function () {
  const checkboxes = document.querySelectorAll(".form-check-input");
  const progressCircle = document.getElementById("progressCircle");
  const percentageText = document.getElementById("percentageText");

  function updateProgress() {
    const total = checkboxes.length;
    const completed = Array.from(checkboxes).filter((chk) => chk.checked).length;
    const percentage = Math.round((completed / total) * 100);

    const circleLength = 377;
    const offset = circleLength - (circleLength * percentage) / 100;
    progressCircle.style.strokeDashoffset = offset;

    percentageText.textContent = `${percentage}%`;
  }

  checkboxes.forEach((chk) => {
    chk.addEventListener("change", updateProgress);
  });

  updateProgress();
});
