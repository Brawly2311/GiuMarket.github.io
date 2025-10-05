// Datos de productos
const productos = [
    {
        nombre: "Laptop Gaming Pro",
        precio: 1299.99,
        categoria: "electronicos",
        imagen: "https://via.placeholder.com/400x300/4A90E2/FFFFFF?text=Laptop+Gaming",
        rating: "★★★★☆",
        descripcion: "Laptop para gaming con RTX 4060, 16GB RAM, 1TB SSD"
    },
    {
        nombre: "Smartphone Android 5G", 
        precio: 499.99,
        categoria: "electronicos",
        imagen: "https://via.placeholder.com/400x300/50E3C2/FFFFFF?text=Smartphone+5G",
        rating: "★★★★★",
        descripcion: "Teléfono 5G con 128GB, cámara triple 108MP"
    },
    {
        nombre: "Refrigerador Smart", 
        precio: 899.99, 
        categoria: "electrodomesticos",
        imagen: "https://via.placeholder.com/400x300/9013FE/FFFFFF?text=Refrigerador+Smart",
        rating: "★★★★☆",
        descripcion: "Refrigerador side-by-side con pantalla táctil"
    },
    {
        nombre: "Sofá Moderno Comfort",
        precio: 599.99,
        categoria: "hogar", 
        imagen: "https://via.placeholder.com/400x300/F5A623/FFFFFF?text=Sofá+Moderno",
        rating: "★★★★☆",
        descripcion: "Sofá de 3 plazas con tejido premium antimanchas"
    },
    {
        nombre: "Zapatos Running Pro",
        precio: 89.99,
        categoria: "deportes",
        imagen: "https://via.placeholder.com/400x300/B8E986/FFFFFF?text=Zapatos+Running",
        rating: "★★★★★",
        descripcion: "Zapatos para running con tecnología de amortiguación"
    },
    {
        nombre: "Tablet 10\" 4K",
        precio: 329.99,
        categoria: "electronicos",
        imagen: "https://via.placeholder.com/400x300/7ED321/FFFFFF?text=Tablet+10+4K",
        rating: "★★★★☆",
        descripcion: "Tablet con pantalla 4K, 64GB, stylus incluido"
    },
    {
        nombre: "Televisor 55\" 4K UHD",
        precio: 699.99,
        categoria: "electronicos",
        imagen: "https://via.placeholder.com/400x300/FF6B6B/FFFFFF?text=TV+55+4K+UHD",
        rating: "★★★★★",
        descripcion: "Smart TV 55\" 4K UHD con Android TV"
    },
    {
        nombre: "Lavadora Automática 18kg",
        precio: 459.99,
        categoria: "electrodomesticos",
        imagen: "https://via.placeholder.com/400x300/4A90E2/FFFFFF?text=Lavadora+18kg",
        rating: "★★★★☆",
        descripcion: "Lavadora carga frontal con tecnología inverter"
    },
    {
        nombre: "Cama King Size Memory",
        precio: 799.99,
        categoria: "hogar",
        imagen: "https://via.placeholder.com/400x300/50E3C2/FFFFFF?text=Cama+King+Memory",
        rating: "★★★★☆",
        descripcion: "Cama king size con memory foam y base ajustable"
    }
];

// Carrito y estado
let carrito = [];
let productosFiltrados = [...productos];
let carritoAbierto = false;

