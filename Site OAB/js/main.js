function myFunction() {
  var x = document.getElementById("idtopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}