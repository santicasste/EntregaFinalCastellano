//! Declaraciones variables, clases y arrays 

let nombreIngresado = "";
let montoTotal = 0;


class Producto {  // Creo una clase de productos para luego ahorrar tiempo y espacio al momento de crear uno.
    constructor(nombre, precio, tipo) {
        this.nombre = nombre;
        this.precio = precio;
        this.tipo = tipo;
    }
}

//! Vinilos
let vida = new Producto("Vida", 58399, "Vinilo");
let peliculas = new Producto("Películas", 52399, "Vinilo");
let bicicleta = new Producto("Bicicleta", 63199, "Vinilo");
let pianobar = new Producto("Piano Bar", 58199, "Vinilo");

//! Indumentaria 
let remera = new Producto("Remera Clics Modernos", 30182, "Indumentaria");
let mochila = new Producto("Mochila Serú Girán", 52399, "Indumentaria");
let campera = new Producto("Campera Piano Bar", 20199, "Indumentaria");
let pantalon = new Producto("Pantalón Say No More", 51990, "Indumentaria");

//! Instrumentos
let piano = new Producto("Piano electroacústico Yamaha CP-70", 12600000, "Instrumento");
let sintetizador = new Producto("Sintetizador Roland Jupiter-6", 1200000, "Instrumento");
let guitarra = new Producto("Guitarra eléctrica Rickenbacker 365", 873000, "Instrumento");
let caja = new Producto("Caja de ritmos TR-808", 900200, "Instrumento");

const productos = [vida, peliculas, bicicleta, pianobar, remera, mochila, campera, pantalon, piano, sintetizador, guitarra, caja];

const carrito = []; // Creo un array donde al momento de seleccionar comprar un producto el mismo ingrese aca.

const filtrarArray = (array, propiedad, valor) => array.filter((producto) => producto[propiedad] === valor);

//  Funciones

function formatearMontoTotal(monto) {
    return monto.toLocaleString('es-AR'); // Esta funcion hace que al momento de ver el monto aparezca separado por puntos " . " 
}

function inicio(nombre) {

    if (!isNaN(nombre) || nombre == "") {    // Pregunta nombre y evalua que no sea un número
        alert("Nombre invalido.");
    } else {
        alert("Bienvenido/a, " + nombre + ". A continuacion podras ver los productos disponibles de nuestra tienda.");
    }
}

