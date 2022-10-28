let a = 13000;    // 13000
document.getElementById("demo").innerHTML = a;
let x = 0.2 + 0.1;
let y = (0.2 * 10 + 0.1 * 10) / 10;
document.getElementById("demo1").innerHTML = "0.2 + 0.1 0 " + x + " ja (0.2 * 10 + 0.1 * 10) / 10 = " + y;
let luku = "10";
let luku1 = 20;
let summa = luku + luku1
document.getElementById("demo2").innerHTML = "luku + luku1 = " + summa + " luku-luku1 = " + (luku-luku1) + " luku*luku1 = " + (luku*luku1) + " luku/luku1 = " + (luku/luku1);
document.getElementById("demo3").innerHTML = 100 / "Omena";
document.getElementById("demo4").innerHTML = 100 / "10";
let luku2 = 9.565;
document.getElementById("demo5").innerHTML = luku2.toFixed(0) + " " + luku2.toFixed(2) + " " + luku2.toPrecision(2);