console.log("parallelogram");

const paralleogramBase = document.getElementById("parallelogram-base");
const paralleogramHeight = document.getElementById("parallelogram-height");
const parallelogramCalculate = document.getElementById(
  "parallelogram-area-calculation"
);

parallelogramCalculate.addEventListener("click", function () {
  const areaOfparallelogram =
    parseFloat(paralleogramBase.value) * parseFloat(paralleogramHeight.value);
  console.log(
    paralleogramBase.value,
    paralleogramHeight.value,
    areaOfparallelogram
  );
  paralleogramBase.value = "";
  paralleogramHeight.value = "";
  showResult("Parallelogram", areaOfparallelogram);
});
