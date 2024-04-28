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

//  Funciones
const contenedorCarrito = document.querySelector(".container_carrito");
const contenedorProductos = document.querySelector(".container_productos");
const totalCarrito = document.querySelector(".carrito_total");

let carrito = JSON.parse(localStorage.getItem("carrito")) || []; //Si hay algo en el locale storage con .parse lo transforma en objeto para el carrito y si no hay nada el carrito si crea en 0 elementos


// Funcion para actualizar el balance total

function actualizarTotal(){
    const montoTotal = carrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
    totalCarrito.innerText = `$${montoTotal}`;
}


// Funcion para borrar del carrito

function borrarDelCarrito(producto){
    const index = carrito.findIndex((item) => item.nombre === producto.nombre); // Busca con .findIndex si el nombre esta dentro del carrito
    if (index !== -1) { // Valida 
        carrito.splice(index, 1); // Lo borra 
        localStorage.setItem("carrito", JSON.stringify(carrito)); // Actualiza el localStorage
        actualizarCarrito(); // Actualiza el carrito
    }
}


// Funcion para actualizar el carrito

function actualizarCarrito(){
    contenedorCarrito.innerHTML = ""; // Limpiamos el contenido existente antes de volver a renderizar

    if (carrito.length !== 0){  // Valida
        carrito.forEach((producto) => {  // Recorre el carrito y crea un div con su respectivo texto e informacion para cada uno
            const div = document.createElement("div"); 
            div.classList.add("carrito_producto") 
            div.innerHTML = `  
            <h2>${producto.nombre}</h2>
            <p>$${producto.precio}</p>
            <p>${producto.cantidad}</p>
            <p>Subt: $${producto.cantidad * producto.precio}</p>
            `; 

            const btn = document.createElement("button");
            btn.classList.add("btn_producto");
            btn.innerText = "Borrar ❌";
            btn.addEventListener("click", () => {
                borrarDelCarrito(producto);
                console.log("Producto borrado");
            });
            div.append(btn);
            contenedorCarrito.appendChild(div); // Utilizamos appendChild() para agregar el elemento al DOM
        })
    } 
    actualizarTotal();
}

actualizarCarrito(); // Uso esta funcion para que aparezca en pantalla si los productos cargados por mas que la misma se renueve

// Funcion para agragar al carrito

function agregarAlCarrito(producto){ // Funcion para sumar la cantidad en caso de estar repetido
    const prodEncontrado = carrito.find((item) => item.nombre === producto.nombre); // Creo una const donde busca en el carrito si ya se encuentra el nombre del producto que quiera agregar

    if (prodEncontrado){ // Si esta le suma uno a la cantidad
        prodEncontrado.cantidad++;
    } else {
        carrito.push({...producto, cantidad: 1}) // Si no esta con la ayuda del spread muestro el producto mas una la nueva variable de cantidad iniciada en 1
    }
    actualizarCarrito();
    localStorage.setItem("carrito", JSON.stringify(carrito));
}


productos.forEach((producto) => {   // Recorre el array de prodcutos y los va mostrando en la página 
    const div = document.createElement("div"); // Creo el elemento "div" que representa al div del HTML
    div.classList.add("producto"); // Le agrego la clase "producto" al div

    div.innerHTML = ` 
        <img src="../images/pubis.jpg" alt="pubis_angelical">
        <h3 class="producto_data">${producto.nombre}</h3>
        <p class="producto_data">$${producto.precio}</p>
    `; // Junto al .innerHTML voy poniendo que quiero que aparezca en la web

    const btn = document.createElement("button"); // Creo el elemento "btn" en representacion a un boton de HTML
    btn.classList.add("btn_carrito"); // Le agrego la clase "btn_carrito"
    btn.innerText = "Agregar al carrito";  // Junto al .innerTexto le pongo el texto que quiero que muestre 
    btn.addEventListener("click", () =>{ // Le agrego el evento deseado
        agregarAlCarrito(producto);
        
        console.log(carrito);
    });
    div.append(btn); // Junto a .append lo pongo en el "div"
    contenedorProductos.append(div); // Junto a .append lo pongo junto al contenedorProductos
})

