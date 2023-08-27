precioSpan = document.querySelector(".precio-inicial");
botonSuma = document.querySelector(".suma");
botonResta = document.querySelector(".resta");
cantidadSpan = document.querySelector(".cantidad");
totalSpan = document.querySelector(".valor-total");

precio = 400000;
precioSpan.innerHTML = precio;

cantidad = Number(cantidadSpan.innerHTML);
botonSuma.onclick = () => {
  cantidad = cantidad + 1;
  asignacion();
};

botonResta.onclick = () => {
  if (cantidad > 0) {
    cantidad = cantidad - 1;
  }
  asignacion();
};

const asignacion = () => {
  cantidadSpan.innerHTML = cantidad;
  totalSpan.innerHTML = cantidad * precio;
};
