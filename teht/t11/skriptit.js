let ihmiset = ["Tapio", " Leela", " Matti", " Antti"];
let numerot = [1, 7, 45, 32, 27, 86];
document.getElementById("demo").innerHTML = ihmiset.toString();
document.getElementById("demo1").innerHTML = ihmiset[2];
document.getElementById("demo2").innerHTML = ihmiset.length; 
document.getElementById("demo3").innerHTML = ihmiset[3];
ihmiset.push("Pekka ");
document.getElementById("demo4").innerHTML = ihmiset;
document.getElementById("demo5").innerHTML = ihmiset.join(" ");
ihmiset.splice(2, 1, "Liisa", "Laila");
document.getElementById("demo6").innerHTML = ihmiset;
ihmiset.sort();
document.getElementById("demo7").innerHTML = ihmiset;
document.getElementById("demo8").innerHTML = numerot;
numerot.sort(function (a, b) { return a - b });
document.getElementById("demo9").innerHTML = numerot;
numerot.sort(function (a, b){return 0.5 - Math.random()});
document.getElementById("demo10").innerHTML = numerot;

document.getElementById("demo11").innerHTML = "pienin on " + pienin(numerot) + " Suurin on " + suurin(numerot);
function suurin(arr) {
    return Math.max.apply(null, arr);
  }
  function pienin(arr) {
    return Math.min.apply(null, arr);
  }