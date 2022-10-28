'use strict';

(function () {
    let nappi;
    let nappi1;
    let uusi;
    let lkm;
    let pakka = Pakka.luoPakka();
    pakka.sekoita();
    let jkasi = 0;
    let summa = 0;
    let jsumma = 0;

    let kasi = new Kasi();
    document.addEventListener('DOMContentLoaded', alusta);

    nappi = document.getElementById("nappi");
    nappi1 = document.getElementById("nappi1");
    uusi = document.getElementById("nappi2");
    nappi.addEventListener("click", nostaKortti);
    nappi1.addEventListener("click", jakajanKortti);
    uusi.addEventListener("click", uusiPeli);

    function alusta() {

        console.log(pakka);
        kasi.lisaaKortti(pakka.otaKortti());
        kasi.lisaaKortti(pakka.otaKortti());
        console.log(`Käsi: ${kasi} summa2=${kasi.summa}`);

        summa = kasi.summa;
        let uusiKortti = kasi.otaKortti();
        console.log(uusiKortti);
        let uusiKortti1 = kasi.otaKortti();
        console.log(uusiKortti1);
        console.log(`Käsi: ${kasi} summa=${kasi.summa}`);
        document.getElementById("uusiKortti").textContent = uusiKortti;
        if (uusiKortti.maa.vari === "punainen") {
            document.getElementById("uusiKortti").classList.add("punainen");
        }
        document.getElementById("uusiKortti1").textContent = uusiKortti1;
        if (uusiKortti1.maa.vari === "punainen") {
            document.getElementById("uusiKortti1").classList.add("punainen");
        }
        document.getElementById("summa2").textContent = summa;


        if (summa == 21) {
            document.getElementById("voitto").innerHTML = "Voitit !";
        } else if (summa > 21) {
            document.getElementById("voitto").innerHTML = "Hävisit !";
        }
        lkm = 2;
    }

    function nostaKortti() {

        if (lkm == 2) {
            kasi.lisaaKortti(pakka.otaKortti());
            summa = summa + kasi.summa;
            let uusiKortti2 = kasi.otaKortti();
            document.getElementById("summa2").textContent = summa;
            document.getElementById("kortti8").textContent = uusiKortti2;
            if (uusiKortti2.maa.vari === "punainen") {
                document.getElementById("kortti8").classList.add("punainen");
            }
            if (summa == 21) {
                document.getElementById("voitto").innerHTML = "Voitit !";
            } else if (summa > 21) {
                document.getElementById("voitto").innerHTML = "Hävisit !";
            }
        }
        if (lkm == 3) {
            kasi.lisaaKortti(pakka.otaKortti());
            summa = summa + kasi.summa;
            let uusiKortti3 = kasi.otaKortti();
            document.getElementById("summa2").textContent = summa;
            document.getElementById("kortti9").innerHTML = uusiKortti3;
            if (uusiKortti3.maa.vari === "punainen") {
                document.getElementById("kortti9").classList.add("punainen");
            }
            if (summa == 21) {
                document.getElementById("voitto").innerHTML = "Voitit !";
            } else if (summa > 21) {
                document.getElementById("voitto").innerHTML = "Hävisit !";
            }
        }
        if (lkm == 4) {
            kasi.lisaaKortti(pakka.otaKortti());
            summa = summa + kasi.summa;
            let uusiKortti4 = kasi.otaKortti();
            document.getElementById("summa2").textContent = summa;
            document.getElementById("kortti10").innerHTML = uusiKortti4;
            if (uusiKortti4.maa.vari === "punainen") {
                document.getElementById("kortti10").classList.add("punainen");
            }
            if (summa == 21) {
                document.getElementById("voitto").innerHTML = "Voitit !";
            } else if (summa > 21) {
                document.getElementById("voitto").innerHTML = "Hävisit !";
            } else if (summa < 21) {
                document.getElementById("voitto").innerHTML = "Voitit viiden kortin ventin !";
            }
        }
        lkm += 1;
    }
    function jakajanKortti() {
        let jlkm = 1;
        jsumma = 0;
        document.getElementById("summa").textContent = jsumma;
        console.log(`Käsi: ${kasi} jsumma=${kasi.summa}`);

        kasi.lisaaKortti(pakka.otaKortti());
        jsumma = jsumma + kasi.summa;
        let uusiKortti5 = kasi.otaKortti();
        document.getElementById("kortti1").innerHTML = uusiKortti5;
        document.getElementById("summa").textContent = jsumma;
        if (uusiKortti5.maa.vari === "punainen") {
            document.getElementById("kortti1").classList.add("punainen");
        }
        if (jsumma == 21 || (jsumma >summa && jsumma < 21)) {
            document.getElementById("havio").innerHTML = "Jakaja voitti !";
            return;
        } else if (jsumma > 21) {
            document.getElementById("havio").innerHTML = "Jakaja hävisi !";
            return;
        }
        
        jlkm += 1;

        kasi.lisaaKortti(pakka.otaKortti());
        jsumma = jsumma + kasi.summa;
        let uusiKortti6 = kasi.otaKortti();
        document.getElementById("kortti2").innerHTML = uusiKortti6;
        document.getElementById("summa").textContent = jsumma;
        if (uusiKortti6.maa.vari === "punainen") {
            document.getElementById("kortti2").classList.add("punainen");
        }
        if (jsumma == 21 || (jsumma >summa && jsumma < 21)) {
            document.getElementById("havio").innerHTML = "Jakaja voitti !";
            return
        } else if (jsumma > 21) {
            document.getElementById("havio").innerHTML = "Jakaja hävisi !";
            return
        }
        jlkm += 1;


        kasi.lisaaKortti(pakka.otaKortti());
        jsumma = jsumma + kasi.summa;
        let uusiKortti7 = kasi.otaKortti();
        document.getElementById("kortti3").innerHTML = uusiKortti7;
        document.getElementById("summa").textContent = jsumma;
        if (uusiKortti7.maa.vari === "punainen") {
            document.getElementById("kortti3").classList.add("punainen");
        }
        if (jsumma == 21 || (jsumma >summa && jsumma < 21)) {
            document.getElementById("havio").innerHTML = "Jakaja voitti !";
            return
        } else if (jsumma > 21) {
            document.getElementById("havio").innerHTML = "Jakaja hävisi !";
            return
        }
        jlkm +=1;

        kasi.lisaaKortti(pakka.otaKortti());
        jsumma = jsumma + kasi.summa;
        let uusiKortti8 = kasi.otaKortti();
        document.getElementById("kortti4").innerHTML = uusiKortti8;
        document.getElementById("summa").textContent = jsumma;
        if (uusiKortti8.maa.vari === "punainen") {
            document.getElementById("kortti4").classList.add("punainen");
        }
        if (jsumma == 21 || (jsumma >summa && jsumma < 21)) {
            document.getElementById("havio").innerHTML = "Jakaja voitti !";
            return
        } else if (jsumma > 21) {
            document.getElementById("havio").innerHTML = "Jakaja hävisi !";
            return
        }
        jlkm +=1;

        kasi.lisaaKortti(pakka.otaKortti());
        jsumma = jsumma + kasi.summa;
        let uusiKortti9 = kasi.otaKortti();
        document.getElementById("kortti5").innerHTML = uusiKortti9;
        document.getElementById("summa").textContent = jsumma;
        if (uusiKortti9.maa.vari === "punainen") {
            document.getElementById("kortti5").classList.add("punainen");
        }
        if (jsumma == 21 || (jsumma >summa && jsumma < 21) || (jsumma < 21 || jlkm == 5)) {
            document.getElementById("havio").innerHTML = "Jakaja voitti !";
            return
        } else if (jsumma > 21) {
            document.getElementById("havio").innerHTML = "Jakaja hävisi !";
            return
        }
    }
    function uusiPeli() {
        location.reload();
    }
})();