
class Koira {
    constructor(laji, vuosi, vari) {
      this.laji = laji;
      this.vuosi = vuosi;
      this.vari = vari;
    }
    otus(){
        return this.laji;
    }
    varitys(){
        return this.vari;
    }
    ika() {
        let date = new Date();
        return date.getFullYear() - this.vuosi;
      }
  }
  let munKoira = new Koira("Koira", 2013, "ruskea");
document.getElementById("demo").innerHTML = "Lemmikkini on " + munKoira.otus() + " ja se on väriltään " + munKoira.varitys() + " ja iältään " + munKoira.ika() ;
