let helloo;

helloo = function() {
  document.getElementById("demo1").innerHTML += this;
}

//window olio kutsuu funktiota:
window.addEventListener("load", helloo);

document.getElementById("btn2").addEventListener("click", helloo);



let hello;


hello = () => {
  document.getElementById("demo").innerHTML += this;
}

//button olio kutsuu funktiota:
document.getElementById("btn1").addEventListener("click", hello);
