function buttoni() {
    let patt = document.getElementById("demo1").value;
    let r = patt.search("@");
    // Tuloksena true
    console.log("Testataan patternia" +patt+ "merkkijonosta " +"@"+ " testin tulos on " +r)
    if (r==-1) {
        alert("Sähköposti väärässä muodossa (@-merkki puuttuu).");
    }
}