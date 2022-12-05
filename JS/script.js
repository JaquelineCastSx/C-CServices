var prod = document.getElementById("t");

fetch("productos.json")
    .then(response => {
        response.json().then(productos => {
            productos.forEach(registro => {
                let nombre = document.createElement("p");
                nombre.textContent = "Producto: "
                    + registro.title
                    + ", Marca: " + registro.brand;
                prod.appendChild(nombre);
            });
        });
    });