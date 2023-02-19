console.log("Rhombus");

const rhombusDiagonal1 = document.getElementById("rhombus-diagonal-1");
const rhombusDiagonal2 = document.getElementById("rhombus-diagonal-2");
const rhombusCalculate = document.getElementById("rhombus-area-calculation");

rhombusCalculate.addEventListener("click", function () {
  const areaOfRhombus =
    0.5 *
    parseFloat(rhombusDiagonal1.value) *
    parseFloat(rhombusDiagonal2.value);

  console.log(rhombusDiagonal1.value, rhombusDiagonal2.value, areaOfRhombus);
  rhombusDiagonal1.value = "";
  rhombusDiagonal2.value = "";
  showResult("Rhombus", areaOfRhombus);
});
