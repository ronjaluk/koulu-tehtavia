'use strict';
(function () {
    ;
    document.addEventListener('DOMContentLoaded', alusta);
    function alusta() {
        let form = document.getElementById("luvut")

        let nimilabel = document.createElement("label");
        nimilabel.setAttribute("for", "nimi");
        nimilabel.innerHTML = "Nimi: ";
        document.getElementById("luvut").appendChild(nimilabel)
        let nimikentta = document.createElement("input");
        nimikentta.setAttribute("type", "text");
        nimikentta.setAttribute("name", "nimikentta");
        nimikentta.setAttribute("onblur", "tili()");
        document.getElementById("luvut").appendChild(nimikentta)

        let brk = document.createElement("br");
        form.appendChild(brk);
    }
})();

function tili() {

    let form = document.getElementById("luvut")

    let tililabel = document.createElement("label");
    tililabel.setAttribute("for", "tili");
    tililabel.innerHTML = "Tilinumero  (tasan 13 merkkiä)"
    document.getElementById("luvut").appendChild(tililabel);
    let tilikentta = document.createElement("input");
    tilikentta.setAttribute("type", "text");
    tilikentta.setAttribute("name", "tilikentta");
    tilikentta.setAttribute("onblur", "tarkista(tilikentta.value)");
    document.getElementById("luvut").appendChild(tilikentta)

    let brk = document.createElement("br");
    form.appendChild(brk)

}
function tarkista(a) {
    let pit = "";
    pit = a;
    if (pit.length == 13) {
        maksu();
    }
}

function maksu() {
    console.log("Teksti");
    let form = document.getElementById("luvut")

    let maksulabel = document.createElement("label");
    maksulabel.setAttribute("for", "maksu");
    maksulabel.innerHTML = "Maksu määrä: "
    document.getElementById("luvut").appendChild(maksulabel);
    let maksukentta = document.createElement("input");
    maksukentta.setAttribute("type", "range");
    maksukentta.setAttribute("min","1");
    maksukentta.setAttribute("max","100");
    maksukentta.setAttribute("value","50");
    maksukentta.setAttribute("name", "maksukentta");
    maksukentta.setAttribute("id", "maksukentta");
    document.getElementById("luvut").appendChild(maksukentta)
   
    let slider = document.getElementById("maksukentta")
   
    

    let tulos = document.createElement("p")
    form.appendChild(tulos);
    tulos.innerHTML = "Maksu määrä on " + slider.value;
    slider.oninput = function () {
        tulos.innerHTML = "Maksu määrä on " + this.value;
}


    let brk = document.createElement("br");
    form.appendChild(brk)

    let nappilabel = document.createElement("label");
    nappilabel.setAttribute("for", "maksu");
    document.getElementById("luvut").appendChild(nappilabel);
    let nappikentta = document.createElement("input");
    nappikentta.setAttribute("type", "submit");
    nappikentta.setAttribute("name", "nappikentta");
    nappikentta.setAttribute("value", "lähetä");
    nappikentta.setAttribute("onclick", "nappi()");
    document.getElementById("luvut").appendChild(nappikentta)


}