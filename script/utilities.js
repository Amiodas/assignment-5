console.log("Utilities");

function showResult(areaType, area) {
  let showResults = document.getElementById("show-result");
  let showResultItem = document.createElement("div");

  showResultItem.textContent = showResultItem.length + " " + areaType + " " + area + "cm2";
  showResults.appendChild(showResultItem);
}
