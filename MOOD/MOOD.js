let botonA = document.getElementById("boton-a");
let botonB = document.getElementById("boton-b");
let botonC = document.getElementById("boton-c");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
let listaCarrito = document.getElementById("lista-carrito");
let carritoFlotante = document.getElementById("carrito-flotante");

function mostrarCarrito() {
  listaCarrito.innerHTML = "";

  
  let contador = {};
  carrito.forEach(p => {
    contador[p.nombre] = (contador[p.nombre] || 0) + 1;
  });

  
  for (let nombre in contador) {
    let li = document.createElement("li");
    li.textContent = `${nombre} (${contador[nombre]})`;
    listaCarrito.appendChild(li);
  }

  
  carritoFlotante.classList.add("mostrar");

  
  setTimeout(() => {
    carritoFlotante.classList.remove("mostrar");
  }, 5000);
}

function agregarProducto(nombre) {
  let producto = { id: Date.now(), nombre: nombre };
  carrito.push(producto);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito();
}

botonA.addEventListener("click", () => agregarProducto("Serum"));
botonB.addEventListener("click", () => agregarProducto("Labiales"));
botonC.addEventListener("click", () => agregarProducto("Polvo Compacto"));

mostrarCarrito(); 

   
   
   
