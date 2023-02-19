console.log("triangle");

const triangleBase = document.getElementById("triangle-base");
const triangleHeight = document.getElementById("triangle-height");
const triangleCalculate = document.getElementById("triangle-area-calculation");

triangleCalculate.addEventListener("click", function () {
  const areaOfTriangle =
    0.5 * parseFloat(triangleBase.value) * parseFloat(triangleHeight.value);
    
  console.log(triangleBase.value, triangleHeight.value, areaOfTriangle);
  triangleBase.value = "";
  triangleHeight.value = "";
  showResult("Triangle", areaOfTriangle);
});
