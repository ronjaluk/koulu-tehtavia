let i;
let z;
let x;
let kortit = [];
let maa = "";
for (z = 0; z < 4; z++) {
    if (z == 0) {
        maa = "hertta";
    } else if (z == 1) {
        maa = "risti";
    } else if (z == 2) {
        maa = "ruutu";
    } else if (z == 3) {
        maa = "pata";
    }


    for (i = 1; i <= 13; i++) {
        kortit.push([maa, i]);
    }
}
document.getElementById("paikka").innerHTML = kortit; //pakan tulostus
kortit.sort(function (a, b) { return 0.5 - Math.random() });
document.getElementById("demo").innerHTML = kortit;
let arvo = kortit[0][1]; //ensimmÃ¤isen kortin arvo
let maakoodi = kortit[0][0]; //ensimmÃ¤isen kortin maa
let symboli = "";
if (maakoodi == "ruutu") {
    symboli = "&diams;";
}
if (maakoodi == "hertta") {
    symboli = "&hearts;";
}
if (maakoodi == "risti") {
    symboli = " &clubs;";
}
if (maakoodi == "pata") {
    symboli = "&spades;";
}
if (maakoodi == "ruutu" || maakoodi == "hertta") {
    document.getElementById("kortti1").innerHTML = '<div  class="">' + arvo + '</div>' + '<div class="maa1">'  + symboli + '</div>' + ' <div class="toka-arvo" > ' + arvo + '</div>';
} else {
    document.getElementById("kortti1").innerHTML = '<div  class="">' + arvo + '</div>' + '<div class="maa2">'  + symboli + '</div>' + ' <div  class="toka-arvo" > ' + arvo + '</div >';
}
