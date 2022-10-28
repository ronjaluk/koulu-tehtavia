let korttipakka = [
    [1, "&diams;"],
    [2, "&diams;"],
    [3, "&diams;"],
    [4, "&diams;"],
    [5, "&diams;"],
    [6, "&diams;"],
    [7, "&diams;"],
    [8, "&diams;"],
    [9, "&diams;"],
    [10, "&diams;"],
    [11, "&diams;"],
    [12, "&diams;"],
    [13, "&diams;"],
    [1, "&hearts;"],
    [2, "&hearts;"],
    [3, "&hearts;"],
    [4, "&hearts;"],
    [5, "&hearts;"],
    [6, "&hearts;"],
    [7, "&hearts;"],
    [8, "&hearts;"],
    [9, "&hearts;"],
    [10, "&hearts;"],
    [11, "&hearts;"],
    [12, "&hearts;"],
    [13, "&hearts;"],
    [1, "&clubs;"],
    [2, "&clubs;"],
    [3, "&clubs;"],
    [4, "&clubs;"],
    [5, "&clubs;"],
    [6, "&clubs;"],
    [7, "&clubs;"],
    [8, "&clubs;"],
    [9, "&clubs;"],
    [10, "&clubs;"],
    [11, "&clubs;"],
    [12, "&clubs;"],
    [13, "&clubs;"],
    [1, "&spades;"],
    [2, "&spades;"],
    [3, "&spades;"],
    [4, "&spades;"],
    [5, "&spades;"],
    [6, "&spades;"],
    [7, "&spades;"],
    [8, "&spades;"],
    [9, "&spades;"],
    [10, "&spades;"],
    [11, "&spades;"],
    [12, "&spades;"],
    [13, "&spades;"],
];
// sekoitetaan pakka?
korttipakka.sort(function (a, b) { return 0.5 - Math.random() });

function createCard(card) {
    var arvo = card[0];
    var symboli = card[1];
    if (symboli == "&diams;" || symboli == "&hearts;") {
        var kortinsisalto = '<div  class="">' + arvo + '</div>' + '<div class="punanen">' + symboli + '</div>' + ' <div class="toka-arvo" > ' + arvo + '</div>';
    } else {
        var kortinsisalto = '<div  class="">' + arvo + '</div>' + '<div class="musta">' + symboli + '</div>' + ' <div class="toka-arvo" > ' + arvo + '</div>';
    }
    return kortinsisalto;
}

let summa = 0;
let kortti = 0;

let text = "";
var card = korttipakka[kortti];
console.log(card)
summa += card[0];
text = '<div class="row">' + '<div class="kortti">' + createCard(card) + '</div>'
'</div>';
document.getElementById("kortti6").innerHTML = text;
kortti++
card = korttipakka[kortti];
summa += card[0];
text = '<div class="row">' + '<div class="kortti">' + createCard(card) + '</div>'
document.getElementById("kortti7").innerHTML = text;

kortti++
if (summa === 21) {
    alert("Voitit")
}
if (summa > 21) {
    alert("hävisit")
}

function Lisaa() {
    card = korttipakka[kortti];
    summa += card[0];
    kortti++
    if (kortti === 3) {
        text = '<div class="row">' + '<div class="kortti">' + createCard(card) + '</div>'
        document.getElementById("kortti8").innerHTML = text;
    }
    if (kortti === 4) {
        text = '<div class="row">' + '<div class="kortti">' + createCard(card) + '</div>'
        document.getElementById("kortti9").innerHTML = text;
    }
    if (kortti === 5) {
        text = '<div class="row">' + '<div class="kortti">' + createCard(card) + '</div>'
        document.getElementById("kortti10").innerHTML = text;
    }
    if (summa === 21) {
        alert("Voitit")
    }
    if (summa > 21) {
        alert("hävisit")
    }
}

function Lopeta() {
    let summa1 = 0;

    let text = "";
    var card = korttipakka[kortti];
    console.log(card)
    summa1 += card[0];
    text = '<div class="row">' + '<div class="kortti">' + createCard(card) + '</div>'
    '</div>';
    document.getElementById("kortti1").innerHTML = text;
    kortti++
    card = korttipakka[kortti];
    summa1 += card[0];
    text = '<div class="row">' + '<div class="kortti">' + createCard(card) + '</div>'
    document.getElementById("kortti2").innerHTML = text;

    kortti++
    if (summa1 > 21) {
        alert("Jakaja hävisi")
        return
    } else if (summa1 === 21 || summa1 > summa) {
        alert("Jakava voitti")
        return
    }
    card = korttipakka[kortti];
    summa1 += card[0];
    text = '<div class="row">' + '<div class="kortti">' + createCard(card) + '</div>'
    document.getElementById("kortti3").innerHTML = text;

    kortti++
    if (summa1 > 21) {
        alert("Jakaja hävisi")
        return
    } else if (summa1 === 21 || summa1 > summa) {
        alert("Jakava voitti")
        return
    }
    card = korttipakka[kortti];
    summa1 += card[0];
    text = '<div class="row">' + '<div class="kortti">' + createCard(card) + '</div>'
    document.getElementById("kortti4").innerHTML = text;
    kortti++
    if (summa1 > 21) {
        alert("Jakaja hävisi")
        return
    } else if (summa1 === 21 || summa1 > summa) {
        alert("Jakava voitti")
        return
    }
    card = korttipakka[kortti];
    summa1 += card[0];
    text = '<div class="row">' + '<div class="kortti">' + createCard(card) + '</div>'
    document.getElementById("kortti5").innerHTML = text;
    kortti++
    if (summa1 > 21) {
        alert("Jakaja hävisi")
        return
    } else {
        alert("Jakava voitti")
        return
    }
}
