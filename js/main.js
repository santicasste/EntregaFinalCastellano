// Declaraciones variables 

let nombreIngresado = "";
let montoTotal = 0;

//  Funciones

function inicio(nombre) {

    if (!isNaN(nombre) || nombre == "") {
        alert("Nombre invalido.");
    } else {
        alert("Bienvenido/a, " + nombre + ". A continuacion podras ver los productos disponibles de nuestra tienda.");
    }
}

function productos() {

    let eleccion = 0;
    let eleccionInterna = 0;
    let control = 0;

    do {
        eleccion = prompt("Productos, instrumentos y merchandising oficial de Charly García: \n\n" +
            "Opción 1.  Vinilos. \n" +
            "Opción 2.  Indumentaria. \n" +
            "Opción 3.  Instrumentos. \n\n" +
            "Introduzca el numero correspondiente a cada opción, o introduzca 'x' si desea salir y ver el monto total de la compra.\n\n");

        switch (eleccion) {

            case "1":
                eleccionInterna = prompt("En este apartado encontraras algunos de los mejores albumes en vinilo de Charly García:\n\n" +
                    "Opción 1.   Vinilo 'Vida - Sui Géneris'. -$58.399 \n" +
                    "Opción 2.   Vinilo 'Películas - La Maquina de Hacer Pájaros'. -$52.399 \n" +
                    "Opción 3.   Vinilo 'Bicicleta - Serú Girán'. -$63.199 \n" +
                    "Opción 4.   Vinilo 'Piano Bar - Charly García'. -$58.199 \n\n" +
                    "Introduzca el numero correspondiente a cada opción para comprarla automaticamente, o introduzca 'x' si desea salir.\n\n");
                    
                    if (eleccionInterna == 1){
                        montoTotal += 58399;
                    } else if (eleccionInterna == 2) {
                        montoTotal += 52399;
                    } else if (eleccionInterna == 3){
                        montoTotal += 63199;
                    } else if (eleccionInterna == 4){
                        montoTotal += 58199;
                    }
                    
                break;

            case "2":
                eleccionInterna = prompt("En este apartado encontraras el mejor merchandising de Charly García:\n\n" +
                    "Opción 1.   Remera Clics Modernos. -$30.182 \n" +
                    "Opción 2.   Mochila Serú Girán. -$52.399 \n" +
                    "Opción 3.   Gorra Piano Bar. -$20.199 \n" +
                    "Opción 4.   Pantalon Say No More. -$51.990 \n\n" +
                    "Introduzca el numero correspondiente a cada opción para comprarla automaticamente, o introduzca 'x' si desea salir.\n\n");
                    
                    if (eleccionInterna == 1){
                        montoTotal += 30182;
                    } else if (eleccionInterna == 2) {
                        montoTotal += 52399;
                    } else if (eleccionInterna == 3){
                        montoTotal += 20199;
                    } else if (eleccionInterna == 4){
                        montoTotal += 51990;
                    }
                break;

            case "3":
                eleccionInterna = prompt("En este apartado encontraras los instrumentos que alguna vez tocó Charly García:\n\n" +
                    "Opción 1.   Piano electroacústico Yamaha CP-70. -$12.600.000 \n" +
                    "Opción 2.   Sintetizador Roland Jupiter-6. -$1.200.000 \n" +
                    "Opción 3.   Guitarra eléctrica Rickenbacker 365. -$873.000 \n" +
                    "Opción 4.   Caja de ritmos TR-808. -$900.200 \n\n" +
                    "Introduzca el numero correspondiente a cada opción para comprarla automaticamente, o introduzca 'x' si desea salir.\n\n");
                    
                    if (eleccionInterna == 1){
                        montoTotal += 12600000;
                    } else if (eleccionInterna == 2) {
                        montoTotal += 1200000;
                    } else if (eleccionInterna == 3){
                        montoTotal += 873000;
                    } else if (eleccionInterna == 4){
                        montoTotal += 900200;
                    }

                break

            case "x":
                control = "x";
                alert("¡Muchas gracias por visitar nuestra tienda! Su monto total es de: $" + montoTotal);
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
productos();
