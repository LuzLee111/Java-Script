//Suma de dos números
console.log("La suma de a y b es:");
const sumaDosValores = (num1, num2) =>{
  console.log (num1 + num2);
}
sumaDosValores(10,5);




//Ingrese el nombre 
let persona = {
  nombre:"Maria Luz",
  apellido:"Lee",
  edad:22,
  saludar: function(){
      console.log("¿Cuál es tu nombre");
      console.log("Hola mi nombre es",  this.nombre);
      console.log("Hola mi apellido es",  this.apellido);
  }
  }
  persona.saludar();

  let nombre = prompt("Por favor, ingresa tu nombre:");
console.log("¡Hola, " + nombre + "!44 Bienvenido/a.");



//El número mayor
  let a = 7;
  let b = 14;
  let c = 9;
  let mayor;
  if (a > b && a > c) {
    mayor = a;
  } else if (b > a && b > c) {
    mayor = b;
  } else {
    mayor = c;
  }
  console.log("El mayor de los tres números es:", mayor);




  //El número que ingresas es par o impar
  let numeroIngresado = prompt("Ingresa un número y te diré si es par o impar:"); //prompt es para que usario ingrese
if (numeroIngresado % 2 === 0) {
  alert("El número " + numeroIngresado + " es par");
} else {
  alert("El número " + numeroIngresado + " es impar");
}




//Operaciones de asignación y bucles
// 0 a 9
let bandera = 0;  //podes probar let bandera = 10;
console.log("bucle while")
while(bandera<10){
    console.log(bandera);
    bandera++;
}

//10 a 1
let num = 10;
while (num > 0) {
  console.log(num);
  num--;
}





let numero;

do {
  numero = prompt("Ingresa un número mayor a 100:");
} while (numero <= 100);

console.log("Ingresaste un número mayor a 100: " + numero);





function esPar(numero) {
  return numero % 2 === 0;
}

// Probando la función con diferentes números y mostrando mensajes
let numero1 = 8;
console.log("El número " + numero1 + " es par: " + esPar(numero1));

let numero2 = 7;
console.log("El número " + numero2 + " es par: " + esPar(numero2));






function convertirCelsiusAFahrenheit(celsius) {
  let fahrenheit = celsius * 1.8 + 32;
  return fahrenheit;
}

// Probando la función con un valor de 30°C
let celsius = 30;
let fahrenheit = convertirCelsiusAFahrenheit(celsius);
console.log(celsius + "°C son equivalentes a " + fahrenheit + "°F");






let Persona1 = {
  nombre:"Luciano",
  apellido:"Sanchez",
  edad: "22",
  ciudad: "Barcelona",
  saludar: function(){
      console.log("Persona: ",  this.nombre, ", Edad: ",this.edad, ", Ciudad: ",this.ciudad);
  },
  }
  Persona1.saludar();







  let libro = {
    titulo: "Cien Años de Soledad",
    autor: "Gabriel García Márquez",
    año: 1967,
    
    esAntiguo: function() {
      let añoActual = new Date().getFullYear(); // Obtiene el año actual
      let añosDesdePublicacion = añoActual - this.año;
  
      if (añosDesdePublicacion > 10) {
        console.log("El libro '" + this.titulo + "' es antiguo.");
      } else {
        console.log("El libro '" + this.titulo + "' es reciente.");
      }
    }
  }
  
  // Probando el método
  libro.esAntiguo();


  let libro1 = {
    titulo: "Don Quijote de la Mancha",
    autor: "Miguel de Cervantes",
    año: 1605,  // Primera parte publicada en 1605
    
    esAntiguo: function() {
      let añoActual = new Date().getFullYear(); // Obtiene el año actual
      let añosDesdePublicacion = añoActual - this.año;
  
      if (añosDesdePublicacion > 10) {
        console.log("El libro '" + this.titulo + "' es antiguo.");
      } else {
        console.log("El libro '" + this.titulo + "' es reciente.");
      }
    }
  }
  
  // Probando el método
  libro1.esAntiguo();






// Declarar el array con los números del 1 al 10
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Crear un nuevo array para almacenar los resultados
let numerosMultiplicados = [];

// Bucle que multiplica cada número por 2
for (let i = 0; i < numeros.length; i++) {
  numerosMultiplicados[i] = numeros[i] * 2;
}

// Mostrar ambos arrays en la consola
console.log("Array original:", numeros);
console.log("Array multiplicado por 2:", numerosMultiplicados);





// Crear un array vacío llamado pares
let pares = [];

// Bucle for para agregar los primeros 10 números pares
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    pares.push(i);
  }

  // Detener el bucle una vez que tengamos 10 números pares
  if (pares.length === 10) {
    break;
  }
}

// Imprimir el array pares en la consola
console.log("Los primeros 10 números pares son:", pares);





const button = document.getElementById("button");

const handleStyleButton = () => {
    // Agregamos la clase blueButton al botón
    button.classList.add("blueButton");
    console.log("Clase blueButton añadida");
};

// Asignamos el evento click al botón
button.addEventListener("click", handleStyleButton);






// Obtener todos los elementos li dentro del ul
const elementosLista = document.querySelectorAll("#miLista li");

// Convertir NodeList a un array y luego invertir el orden
const elementosInvertidos = Array.from(elementosLista).reverse();

// Recorrer cada elemento li (ahora en orden inverso) y agregar un evento click
elementosInvertidos.forEach((elemento) => {
    console.log(elemento.textContent);
});


