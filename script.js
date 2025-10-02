// Datos de productos iniciales
let productos = [
    {
        id: 1,
        nombre: "Laptop Gaming",
        precio: 1299.99,
        categoria: "electronica",
        descripcion: "Laptop para gaming con RTX 3060",
        imagen: "https://via.placeholder.com/300x200?text=Laptop+Gaming"
    },
    {
        id: 2,
        nombre: "Smartphone Android",
        precio: 499.99,
        categoria: "electronica",
        descripcion: "Teléfono inteligente con 128GB",
        imagen: "https://via.placeholder.com/300x200?text=Smartphone"
    },
    {
        id: 3,
        nombre: "Refrigerador",
        precio: 899.99,
        categoria: "electrodomesticos",
        descripcion: "Refrigerador side-by-side 25 pies",
        imagen: "https://via.placeholder.com/300x200?text=Refrigerador"
    },
    {
        id: 4,
        nombre: "Sofá Moderno",
        precio: 599.99,
        categoria: "hogar",
        descripcion: "Sofá de 3 plazas color gris",
        imagen: "https://via.placeholder.com/300x200?text=Sofá+Moderno"
    },
    {
        id: 5,
        nombre: "Zapatos Deportivos",
        precio: 89.99,
        categoria: "deportes",
        descripcion: "Zapatos para running ultraligeros",
        imagen: "https://via.placeholder.com/300x200?text=Zapatos+Deportivos"
    },
    {
        id: 6,
        nombre: "Camisa Casual",
        precio: 39.99,
        categoria: "moda",
        descripcion: "Camisa de algodón 100%",
        imagen: "https://via.placeholder.com/300x200?text=Camisa+Casual"
    }
];

// Carrito de compras
let carrito = [];

// Elementos del DOM
const productsGrid = document.getElementById('products-grid');
const addProductModal = document.getElementById('add-product-modal');
const addProductForm = document.getElementById('add-product-form');
const addProductBtn = document.getElementById('add-product-btn');
const closeBtn = document.querySelector('.close-btn');

// Función para mostrar productos
function mostrarProductos() {
    productsGrid.innerHTML = '';
    
    productos.forEach(producto => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${producto.imagen}" alt="${producto.nombre}" onerror="this.src='https://via.placeholder.com/300x200?text=Imagen+No+Disponible'">
            </div>
            <div class="product-info">
                <h3 class="product-title">${producto.nombre}</h3>
                <p class="product-description">${producto.descripcion}</p>
                <span class="product-category">${producto.categoria}</span>
                <div class="product-price">$${producto.precio.toFixed(2)}</div>
                <button class="add-to-cart" onclick="agregarAlCarrito(${producto.id})">
                    Agregar al Carrito
                </button>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });
}

// Función para agregar producto al carrito
function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    if (producto) {
        carrito.push(producto);
        alert(`${producto.nombre} agregado al carrito!`);
        actualizarContadorCarrito();
    }
}

// Función para actualizar contador del carrito
function actualizarContadorCarrito() {
    const cartBtn = document.querySelector('.cart-btn');
    cartBtn.textContent = `🛒 Carrito (${carrito.length})`;
}

// Función para mostrar/ocultar modal
function toggleModal() {
    addProductModal.style.display = addProductModal.style.display === 'block' ? 'none' : 'block';
}

// Función para agregar nuevo producto
function agregarProducto(event) {
    event.preventDefault();
    
    const nuevoProducto = {
        id: productos.length + 1,
        nombre: document.getElementById('product-name').value,
        precio: parseFloat(document.getElementById('product-price').value),
        categoria: document.getElementById('product-category').value,
        descripcion: document.getElementById('product-description').value,
        imagen: document.getElementById('product-image').value || 'https://via.placeholder.com/300x200?text=Nuevo+Producto'
    };
    
    productos.push(nuevoProducto);
    mostrarProductos();
    addProductForm.reset();
    toggleModal();
    alert('Producto agregado exitosamente!');
}

// Event Listeners
addProductBtn.addEventListener('click', toggleModal);
closeBtn.addEventListener('click', toggleModal);
addProductForm.addEventListener('submit', agregarProducto);

// Cerrar modal al hacer click fuera
window.addEventListener('click', (event) => {
    if (event.target === addProductModal) {
        toggleModal();
    }
});

// Inicializar la página
document.addEventListener('DOMContentLoaded', () => {
    mostrarProductos();
    actualizarContadorCarrito();
});

// Función para filtrar productos por categoría
function filtrarProductos(categoria) {
    const productosFiltrados = categoria ? 
        productos.filter(p => p.categoria === categoria) : 
        productos;
    
    productsGrid.innerHTML = '';
    productosFiltrados.forEach(producto => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${producto.imagen}" alt="${producto.nombre}">
            </div>
            <div class="product-info">
                <h3 class="product-title">${producto.nombre}</h3>
                <p class="product-description">${producto.descripcion}</p>
                <span class="product-category">${producto.categoria}</span>
                <div class="product-price">$${producto.precio.toFixed(2)}</div>
                <button class="add-to-cart" onclick="agregarAlCarrito(${producto.id})">
                    Agregar al Carrito
                </button>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });
}

// Agregar event listeners a las categorías del dropdown
document.querySelectorAll('.dropdown-menu a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const categoria = e.target.getAttribute('href').substring(1);
        filtrarProductos(categoria);
    });
});
