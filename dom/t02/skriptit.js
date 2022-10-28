function selain() {
let selainvalinta = document.getElementsByName('selain');
let valittu;
for(var i = 0; i < selainvalinta.length; i++){
    if(selainvalinta[i].checked){
        valittu = selainvalinta[i].value;
    }
}
document.getElementById("luku").innerHTML = valittu;
}