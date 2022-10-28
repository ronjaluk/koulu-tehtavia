'use strict';
(function () {
    let piirtoalusta;
    let konteksti;
    document.addEventListener('DOMContentLoaded', alusta);
    function alusta() {
        piirtoalusta = document.getElementById('piirtoalusta');
        konteksti = piirtoalusta.getContext('2d');
        //x y leveys korkeus vari
        piirra(120, 5, 90, 20, 'purple');
        piirra(60, 300, 200, 30, 'red');
        piirra(130, 200, 50, 50, 'orange');
        piirra(50, 100, 60, 60, 'blue');
        piirra(200, 100, 60, 60, 'blue');
        konteksti.font = '40pt Serif';
        konteksti.fillStyle = 'yellow';
        konteksti.fillText('Naama', 120, 50);
        piirra(290, 160, 100, 100, 'pink');
        konteksti.font = '80pt Serif';
        konteksti.strokeStyle = 'white';
        konteksti.strokeText('X', 305, 250);
    }
    function piirra(x, y, leveys, korkeus, vari) {
        konteksti.fillStyle = vari;
        konteksti.fillRect(x, y, leveys, korkeus);
        konteksti.strokeStyle = 'black';
        konteksti.lineWidth = 2;
        konteksti.strokeRect(x, y, leveys, korkeus);
    }
})();