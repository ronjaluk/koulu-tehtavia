'use strict';

class Kasi extends Pakka {
  constructor() {  //tätä ei tarvita
    super();  //tätä kutsutaan automaattisesti
  }

   get summa() {
    return this.kortit.reduce((summa,kortti)=>summa+kortti.arvo,0);
  }

};
