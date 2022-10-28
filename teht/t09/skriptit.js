var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ";
var sln = txt.length;
let teksti = "Ohjelmistokehittäjä osaa ohjelmoida, hyödyntää rajapintoja, käsitellä tietoa sekä käyttää versionhallintaa. Ohjelmistokehitystiimin jäsenenä toimiessaan hän kommunikoi asiakkaan kanssa, suunnittelee ohjelmiston toteutuksen ja varmistaa toteutettavien toimintojen laadun.";
let pos = teksti.indexOf("ohjelmoida");
let pituus = teksti.length;
let res = teksti.slice(pos, pituus);
var sln = txt.length;
document.getElementById("demo1").innerHTML = sln;
document.getElementById("demo").innerHTML = teksti;
document.getElementById("demo2").innerHTML = res;
let tulos2 = teksti.slice(0, 107);
document.getElementById("demo3").innerHTML = tulos2;

