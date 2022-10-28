function myFunction(p1, p2) {
    return p1 + p2;
  }
document.getElementById("demo").innerHTML = myFunction(5, 3);
function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
  }
  document.getElementById("demo2").innerHTML = "77 fahrenheittiä on " + toCelsius(77) + "  celcius-astetta.";