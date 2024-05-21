


fetch("../data/productos.json")
    .then(res => res.json()) 
    .then(data => {
        data.forEach((producto) => {   // Recorre el array de prodcutos y los va mostrando en la página 
            const div = document.createElement("div"); // Creo el elemento "div" que representa al div del HTML
            div.classList.add("producto"); // Le agrego la clase "producto" al div
        
            div.innerHTML = ` 
                <img src="${producto.img}">
                <h3 class="producto_data">${producto.nombre}</h3>
                <p class="producto_data">$${producto.precio}</p>
            `; // Junto al .innerHTML voy poniendo que quiero que aparezca en la web
        
            const btn = document.createElement("button"); // Creo el elemento "btn" en representacion a un boton de HTML
            btn.classList.add("btn_carrito"); // Le agrego la clase "btn_carrito"
            btn.innerText = "Agregar al carrito";  // Junto al .innerText le pongo el texto que quiero que muestre 
            btn.addEventListener("click", () =>{ // Le agrego el evento deseado
                agregarAlCarrito(producto);
                
                console.log(carrito);
            });
            div.append(btn); // Junto a .append lo pongo en el "div"
            contenedorProductos.append(div); // Junto a .append lo pongo junto al contenedorProductos
        });
    })

//  Funciones
const contenedorCarrito = document.querySelector(".container_carrito");
const contenedorProductos = document.querySelector(".container_productos");
const totalCarrito = document.querySelector(".carrito_total");

let carrito = JSON.parse(localStorage.getItem("carrito")) || []; //Si hay algo en el locale storage con .parse lo transforma en objeto para el carrito y si no hay nada el carrito si crea en 0 elementos


// Funcion para actualizar el balance total

function actualizarTotal(){
    const montoTotal = carrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
    totalCarrito.innerText = `Total: $${montoTotal}`;
    
    if(montoTotal === 0){
        totalCarrito.innerText = "-";
    }
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

    if (carrito.length === 0){
        contenedorCarrito.innerText = "No hay productos en su carrito... 🙁"
     } else { // Valida
        carrito.forEach((producto) => {  // Recorre el carrito y crea un div con su respectivo texto e informacion para cada uno
            const div = document.createElement("div"); 
            div.classList.add("carrito_producto") 
            div.innerHTML = `  
            <h2>${producto.nombre}</h2>
            <p>Precio: $${producto.precio}</p>
            <p>Cantidad: ${producto.cantidad}</p>
            <p>Subt: $${producto.cantidad * producto.precio}</p>
            `; 

            const btn = document.createElement("button");
            btn.classList.add("btn_producto");
            btn.innerText = "Borrar ❌";
            btn.addEventListener("click", () => {
                borrarDelCarrito(producto);
                Toastify({
                    text: "Producto eliminado",
                    duration: 1000,
                    close: true,
                    gravity: "bottom", // `top` or `bottom`
                    position: "right", // `left`, `center` or `right`
                    stopOnFocus: true, // Prevents dismissing of toast on hover
                    style: {
                    background: "linear-gradient(to right, #840705, #2e0f15)",
                    },
                    onClick: function(){} // Callback after click
                }).showToast();
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
    Toastify({
        text: "Producto agregado ✔",
        duration: 1000,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
        background: "linear-gradient(to right, #2e0f15, #840705)",
        },
        onClick: function(){} // Callback after click
    }).showToast();
}



