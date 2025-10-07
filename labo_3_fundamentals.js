

// Comentarios 
// Laboratorio número 3

// Comentarios multilinea  
/*
Nicolas Chiguano 
Wilmer Ramos 
Gabriel Escobar 

*/

// Tipos de datos 
// Primitivos 
let talla= 8; 
let precio= 99.99; 
let color= "Azul Oscuro"; 
let disponible= true; 
let mediosPago= "T"; 
let correo; // Undefined


// Datos compuestos 
let colores=["Azul Claro","Blanco","Negro","Azul Oscuro"]; 

let detalleOrden ={
  id:1,
  estado:true,
  precio:99.99,
  items:["zapatillas"]
}



// Strings 
// Cadena de caracteres 
let user="NicolasChiguano"; 
let correoUser= "nicolas.chiguano@gmail.com";
let password= "Nico1234";
let descripcion="Las zapatillas Lacoste Carnaby Pro son la elección perfecta para el hombre moderno que busca un estilo versátil y cómodo."; 

// Metodos 
console.log(descripcion.toLowerCase()); 
console.log(descripcion.toUpperCase()); 
console.log(descripcion.trim()); 
console.log(correo.includes("@")); 
console.log(correo.tolowerCase().endsWith(".com"));

// ES6 - Template String
console.log(`Hola, ${user}, bienvenido a Mercado Libre`);

// NUMBERS
// Números
let saldoCuenta = "99.99";
// Conversion de tipo
console.log(+saldoCuenta + 10);
// Valores decimales
console.log((+saldo).toFixed(2));

// Precedencia de los operadores
console.log(5 * 4 ** 3);

// BOOLEANS
// Verdadero o Falso
let saldoCuenta1 = 99.99;
let saldoTarjeta = "99.99";

console.log(saldoCuenta == saldoTarjeta);
console.log(saldoCuenta != saldoTarjeta);

// ES6
// Comparacion estricta: Compara el tipo de dato con su valor
console.log(saldoCuenta === saldoTarjeta);
console.log(saldoCuenta !== saldoTarjeta);

// OPERADORES TRUTHY Y FALSY
// Ocupado mucho en validaciones
// ES6
let cuentaUsuario = null;
console.log(cuentaUsuario ?? "Vacia actualmente");

// CONDICIONALES
// ES6
// Operador ternario
let login = true;
let subscripcion = true;
// Si el usuario tiene login y subscripcion, entonces envio gratis, sino envio con costo
console.log(login && subscripcion ? "Envio gratis" : "Envio con costo");
// Si el carrito de compras no tiene items, entonces carrito vacío, sino carrito lleno
let carritosCompras = ["Zpatos"];
carritosCompras.length === 0
  ? console.log("Carrito vacio")
  : console.log("Carrito lleno");

  // FUNCIONES
// Bloque de código que se puede reutilizar

// Funcion declarada
function validarCorreo() {
  console.log("Correo validado.");
}

// Funcion expresada
const validarUsuario = function () {
  console.log("Usuario validado.");
};

// ES6
// FUNCION FLECHA
// Tipo de funcion flecha 1
const validarPago = () => {
  return "Pago completado correctamente.";
};
// Tipo de funcion flecha 2
const validarPagoTwo = () => "Pago completado correctamente.";