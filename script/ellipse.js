console.log("Ellipse");

const ellipseArea = document.getElementById("ellipse-area");
const ellipseBase = document.getElementById("ellipse-base");
const ellipseCalculate = document.getElementById("ellipse-area-calculation");



ellipseCalculate.addEventListener("click", function () {
  const areaOfEllipse =
    parseFloat(ellipseArea.value) * parseFloat(ellipseBase.value);
  console.log(ellipseArea.value, ellipseBase.value, areaOfEllipse);
  ellipseArea.value = "";
  ellipseBase.value = "";
  showResult("Ellipse", areaOfEllipse);
});
