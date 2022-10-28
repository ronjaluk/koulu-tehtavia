'use strict';
(function () {
    let piirtoalusta;
    let konteksti;
    let plkm = 0;
    let pinta = 0;
    let pinta2 = 0;
    let pinta3 = 0;
    let luku1;
    let luku2;
    let luku3;
    let sluku1;
    let sluku2;
    let sluku3;
    let luku4;
    let ajastin;
    let nappi;
    let summa;

    document.addEventListener('DOMContentLoaded', alusta);

    function alusta() {
        piirtoalusta = document.getElementById('piirtoalusta');
        konteksti = piirtoalusta.getContext('2d');
        nappi = document.getElementById('nappi');
        nappi.addEventListener('click', alusta1);


    function alusta1() {
        sluku1 = Number(document.forms["luvut"]["luku1"].value);
        sluku2 = Number(document.forms["luvut"]["luku2"].value);
        sluku3 = Number(document.forms["luvut"]["luku3"].value);

        luku1 = 100 - sluku1;
        luku2 = 100 - sluku2;
        luku3 = 100 - sluku3;
        summa = sluku1 + sluku2 + sluku3;
        console.log("sluku1 on: ",sluku1)
        console.log("sluku2 on: ", sluku2)
        console.log("sluku3 on: ", sluku3)
        console.log("summa on: ", summa)

        if ((summa != 100)) {
            document.getElementById("virhe").innerHTML = "ei ole 100 !";
        }
        if ((luku1 >= luku2) && (luku1 >= luku3)) {
            luku4 = luku1;
        }
        if ((luku2 >= luku1) && (luku2 >= luku3)) {
            luku4 = luku2;
        }
        if ((luku3 >= luku1) && (luku3 >= luku2)) {
            luku4 = luku3;
        }

        ajastin = setInterval(function () {
            plkm++;
            if (pinta <= luku1) {
                pinta++;
            }
            if (pinta2 <= luku2) {
                pinta2++;
            } if (pinta3 <= luku3) {
                pinta3++;
            }
            piirra();
        }, 100);
    }

    function piirra() {
        if(plkm > luku4){
            clearInterval(ajastin);
            return;
        }
    

    konteksti.clearRect(0, 0, piirtoalusta.width, piirtoalusta.height);
    // konsteksti.stroke();
    // konsteksti.moveTo(140, 110);
    // konsteksti.lineTo(140, 140, 5);
    // konteksti.stroke();
    palkki(50, 50, 50, 100, pinta);
    palkki2(125, 50, 50, 100, pinta2);
    palkki3(200, 50, 50, 100, pinta3);
    konteksti.fillText('100%', 10, 50);
    draw(40, 150, 225, 2, 'black');
    draw(40, 150, 1, -100, 'black');
}
    }

function palkki(x, y, leveys, korkeus, pinta) {
    konteksti.save();
    konteksti.translate(x, y);
    konteksti.beginPath();
    konteksti.rect(0, 0, leveys, korkeus);
    konteksti.clip();
    konteksti.stroke();
    konteksti.fillStyle = 'green';
    konteksti.fillRect(0, pinta, leveys, korkeus);
    konteksti.restore();
}
function palkki2(x, y, leveys, korkeus, pinta2) {
    konteksti.save();
    konteksti.translate(x, y);
    konteksti.beginPath();
    konteksti.rect(0, 0, leveys, korkeus);
    konteksti.clip();
    konteksti.stroke();
    konteksti.fillStyle = 'blue';
    konteksti.fillRect(0, pinta2, leveys, korkeus);
    konteksti.restore();
}
function palkki3(x, y, leveys, korkeus, pinta3) {
    konteksti.save();
    konteksti.translate(x, y);
    konteksti.beginPath();
    konteksti.rect(0, 0, leveys, korkeus);
    konteksti.clip();
    konteksti.stroke();
    konteksti.fillStyle = 'pink';
    konteksti.fillRect(0, pinta3, leveys, korkeus);
    konteksti.restore();
}
function draw(x, y, leveys, korkeus, vari) {
    konteksti.fillStyle = vari;
    konteksti.fillRect(x, y, leveys, korkeus);

}
})();