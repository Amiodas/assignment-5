console.log("Utilities");

const array = [];
let count = 1;

function countIncrement() {
  count++;
}

// Result of Area
function showResult(areaType, area) {
  let showResults = document.getElementById("show-result");
  let showResultItem = document.createElement("div");
  showResultItem.style.marginBottom = "10px";

  showResultItem.textContent =
    (count++) + "." + " " + areaType + " " + area + "cm2";
  showResults.appendChild(showResultItem);
}

