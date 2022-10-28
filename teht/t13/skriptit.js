function buttoni() {
   let luku = document.getElementById("numero").value;
  

  if (luku < 0 || (luku > 40)) {
    alert("Luvun pitää olla väliltä 0-40");
  } else {
      if (luku >= 0 && luku <= 15) {
        document.getElementById("vastaus").innerHTML = "Arvosanaksi tuli T1";
      } else if (luku >= 16 && luku <= 30) {
        document.getElementById("vastaus").innerHTML = "Arvosanaksi tuli H3";
      } else {
        document.getElementById("vastaus").innerHTML = "Arvosanaksi tuli K5";
      }
  }
}

function buttoni2() {
    let maksu = document.getElementById("hinta").value;
   
 
   if (maksu > 100) {
    tulos = maksu/100 * 80 
    document.getElementById("vastaus2").innerHTML = "Alennettu hina on " +tulos ;
   } else {
       if (maksu >= 50 && maksu <= 100) {
           tulos = maksu/100 * 90
         document.getElementById("vastaus2").innerHTML = "Alennettu hina on " +tulos;
       } else {
         document.getElementById("vastaus2").innerHTML = "Et saa alennusta ";
       }
   }
 }