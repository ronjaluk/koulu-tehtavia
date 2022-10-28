'use strict';
(function () {
    let piirtoalusta;
    let konteksti;
    document.addEventListener('DOMContentLoaded', alusta);
    function alusta() {
        piirtoalusta = document.getElementById('piirtoalusta');
        konteksti = piirtoalusta.getContext('2d');
        // //x y leveys korkeus vari
        // piirra(60, 300, 200, 30, 'red');
        // piirra(130, 200, 50, 50, 'orange');
        // piirra(50, 100, 60, 60, 'white');
        // piirra(200, 100, 60, 60, 'white');
        konteksti.font = '40pt Serif';
        konteksti.fillStyle = 'yellow';
        piirraSuorakaide('tausta', 100, 100, 200, 200,);
        piirraSuorakaide('suu', 150, 250, 100, 25, false);
        piirraSuorakaide('nena', 190, 200, 20, 20,);
        piirraSuorakaide('silma', 155, 155, 25, 40, false);
        piirraSuorakaide('silma', 255, 155, 25, 40, false);


    }
    function piirra(x,   y, leveys, korkeus, vari) {
        konteksti.fillStyle = vari;
        konteksti.fillRect(x, y, leveys, korkeus);
        konteksti.strokeStyle = 'black';
        konteksti.lineWidth = 2;
        konteksti.strokeRect(x, y, leveys, korkeus);
    }
    function piirraSuorakaide(osa, x, y, lev, kork, onReuna = true) {
        konteksti.save();
        konteksti.fillStyle = tyylit[osa].vari;
        konteksti.fillRect(x, y, lev, kork);
        if (onReuna) {
            konteksti.lineWidth = tyylit[osa].viivanLeveys;
            konteksti.strokeStyle = tyylit[osa].viiva;
            konteksti.strokeRect(x, y, lev, kork);
        }
        konteksti.restore();
    }
    const tyylit = {
        suu: { vari: 'red', viiva: 'orange', viivanLeveys: 5 },
        silma: { vari: 'white', viiva: 'black', viivanLeveys: 2 },
        nena: { vari: 'blue', viiva: 'orange', viivanLeveys: 5 },
        tausta: { vari: 'cyan', viiva: 'orange', viivanLeveys: 5 },
    };

 
})();