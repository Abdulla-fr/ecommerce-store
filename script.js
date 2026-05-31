// Products Database with Indian Rupee Prices
// Exchange Rate: 1 USD ≈ ₹95.01
const products = [
    { id: 1, name: 'Wireless Headphones', price: 7599, emoji: '🎧', description: 'High-quality sound with noise cancellation' },
    { id: 2, name: 'Smartphone', price: 57049, emoji: '📱', description: 'Latest model with advanced features' },
    { id: 3, name: 'Laptop', price: 104539, emoji: '💻', description: 'Powerful performance for work and gaming' },
    { id: 4, name: 'Smart Watch', price: 28499, emoji: '⌚', description: 'Track fitness and stay connected' },
    { id: 5, name: 'Tablet', price: 42749, emoji: '📱', description: 'Perfect for entertainment and productivity' },
    { id: 6, name: 'Camera', price: 85539, emoji: '📷', description: 'Capture stunning photos and videos' },
    { id: 7, name: 'Gaming Console', price: 47499, emoji: '🎮', description: 'Next-gen gaming experience' },
    { id: 8, name: 'Portable Speaker', price: 12349, emoji: '🔊', description: 'Powerful sound on the go' }
];

let cart = [];

// Initialize
window.addEventListener('DOMContentLoaded', () => {
    loadProducts();
    loadCart();
});

// Load Products
function loadProducts() {
    const productsList = document.getElementById('productsList');
    productsList.innerHTML = '';
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">${product.emoji}</div>
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="product-description">${product.description}</div>
                <div class="product-price">₹${product.price.toLocaleString('en-IN')}</div>
                <div class="product-actions">
                    <input type="number" class="quantity-input" value="1" min="1" max="10" id="qty-${product.id}">
                    <button class="btn-secondary" onclick="addToCart(${product.id})">Add to Cart</button>
                </div>
            </div>
        `;
        productsList.appendChild(productCard);
    });
}

// Add to Cart
function addToCart(productId) {
    const quantity = parseInt(document.getElementById(`qty-${productId}`).value) || 1;
    const product = products.find(p => p.id === productId);
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            ...product,
            quantity: quantity
        });
    }
    
    saveCart();
    updateCartCount();
    alert(`${product.name} added to cart!`);
}

// Update Cart Count
function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cartCount').textContent = count;
}

// Remove from Cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartCount();
    displayCart();
}

// Update Quantity
function updateQuantity(productId, newQuantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        if (newQuantity <= 0) {
            removeFromCart(productId);
        } else {
            item.quantity = newQuantity;
            saveCart();
            updateCartCount();
            displayCart();
        }
    }
}

// Display Cart
function displayCart() {
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="empty-cart"><p>Your cart is empty</p><button class="btn-primary" onclick="showShop()">Continue Shopping</button></div>';
        document.getElementById('checkoutBtn').disabled = true;
    } else {
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <div class="cart-item-image">${item.emoji}</div>
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">₹${item.price.toLocaleString('en-IN')}</div>
                </div>
                <div class="cart-item-quantity">
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">−</button>
                    <span>${item.quantity}</span>
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                </div>
                <button class="btn-danger" onclick="removeFromCart(${item.id})">Remove</button>
            `;
            cartItems.appendChild(cartItem);
        });
        document.getElementById('checkoutBtn').disabled = false;
    }
    
    updateCartSummary();
}

// Update Cart Summary
function updateCartSummary() {
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const shipping = subtotal > 0 ? 500 : 0; // ₹500 shipping
    const tax = subtotal * 0.18; // 18% GST
    const total = subtotal + shipping + tax;
    
    document.getElementById('subtotal').textContent = `₹${subtotal.toLocaleString('en-IN')}`;
    document.getElementById('shipping').textContent = `₹${shipping.toLocaleString('en-IN')}`;
    document.getElementById('tax').textContent = `₹${tax.toLocaleString('en-IN', { maximumFractionDigits: 2 })}`;
    document.getElementById('total').textContent = `₹${total.toLocaleString('en-IN', { maximumFractionDigits: 2 })}`;
}

// Navigation
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Remove active class from all nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    // Show selected section
    document.getElementById(sectionId).classList.add('active');
    
    // Add active class to clicked nav link
    event.target.classList.add('active');
    
    if (sectionId === 'cart') {
        displayCart();
    }
}

function showHome() {
    showSection('home');
}

function showShop() {
    showSection('shop');
}

function showCart() {
    showSection('cart');
}

// Checkout
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    document.getElementById('checkoutModal').classList.add('active');
}

function closeCheckout() {
    document.getElementById('checkoutModal').classList.remove('active');
}

// Complete Order
function completeOrder(event) {
    event.preventDefault();
    
    // Validate form
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const zip = document.getElementById('zip').value;
    const cardNumber = document.getElementById('cardNumber').value;
    const expiry = document.getElementById('expiry').value;
    const cvv = document.getElementById('cvv').value;
    
    if (!fullName || !email || !address || !city || !zip || !cardNumber || !expiry || !cvv) {
        alert('Please fill in all fields');
        return;
    }
    
    // Simulate payment processing
    closeCheckout();
    document.getElementById('checkoutModal').classList.remove('active');
    
    const total = document.getElementById('total').textContent;
    const orderMessage = `Thank you for your order, ${fullName}!<br><br>Order Total: ${total}<br>A confirmation email has been sent to ${email}`;
    document.getElementById('orderMessage').innerHTML = orderMessage;
    document.getElementById('successModal').classList.add('active');
    
    // Clear cart and form
    setTimeout(() => {
        cart = [];
        saveCart();
        updateCartCount();
        clearCheckoutForm();
    }, 1000);
}

function closeSuccess() {
    document.getElementById('successModal').classList.remove('active');
    showHome();
}

function clearCheckoutForm() {
    document.getElementById('fullName').value = '';
    document.getElementById('email').value = '';
    document.getElementById('address').value = '';
    document.getElementById('city').value = '';
    document.getElementById('zip').value = '';
    document.getElementById('cardNumber').value = '';
    document.getElementById('expiry').value = '';
    document.getElementById('cvv').value = '';
}

// Local Storage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartCount();
    }
}

// Close modal on outside click
window.addEventListener('click', (event) => {
    const checkoutModal = document.getElementById('checkoutModal');
    const successModal = document.getElementById('successModal');
    
    if (event.target === checkoutModal) {
        checkoutModal.classList.remove('active');
    }
    if (event.target === successModal) {
        successModal.classList.remove('active');
    }
});