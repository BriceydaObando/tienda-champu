window.onload = function () {
  const contenedor = document.getElementById("productos");

  contenedor.innerHTML = "";

  productos.forEach(p => {
    contenedor.innerHTML += `
      <div class="producto">
        <img src="${p.imagen}">
        <h3>${p.nombre}</h3>
        <p>$${p.precio}</p>
        <button>Agregar al carrito</button>
      </div>
    `;
  });
};
