// Datos de productos
const productos = [
    {
        nombre: "Laptop Gaming Pro",
        precio: 1299.99,
        categoria: "electronicos",
        imagen: "https://via.placeholder.com/300x200/4A90E2/FFFFFF?text=Laptop+Gaming"
    },
    {
        nombre: "Smartphone Android", 
        precio: 499.99,
        categoria: "electronicos",
        imagen: "https://via.placeholder.com/300x200/50E3C2/FFFFFF?text=Smartphone"
    },
    {
        nombre: "Refrigerador Efficient",
        precio: 899.99, 
        categoria: "electrodomesticos",
        imagen: "https://via.placeholder.com/300x200/9013FE/FFFFFF?text=Refrigerador"
    },
    {
        nombre: "Sofá Moderno Comfort",
        precio: 599.99,
        categoria: "hogar", 
        imagen: "https://via.placeholder.com/300x200/F5A623/FFFFFF?text=Sofá+Moderno"
    },
    {
        nombre: "Zapatos Running Pro",
        precio: 89.99,
        categoria: "moda",
        imagen: "https://via.placeholder.com/300x200/B8E986/FFFFFF?text=Zapatos+Deportivos"
    },
    {
        nombre: "Tablet 10\" Display",
        precio: 329.99,
        categoria: "electronicos",
        imagen: "https://via.placeholder.com/300x200/7ED321/FFFFFF?text=Tablet+10"
    }
];

// Función para mostrar productos
function mostrarProductos() {
    const container = document.getElementById('products-container');
    
    const productosHTML = productos.map(producto => `
        <div class="product">
            <div class="product-image">
                <img src="${producto.imagen}" alt="${producto.nombre}">
            </div>
            <div class="product-info">
                <div class="product-title">${producto.nombre}</div>
                <div class="product-price">$${producto.precio}</div>
                <div class="product-rating">★★★★☆</div>
                <button class="add-to-cart" onclick="agregarAlCarrito('${producto.nombre}')">
                    Añadir al Carrito
                </button>
            </div>
        </div>
    `).join('');
    
    container.innerHTML = productosHTML;
}

// Función para agregar al carrito
function agregarAlCarrito(nombre) {
    alert(`"${nombre}" ha sido añadido al carrito`);
}

// Función para agregar nuevo producto
function agregarNuevoProducto() {
    const nombre = prompt("Nombre del nuevo producto:");
    const precio = prompt("Precio del producto:");
    const categoria = prompt("Categoría:");
    
    if (nombre && precio && categoria) {
        productos.push({
            nombre: nombre,
            precio: parseFloat(precio),
            categoria: categoria,
            imagen: "https://via.placeholder.com/300x200/FF6B6B/FFFFFF?text=Nuevo+Producto"
        });
        
        mostrarProductos();
        alert("Producto agregado exitosamente!");
    }
}

// Inicializar
document.addEventListener('DOMContentLoaded', function() {
    mostrarProductos();
    
    // Botón para agregar productos
    document.getElementById('add-product-btn').addEventListener('click', agregarNuevoProducto);
    
    // Botones de añadir al carrito
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const productTitle = this.parentElement.querySelector('.product-title').textContent;
            agregarAlCarrito(productTitle);
        });
    });
});
