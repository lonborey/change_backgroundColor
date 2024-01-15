const getColor = document.getElementById("color-input");
const getBtn = document.getElementById("btn-color");
const textTitle = document.getElementById("text-title");

getBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = getColor.value;

  if (getColor.value === "white" || getColor.value === "#fff") {
    textTitle.style.color = "#333";
  } else {
    textTitle.style.color = "white";
    getBtn.style.backgroundColor = "white";
    getBtn.style.color = getColor.value;
  }
});
