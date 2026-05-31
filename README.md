# ShopHub - E-Commerce Store Demo

A fully functional mini online shop with product listings, shopping cart, and checkout simulation.

## Features

✨ **Product Catalog** - Browse 8 different products with descriptions
✨ **Shopping Cart** - Add/remove items, adjust quantities
✨ **Cart Persistence** - Cart saved to localStorage
✨ **Order Summary** - Automatic calculation of subtotal, shipping, tax, and total
✨ **Checkout Form** - Full checkout experience with validation
✨ **Order Confirmation** - Success modal with order details
✨ **Responsive Design** - Works perfectly on desktop and mobile
✨ **Modern UI** - Beautiful gradients and smooth animations

## How to Use

1. Open `index.html` in your web browser
2. Click **"Start Shopping"** to browse products
3. Enter quantity and click **"Add to Cart"** for items you want
4. Click **"Cart"** to view your shopping cart
5. Adjust quantities or remove items as needed
6. Click **"Proceed to Checkout"** to complete your order
7. Fill in your information and payment details
8. Click **"Complete Order"** to finish

## Features Breakdown

### Home Page
- Welcome hero section with CTA button

### Shop Page
- Grid layout of 8 sample products
- Each product shows: emoji icon, name, description, price
- Add to cart with custom quantity selection

### Cart Page
- List of all items in cart
- Quantity adjustment buttons
- Remove item buttons
- Order summary sidebar with:
  - Subtotal calculation
  - Shipping fee ($10)
  - Tax calculation (10%)
  - Total price

### Checkout
- Modal form with fields for:
  - Personal information (name, email)
  - Shipping address (address, city, zip)
  - Payment details (card number, expiry, CVV)
- Form validation
- Simulated payment processing

### Order Confirmation
- Success modal with order details
- Customer name and total price
- Confirmation email notification

## Technical Stack

- **HTML5** - Semantic structure
- **CSS3** - Gradient backgrounds, animations, responsive grid
- **JavaScript (Vanilla)** - Cart management, checkout logic
- **Local Storage** - Cart persistence
- **Responsive Design** - Mobile-first approach

## Product Data

1. Wireless Headphones - $79.99
2. Smartphone - $599.99
3. Laptop - $1099.99
4. Smart Watch - $299.99
5. Tablet - $449.99
6. Camera - $899.99
7. Gaming Console - $499.99
8. Portable Speaker - $129.99

## Future Enhancements

- Product search and filtering
- Product categories
- User account system
- Order history
- Wishlist feature
- Real payment gateway integration
- Product reviews and ratings
- Multiple currency support
- Promo code system

## Files

- `index.html` - Main HTML structure
- `style.css` - Complete styling and responsive layout
- `script.js` - All functionality and business logic
- `README.md` - Documentation