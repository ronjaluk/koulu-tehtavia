function buttoni() {
  let luku = document.getElementById("numero").value;

  let text = "";
  for (i = 0; i <= luku; i = i + 2) {
    text += i + "<br>";
  }
  document.getElementById("vastaus").innerHTML = text;
}


function painike() {

let summa = 0;
let ka = 0;
let i = 0;
luku1 = 0;
luku1 = prompt("Anna numero");
luku = Number(luku1);
while (luku != -1) {
  summa += luku;
 
  luku1 = prompt("Anna numero");
  luku = Number(luku1);
  i++;
}
if (i != 0) {
  ka = summa / i;
}

document.getElementById("lasku").innerHTML = "Lukujen summa on " + summa + " ja keskiarvo on " + ka;
}