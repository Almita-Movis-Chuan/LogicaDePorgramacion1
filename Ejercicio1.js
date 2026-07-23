
function ordenarTresNumeros() {

  const num1 = 100;
  const num2 = 12;
  const num3 = 44;

  if (num1 === num2 && num2 === num3) {
    console.log("Los números son iguales:", num1);
    return;
  }


  if (num1 >= num2 && num1 >= num3) {
    mayor = num1;
    if (num2 >= num3) {
      centro = num2;
      menor = num3;
    } else {
      centro = num3;
      menor = num2;
    }
  } else if (num2 >= num1 && num2 >= num3) {
    mayor = num2;
    if (num1 >= num3) {
      centro = num1;
      menor = num3;
    } else {
      centro = num3;
      menor = num1;
    }
  } else {
    mayor = num3;
    if (num1 >= num2) {
      centro = num1;
      menor = num2;
    } else {
      centro = num2;
      menor = num1;
    }
  }

 
  console.log("De mayor a menor: " + mayor + ", " + centro + ", " + menor);
  console.log("De menor a mayor: " + menor + ", " + centro + ", " + mayor);
}


ordenarTresNumeros();