// quiero que cuando toque en el button comprar me aparezca un alert que diga que fue agregado al carrito
    let boton= document.getElementById("boton-a");
    
    boton.addEventListener('click', function() {
    boton.textContent = 'Agregado al carrito';
    });

    setTimeout(function () {
        boton.textContent = 'Comprar';
      }, 3000);
    

