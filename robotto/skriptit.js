function Suorita() {
  let komento = document.forms["lomake"]["teksti"].value;
  if (komento == "robotto.wave();"){
    document.getElementById("nayta").innerHTML = "<img class='robotti1' src='heiluu2.png' width=30%>" + "<img class='robotti1' src='robotti.png' width=30%>"
    w3.slideshow(".robotti1");
 } else if (komento == "robotto.jump();") {
  document.getElementById("nayta").innerHTML = "<img class='robotti1' src='hyppaa.png' width=30%>" + "<img class='robotti1' src='robotti.png' width=30%>"
  w3.slideshow(".robotti1");
 } else if (komento == "robotto.walk();") {
  document.getElementById("nayta").innerHTML = "<img class='robotti1' src='kavelee.png' width=30%>" + "<img class='robotti1' src='kavelee1.png' width=30%>" + "<img class='robotti1' src='hyppaa.png' width=30%>"
  w3.slideshow(".robotti1");
 } else {
   window.alert("Syntax error!!");
 }
}
function Tyhja() {
  document.forms["lomake"]["teksti"].value = "";
  document.getElementById("nayta").innerHTML = "<img class='robotti1' src='hyppaa.png' width=30%>";
}