console.log("rectangle");

const rectangleWidth = document.getElementById("rectangle-width");
const rectangleHeight = document.getElementById("rectangle-height");
const rectangleCalculate = document.getElementById(
  "rectangle-area-calculation"
);

rectangleCalculate.addEventListener("click", function () {
  const areaOfRectangle =
    parseFloat(rectangleWidth.value) * parseFloat(rectangleHeight.value);
  console.log(rectangleWidth.value, rectangleHeight.value, areaOfRectangle);

  rectangleWidth.value = "";
  rectangleHeight.value = "";
  showResult("Rectangle", areaOfRectangle);
});
