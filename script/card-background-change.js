const toggleBgColor = document.querySelector(".toggle-bg-color");

function randomcolor() {
    return Math.floor(Math.random() * 255);
}

toggleBgColor.addEventListener("mouseover", function () {
    console.log(toggleBgColor)  
    toggleBgColor.style.backgroundColor = 'rgb(' + randomcolor() + ',' + randomcolor() + ',' + randomcolor() + ')';
    console.log("card enter");
  });

// Change color function
function changeBackgrounColor(cardIndex) {
  
}


toggleBgColor.addEventListener("mouseleave", function () {
  toggleBgColor.style.backgroundColor = "";
  console.log("card leave");
});
