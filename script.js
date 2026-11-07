
function mostrarPromocion() {
    alert("¡Bienvenido a Café Aurora!  Hoy tenemos un 20% de descuento.");
}

function realizarPedido() {
    let producto = document.getElementById("producto");

    let precio = Number(producto.value);

    let nombre = producto.options[producto.selectedIndex].text;

    agregarAlCarrito(nombre, precio);

    let resultado = document.getElementById("resultado");

    resultado.textContent = "¡Producto agregado al carrito!";
}

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

let total = Number(localStorage.getItem("total")) || 0;

function guardarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
    localStorage.setItem("total", total);
}

function agregarAlCarrito(nombre, precio) {
    carrito.push(nombre);
    total = total + precio;

    guardarCarrito();
    mostrarCarrito();
}

function mostrarCarrito() {
    let lista = document.getElementById("listaCarrito");
    let totalTexto = document.getElementById("totalCarrito");
    let cantidad = document.getElementById("cantidadCarrito");

    lista.innerHTML = "";

    carrito.forEach(function(producto, indice) {
        let elemento = document.createElement("li");

        elemento.textContent = producto + " ";

        let boton = document.createElement("button");
        boton.textContent = "Eliminar";

        boton.onclick = function() {
            eliminarProducto(indice);
        };

        elemento.appendChild(boton);
        lista.appendChild(elemento);
    });

    totalTexto.textContent = "Total: $" + total;
    cantidad.textContent = "Productos en el carrito: " + carrito.length;
}
function eliminarProducto(indice) {
    let producto = carrito[indice];

    let precio = Number(producto.split("$").pop());

    total = total - precio;

    carrito.splice(indice, 1);

guardarCarrito();
mostrarCarrito();
}
let cantidad = document.getElementById("cantidadCarrito");

cantidad.textContent = "Productos en el carrito: " + carrito.length;

function vaciarCarrito() {
    carrito = [];
    total = 0;

    guardarCarrito();
    mostrarCarrito();
}

function confirmarPedido() {
    if (carrito.length === 0) {
        alert("Tu carrito está vacío. Agrega productos primero.");
        return;
    }

    alert("¡Gracias por tu compra en Café Aurora! \n" +
          "Productos: " + carrito.length + "\n" +
          "Total: $" + total);

    vaciarCarrito();
}

const formularioContacto =
    document.getElementById("formularioContacto");

formularioContacto.addEventListener("submit", function(evento) {
    evento.preventDefault();

    let nombre = document.getElementById("nombre").value;

    let respuesta =
        document.getElementById("respuestaContacto");

    respuesta.textContent =
        "¡Gracias por tu mensaje, " + nombre + "! ";

    formularioContacto.reset();
});
mostrarCarrito();