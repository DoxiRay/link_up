function toggleTable(tableId) {
    var tableau = document.getElementById(tableId);
   if( tableau.style.display === "table"){
      tableau.style.display = "none";
   } else {
      tableau.style.display ="table";
   }
  }

  var iconeElements = document.getElementsByClassName("material-icons");

function toggleIcone(e) {
  e.preventDefault();

  var icone = this;
  var isIconeMonte = icone.textContent === "keyboard_double_arrow_up";

  icone.textContent = isIconeMonte ? "keyboard_double_arrow_down" : "keyboard_double_arrow_up";
}

for (var i = 0; i < iconeElements.length; i++) {
  iconeElements[i].addEventListener("click", toggleIcone);
}

  

  
  