function tienda() {

    let eleccion = 0;
    let eleccionInterna = 0;
    let control = 0;

    do {
        eleccion = prompt("Productos, instrumentos y merchandising oficial de Charly García: \n\n" +
            "Opción 1.  Vinilos. \n" +
            "Opción 2.  Indumentaria. \n" +
            "Opción 3.  Instrumentos. \n" +
            "Opción 4.  Ver carrito. \n\n " +
            "Introduzca el numero correspondiente a cada opción, o introduzca 'x' si desea salir y ver el monto total de la compra.\n\n").toLowerCase();

        switch (eleccion) {

            case "1":
                eleccionInterna = prompt("En este apartado encontraras algunos de los mejores albumes en vinilo de Charly García:\n\n" +
                    "Opción 1.   Vinilo 'Vida - Sui Géneris'. -$58.399 \n" +
                    "Opción 2.   Vinilo 'Películas - La Maquina de Hacer Pájaros'. -$52.399 \n" +
                    "Opción 3.   Vinilo 'Bicicleta - Serú Girán'. -$63.199 \n" +
                    "Opción 4.   Vinilo 'Piano Bar - Charly García'. -$58.199 \n\n" +
                    "Introduzca el numero correspondiente a cada opción para comprarla automaticamente, o introduzca 'x' si desea salir.\n\n").toLowerCase();

                if (eleccionInterna == 1) {
                    carrito.push(vida);
                    montoTotal += vida.precio;
                } else if (eleccionInterna == 2) {
                    carrito.push(peliculas);
                    montoTotal += peliculas.precio;
                } else if (eleccionInterna == 3) {
                    carrito.push(bicicleta);
                    montoTotal += bicicleta.precio;
                } else if (eleccionInterna == 4) {
                    carrito.push(pianobar);
                    montoTotal += pianobar.precio;
                }

                break;

            case "2":
                eleccionInterna = prompt("En este apartado encontraras el mejor merchandising de Charly García:\n\n" +
                    "Opción 1.   Remera Clics Modernos. -$30.182 \n" +
                    "Opción 2.   Mochila Serú Girán. -$52.399 \n" +
                    "Opción 3.   Campera Piano Bar. -$20.199 \n" +
                    "Opción 4.   Pantalon Say No More. -$51.990 \n\n" +
                    "Introduzca el numero correspondiente a cada opción para comprarla automaticamente, o introduzca 'x' si desea salir.\n\n").toLowerCase();

                if (eleccionInterna == 1) {
                    carrito.push(remera);
                    montoTotal += remera.precio;
                } else if (eleccionInterna == 2) {
                    carrito.push(mochila);
                    montoTotal += mochila.precio;
                } else if (eleccionInterna == 3) {
                    carrito.push(campera);
                    montoTotal += campera.precio;
                } else if (eleccionInterna == 4) {
                    carrito.push(pantalon);
                    montoTotal += pantalon.precio;
                }
                break;

            case "3":
                eleccionInterna = prompt("En este apartado encontraras los instrumentos que alguna vez tocó Charly García:\n\n" +
                    "Opción 1.   Piano electroacústico Yamaha CP-70. -$12.600.000 \n" +
                    "Opción 2.   Sintetizador Roland Jupiter-6. -$1.200.000 \n" +
                    "Opción 3.   Guitarra eléctrica Rickenbacker 365. -$873.000 \n" +
                    "Opción 4.   Caja de ritmos TR-808. -$900.200 \n\n" +
                    "Introduzca el numero correspondiente a cada opción para comprarla automaticamente, o introduzca 'x' si desea salir.\n\n").toLowerCase();

                if (eleccionInterna == 1) {
                    carrito.push(piano);
                    montoTotal += piano.precio;
                } else if (eleccionInterna == 2) {
                    carrito.push(sintetizador);
                    montoTotal += sintetizador.precio;
                } else if (eleccionInterna == 3) {
                    carrito.push(guitarra);
                    montoTotal += guitarra.precio;
                } else if (eleccionInterna == 4) {
                    carrito.push(caja);
                    montoTotal += caja.precio;
                }
                break

            case "4":
                let eleccionCarrito = "";
                let tipo = "";
                let carritoInfo = "";  // Variable para almacenar la información del carrito

                carrito.forEach(elemento => {  // Recorre cada elemento del carrito y llena el string con la información
                    carritoInfo += "▪️ Nombre: " + elemento.nombre + "\n- Precio: $" + elemento.precio.toLocaleString('es-AR') + "\n- Tipo: " + elemento.tipo + "\n\n";
                });

                eleccionCarrito = prompt("Aquí está su carrito. Oprime '2' para filtrar sus productos o cualquier otra tecla para volver atrás.\n\n" + carritoInfo + "\nEl monto total es: $" + formatearMontoTotal(montoTotal));
                if (eleccionCarrito === '2') {
                    tipo = prompt("Presione '1' si desea filtrar por: Vinilos.\nPresione '2' si desea filtrar por: Indumentaria.\nPresione '3' si desea filtrar por: Instrumentos.\n\n");
                    let filtroInfo = "";
                    if (tipo === '1') {
                        let productosFiltrados = filtrarArray(carrito, "tipo", "Vinilo");
                        productosFiltrados.forEach(elemento => {
                            filtroInfo += "▪️ Nombre: " + elemento.nombre + "\n- Precio: $" + elemento.precio.toLocaleString('es-AR') + "\n- Tipo: " + elemento.tipo + "\n\n";
                        });
                        alert(filtroInfo);
                    } else if (tipo === '2') {
                        let productosFiltrados = filtrarArray(carrito, "tipo", "Indumentaria");
                        productosFiltrados.forEach(elemento => {
                            filtroInfo += "▪️ Nombre: " + elemento.nombre + "\n- Precio: $" + elemento.precio.toLocaleString('es-AR') + "\n- Tipo: " + elemento.tipo + "\n\n";
                        });
                        alert(filtroInfo);
                    } else if (tipo === '3') {
                        let productosFiltrados = filtrarArray(carrito, "tipo", "Instrumento");
                        productosFiltrados.forEach(elemento => {
                            filtroInfo += "▪️ Nombre: " + elemento.nombre + "\n- Precio: $" + elemento.precio.toLocaleString('es-AR') + "\n- Tipo: " + elemento.tipo + "\n\n";
                        });
                        alert(filtroInfo);
                    } else {
                        eleccionCarrito = x;
                    }
                }
                break;



            case "x":
                control = "x"; // Al seleccionar "x" como valor de control el ciclo termina.
                alert("¡Muchas gracias por visitar nuestra tienda! Su monto total es de: $" + formatearMontoTotal(montoTotal));
                break;

            default:
                alert("El caracter ingresado no coincide con ninguna opción.");
                break;
        }
    } while (control != "x");

}

// Codigo final

nombreIngresado = prompt("¡Bienvenido/a a la tienda oficial de Charly García! Porfavor, ingrese su nombre.");

inicio(nombreIngresado);
tienda();




