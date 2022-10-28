function Laske() {
    let luku1 = Number(document.forms["luvut"]["luku1"].value);
    let luku2 = Number(document.forms["luvut"]["luku2"].value);

    if (luku1 <= 10 && (luku2 <= 10) && (luku1 >= 1) && (luku1 >= 1) ) {

    let summa = luku1 + luku2
    document.getElementById("demo").innerHTML = "Summa on " + summa;
    let erotus = luku1 - luku2
    document.getElementById("demo1").innerHTML = "Erotus on " + erotus;
    let tulos = luku1 * luku2
    document.getElementById("demo2").innerHTML = "Tulos on " + tulos;
    let jakolasku = luku1 / luku2
    document.getElementById("demo3").innerHTML = "Jakolasku on " + jakolasku;
    let teksti = "";
    if (luku1 < luku2) {
        for (i = luku1; i <= luku2; i++) {
            teksti += i + ", ";
        }
    } else if (luku1 >= luku2) {
        for (i = luku2; i <= luku1; i++) {
            teksti += i + ", ";
        }
    }
    document.getElementById("demo4").innerHTML = teksti;
} else {
    alert("Luvun pitää olla väliltä 1-10");
}
}