function Lisaa() {
    let kappale = document.createElement("p");
    let teksti = document.createTextNode("Moi, maailma!");
    kappale.appendChild(teksti);
    document.body.appendChild(kappale);
}

function Muuta() {
    document.getElementById("p1").innerHTML = "Moikka.";
}

function Poista() {
    let vanhempi = document.getElementById("div1");
    let lapsi = document.getElementById("p1");
    vanhempi.removeChild(lapsi); 
}