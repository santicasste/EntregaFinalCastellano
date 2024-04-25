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
// let peliculas = new Producto("Películas", 52399, "Vinilo");
// let bicicleta = new Producto("Bicicleta", 63199, "Vinilo");
let pubis = new Producto("Pubis Angelical", 58199, "Vinilo");

//! Indumentaria 
let remera = new Producto("Remera Clics Modernos", 30000, "Indumentaria");
// let mochila = new Producto("Mochila Serú Girán", 52399, "Indumentaria");
// let campera = new Producto("Campera Piano Bar", 20199, "Indumentaria");
let pantalon = new Producto("Pantalón Say No More", 51990, "Indumentaria");

//! Instrumentos
let piano = new Producto("Piano Yamaha CP-70", 12000000, "Instrumento");
// let sintetizador = new Producto("Sintetizador Roland Jupiter-6", 1200000, "Instrumento");
// let caja = new Producto("Caja de ritmos TR-808", 900200, "Instrumento");
let guitarra = new Producto("Guitarra eléctrica Rickenbacker 365", 873000, "Instrumento");

const productos = [vida, pubis, remera, pantalon, piano, guitarra];

const carrito = []; // Creo un array donde al momento de seleccionar comprar un producto el mismo ingrese aca.

const filtrarArray = (array, propiedad, valor) => array.filter((producto) => producto[propiedad] === valor);

//  Funciones

function formatearMontoTotal(monto) {
    return monto.toLocaleString('es-AR'); // Esta funcion hace que al momento de ver el monto aparezca separado por puntos " . " 
}

function agregarAlCarrito(producto){ // Fucnion para sumar la cantidad en caso de estar repetido
    const prodEncontrado = carrito.find((item) => item.nombre === producto.nombre); // Creo una const donde busca en el carrito si ya se encuentra el nombre del producto que quiera agregar

    if (prodEncontrado){ // Si esta le suma uno a la cantidad
        prodEncontrado.cantidad++;
    } else {
        carrito.push({...producto, cantidad: 1}) // Si no esta con la ayuda del spread muestro el producto mas una la nueva variable de cantidad iniciada en 1
    }
}

// DOM

const contenedorProductos = document.querySelector(".container_productos");

productos.forEach((producto) => {   // Recorre el array de prodcutos y los va mostrando en la página 
    const div = document.createElement("div"); // Creo el elemento "div" que representa al div del HTML
    div.classList.add("producto"); // Le agrego la clase "producto" al div

    div.innerHTML = ` 
        <img src="../images/pubis.jpg" alt="pubis_angelical">
        <h3>${producto.nombre}</h3>
        <p>$${producto.precio}</p>
    `; // Junto al .innerHTML voy poniendo que quiero que aparezca en la web

    const btn = document.createElement("button"); // Creo el elemento "btn" en representacion a un boton de HTML
    btn.classList.add("btn_carrito"); // Le agrego la clase "btn_carrito"
    btn.innerText = "Agragar al carrito";  // Junto al .innerTexto le pongo el texto que quiero que muestre 
    btn.addEventListener("click", () =>{ // Le agrego el evento deseado
        agregarAlCarrito(producto);
    });
    div.append(btn); // Junto a .append lo pongo en el "div"
    contenedorProductos.append(div); // Junto a .append lo pongo junto al contenedorProductos
})
/*
            <div class="producto">
                <img src="../images/pubis.jpg" alt="pubis_angelical">
                <h3>Vinilo</h3>
                <p>$110.000</p>
                <button class="btn_carrito">Agregar al carrito</button>
            </div>
*/