// Función para mostrar productos
function mostrarProductos() {
    const container = document.getElementById('products-container');
    
    if (productosFiltrados.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
                <h3 style="color: #666; margin-bottom: 20px;">No se encontraron productos</h3>
                <button onclick="filtrarProductos('todos')" class="add-to-cart" style="max-width: 200px; margin: 0 auto;">
                    Ver todos los productos
                </button>
            </div>
        `;
        return;
    }
    
    const productosHTML = productosFiltrados.map((producto, index) => `
        <div class="product" style="animation-delay: ${index * 0.1}s">
            <div class="product-image">
                <img src="${producto.imagen}" alt="${producto.nombre}" 
                     onerror="this.src='https://via.placeholder.com/400x300/CCCCCC/666666?text=Imagen+No+Disponible'">
            </div>
            <div class="product-info">
                <div class="product-title">${producto.nombre}</div>
                <div class="product-price">$${producto.precio.toFixed(2)}</div>
                <div class="product-rating">${producto.rating}</div>
                <div style="color: #666; font-size: 0.9rem; margin-bottom: 15px; line-height: 1.4;">
                    ${producto.descripcion}
                </div>
                <button class="add-to-cart" onclick="agregarAlCarrito('${producto.nombre}', ${producto.precio})">
                    🛒 Añadir al Carrito
                </button>
            </div>
        </div>
    `).join('');
    
    container.innerHTML = productosHTML;
}

// Función para agregar al carrito
function agregarAlCarrito(nombre, precio) {
    const producto = productos.find(p => p.nombre === nombre);
    carrito.push({ 
        nombre, 
        precio,
        imagen: producto?.imagen || 'https://via.placeholder.com/100x100/CCCCCC/666666?text=Prod'
    });
    
    actualizarCarrito();
    mostrarMensaje(`✅ "${nombre}" agregado al carrito!`);
}

// Función para actualizar carrito
function actualizarCarrito() {
    const cartBtn = document.getElementById('cart-button');
    const total = carrito.reduce((sum, item) => sum + item.precio, 0);
    const cantidad = carrito.length;
    
    cartBtn.textContent = `🛒 Carrito (${cantidad}) - $${total.toFixed(2)}`;
    cartBtn.title = `${cantidad} productos en el carrito`;
}

// Función para mostrar mensajes
function mostrarMensaje(mensaje) {
    // Remover mensaje anterior si existe
    const mensajeAnterior = document.querySelector('.success-message');
    if (mensajeAnterior) {
        mensajeAnterior.remove();
    }
    
    // Crear nuevo mensaje
    const mensajeDiv = document.createElement('div');
    mensajeDiv.className = 'success-message';
    mensajeDiv.textContent = mensaje;
    document.body.appendChild(mensajeDiv);
    
    // Remover después de 3 segundos
    setTimeout(() => {
        mensajeDiv.remove();
    }, 3000);
}

// Función para filtrar productos
function filtrarProductos(categoria) {
    document.querySelector('.search-bar input').value = ''; // Limpiar búsqueda
    
    if (categoria === 'todos') {
        productosFiltrados = [...productos];
    } else {
        productosFiltrados = productos.filter(producto => producto.categoria === categoria);
    }
    
    mostrarProductos();
    mostrarMensaje(`📂 Mostrando ${productosFiltrados.length} productos`);
}

// Función para buscar productos
function buscarProductos() {
    const searchTerm = document.querySelector('.search-bar input').value.toLowerCase().trim();
    
    if (searchTerm) {
        productosFiltrados = productos.filter(p => 
            p.nombre.toLowerCase().includes(searchTerm) || 
            p.categoria.toLowerCase().includes(searchTerm) ||
            p.descripcion.toLowerCase().includes(searchTerm)
        );
        
        if (productosFiltrados.length > 0) {
            mostrarProductos();
            mostrarMensaje(`🔍 ${productosFiltrados.length} resultados para "${searchTerm}"`);
        } else {
            mostrarProductos();
            mostrarMensaje("❌ No se encontraron productos");
        }
    } else {
        productosFiltrados = [...productos];
        mostrarProductos();
    }
}

// Función para agregar nuevo producto
function agregarNuevoProducto() {
    const nombre = prompt("📝 Nombre del nuevo producto:");
    if (!nombre) return;
    
    const precio = prompt("💰 Precio del producto:");
    if (!precio || isNaN(precio) || precio <= 0) {
        mostrarMensaje("❌ Ingresa un precio válido");
        return;
    }
    
    const categoria = prompt("📂 Categoría (electronicos, electrodomesticos, hogar, deportes, moda):");
    if (!categoria) return;
    
    const descripcion = prompt("📄 Descripción del producto:") || "Producto premium de alta calidad";
    
    // Validar categoría
    const categoriasValidas = ['electronicos', 'electrodomesticos', 'hogar', 'deportes', 'moda'];
    if (!categoriasValidas.includes(categoria.toLowerCase())) {
        mostrarMensaje("❌ Categoría no válida");
        return;
    }
    
    // Agregar producto
    const nuevoProducto = {
        nombre: nombre,
        precio: parseFloat(precio),
        categoria: categoria.toLowerCase(),
        descripcion: descripcion,
        imagen: `https://via.placeholder.com/400x300/FF6B6B/FFFFFF?text=${encodeURIComponent(nombre)}`,
        rating: "★★★★☆"
    };
    
    productos.push(nuevoProducto);
    productosFiltrados = [...productos];
    mostrarProductos();
    mostrarMensaje("🎉 Producto agregado exitosamente!");
}

// Función para vaciar carrito
function vaciarCarrito() {
    if (carrito.length === 0) {
        mostrarMensaje("🛒 El carrito ya está vacío");
        return;
    }
    
    if (confirm(`¿Estás seguro de que quieres vaciar el carrito? Se eliminarán ${carrito.length} productos.`)) {
        carrito = [];
        actualizarCarrito();
        mostrarMensaje("🗑️ Carrito vaciado");
    }
}

// Inicializar página
document.addEventListener('DOMContentLoaded', function() {
    mostrarProductos();
    actualizarCarrito();
    
    // Botón para agregar productos
    document.getElementById('add-product-btn').addEventListener('click', agregarNuevoProducto);
    
    // Botón de búsqueda
    document.querySelector('.search-bar button').addEventListener('click', buscarProductos);
    
    // Buscar con Enter
    document.querySelector('.search-bar input').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            buscarProductos();
        }
    });
    
    // Doble click en carrito para vaciar
    document.getElementById('cart-button').addEventListener('dblclick', vaciarCarrito);
    
    console.log("🛒 GiuMarket cargado correctamente!");
    console.log("📦 Productos disponibles:", productos.length);
    console.log("🎨 Carrito inicializado");
});

// Exportar funciones para uso global
window.filtrarProductos = filtrarProductos;
window.agregarAlCarrito = agregarAlCarrito;
window.buscarProductos = buscarProductos;
window.agregarNuevoProducto = agregarNuevoProducto;
window.vaciarCarrito = vaciarCarrito;
