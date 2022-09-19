/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/

function numeroSimetrico(num) {
  // La funcion llamada 'numeroSimetrico' recibe como argumento un numero entero 'num'
  // Esta devuelve true o false dependiendo de si el número es simétrico o no. 
  // Un número es simétrico cuando es igual a su reverso.
  // Ej:
  // numeroSimetrico(11711) devuelve true

  // Tu código:
  let numStr = num.toString(); // convertir num a string
  let reverseStr = numStr.split('').reverse().join(''); // revertir el string
  let reverseNum = parseInt(reverseStr); // convertir el string revertido a número

  return num === reverseNum; // comparar si el número original es igual al número revertido

}


// No modifiques nada debajo de esta linea //

module.exports = numeroSimetrico