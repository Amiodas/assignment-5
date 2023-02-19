console.log("Pentagon");

const pentagonBody = document.getElementById("pentagon-body");
const pentagonBase = document.getElementById("pentagon-base");
const pentagonCalculate = document.getElementById("pentagon-area-calculation");

pentagonCalculate.addEventListener("click", function () {
  const areaOfPentagon =
    0.5 * parseFloat(pentagonBody.value) * parseFloat(pentagonBase.value);

  console.log(pentagonBody.value, pentagonBase.value, areaOfPentagon);
  pentagonBody.value = "";
  pentagonBase.value = "";
  showResult("Pentagon", areaOfPentagon);
});
