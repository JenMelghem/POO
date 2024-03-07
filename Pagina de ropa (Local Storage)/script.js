document.addEventListener("DOMContentLoaded", function(){
    const productContainer = document.getElementById("product-container")
    const cartCount =document.getElementById ("cart-count");
    
    //cargar los productos
    const cartProducts = JSON.parse(localStorage.getItem("cartProducts")) || [];


    //Actualizar el contador del carrito
    function updateCartCount(){
        cartCount.textContent = cartProducts.length;
    }   

    //Funcion para agregar un producto al carrito
    function addToCart(product) {
        cartProducts.push(product);
        localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
        updateCartCount();
        showConfirmationPopup();
    }

    function showConfirmationPopup() {
        const popup = document.createElement("div");
        popup.classList.add("confirmation-popup");
        popup.textContent = "Producto agregado al carrito";

        document.body.appendChild(popup);

        // Desaparecer la ventana emergente después de 2 segundos
        setTimeout(function () {
            popup.remove();
        }, 2000);
    }

    //Mostrar productos en la pagina
    function displayProducts(){
        //simula la carga de productos desde una fuente de datos
        const products =[
            { id: 1, name: "Sudadera Bordada", price: 40.99 },
            { id: 2, name: "Camiseta", price: 29.99 },
            { id: 3, name: "Beanie", price: 25.99 },
        ];
        
        productContainer.innerHTML = ""; // Limpiar el contenedor
        
        products.forEach((product) => {
            const productElement = document.createElement("article");
            productElement.classList.add("product");

            productElement.innerHTML = `
                <img src="producto ${product.id}.jpg" alt="${product.name}">
                <h2>${product.name}</h2>
                <span class="price">$${product.price.toFixed(2)}</span>
                <button class="add-to-cart-btn" data-product-id="${product.id}">Agregar al Carrito</button>
            `;
            productElement.querySelector(".add-to-cart-btn").addEventListener("click", function() {
               addToCart(product);
            });

            productContainer.appendChild(productElement);
        });
    }

    function resetCart() {
        localStorage.removeItem("cartProducts"); // Elimina el contenido del LocalStorage
        cartProducts.length = 0; // Vacía el array cartProducts
        updateCartCount(); 
    }

    // botón de reinicio
    const resetCartBtn = document.getElementById("reset-cart-btn");

    resetCartBtn.addEventListener("click", function () {
        resetCart(); 
    });

     // Mostrar productos al cargar la página
     displayProducts();

     // Actualizar el contador de carrito al cargar la página
     updateCartCount();
});