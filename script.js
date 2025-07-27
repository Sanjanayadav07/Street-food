// Global state management
let currentUserType = 'vendor';
let currentSection = 'userSelection';

// Sample data for demonstration
let suppliers = [
    {
        id: 1,
        name: "Fresh Veggie Hub",
        rating: 4.8,
        location: "Sector 15, Noida",
        products: [
            { name: "Onions", price: 25, category: "vegetables" },
            { name: "Tomatoes", price: 35, category: "vegetables" },
            { name: "Potatoes", price: 20, category: "vegetables" }
        ]
    },
    {
        id: 2,
        name: "Spice Master",
        rating: 4.6,
        location: "Connaught Place, Delhi",
        products: [
            { name: "Turmeric Powder", price: 180, category: "spices" },
            { name: "Red Chili Powder", price: 220, category: "spices" },
            { name: "Garam Masala", price: 350, category: "spices" }
        ]
    },
    {
        id: 3,
        name: "Oil & More",
        rating: 4.7,
        location: "Karol Bagh, Delhi",
        products: [
            { name: "Sunflower Oil", price: 140, category: "oil" },
            { name: "Mustard Oil", price: 160, category: "oil" },
            { name: "Refined Oil", price: 120, category: "oil" }
        ]
    },
    {
        id: 4,
        name: "Grain Depot",
        rating: 4.5,
        location: "Lajpat Nagar, Delhi",
        products: [
            { name: "Wheat Flour", price: 45, category: "flour" },
            { name: "Rice Flour", price: 55, category: "flour" },
            { name: "Besan", price: 80, category: "flour" }
        ]
    }
];

// Sample vendor data for suppliers to contact
let vendors = [
    {
        id: 1,
        name: "Raj's Chaat Corner",
        rating: 4.9,
        location: "Chandni Chowk, Delhi",
        businessType: "Street Food Stall",
        requirements: [
            { name: "Onions", quantity: "20kg/week", category: "vegetables" },
            { name: "Potatoes", quantity: "15kg/week", category: "vegetables" },
            { name: "Cooking Oil", quantity: "5L/week", category: "oil" }
        ]
    },
    {
        id: 2,
        name: "Delhi Dosa Express",
        rating: 4.7,
        location: "Karol Bagh, Delhi",
        businessType: "Food Cart",
        requirements: [
            { name: "Rice Flour", quantity: "25kg/month", category: "flour" },
            { name: "Coconut Oil", quantity: "3L/week", category: "oil" },
            { name: "Turmeric Powder", quantity: "2kg/month", category: "spices" }
        ]
    },
    {
        id: 3,
        name: "Spicy Samosa Hub",
        rating: 4.6,
        location: "Lajpat Nagar, Delhi",
        businessType: "Food Stall",
        requirements: [
            { name: "Wheat Flour", quantity: "30kg/week", category: "flour" },
            { name: "Mustard Oil", quantity: "4L/week", category: "oil" },
            { name: "Red Chili Powder", quantity: "1kg/week", category: "spices" }
        ]
    },
    {
        id: 4,
        name: "Mumbai Pav Bhaji",
        rating: 4.8,
        location: "Connaught Place, Delhi",
        businessType: "Restaurant",
        requirements: [
            { name: "Tomatoes", quantity: "40kg/week", category: "vegetables" },
            { name: "Butter", quantity: "10kg/week", category: "dairy" },
            { name: "Garam Masala", quantity: "2kg/month", category: "spices" }
        ]
    },
    {
        id: 5,
        name: "Chole Bhature Corner",
        rating: 4.5,
        location: "Paharganj, Delhi",
        businessType: "Street Food Stall",
        requirements: [
            { name: "Chickpeas", quantity: "30kg/week", category: "flour" },
            { name: "Refined Oil", quantity: "8L/week", category: "oil" },
            { name: "Coriander Powder", quantity: "1.5kg/month", category: "spices" }
        ]
    },
    {
        id: 6,
        name: "Tandoori Nights",
        rating: 4.7,
        location: "Khan Market, Delhi",
        businessType: "Restaurant",
        requirements: [
            { name: "Chicken", quantity: "50kg/week", category: "meat" },
            { name: "Yogurt", quantity: "15kg/week", category: "dairy" },
            { name: "Tandoori Masala", quantity: "3kg/month", category: "spices" }
        ]
    },
    {
        id: 7,
        name: "South Indian Express",
        rating: 4.6,
        location: "Laxmi Nagar, Delhi",
        businessType: "Food Cart",
        requirements: [
            { name: "Urad Dal", quantity: "20kg/month", category: "flour" },
            { name: "Coconut", quantity: "25kg/week", category: "vegetables" },
            { name: "Curry Leaves", quantity: "2kg/week", category: "spices" }
        ]
    },
    {
        id: 8,
        name: "Biryani Palace",
        rating: 4.9,
        location: "Old Delhi, Delhi",
        businessType: "Restaurant",
        requirements: [
            { name: "Basmati Rice", quantity: "100kg/week", category: "flour" },
            { name: "Mutton", quantity: "60kg/week", category: "meat" },
            { name: "Saffron", quantity: "500g/month", category: "spices" }
        ]
    }
];

let groupOrders = [
    {
        id: 1,
        product: "Onions",
        targetQuantity: 100,
        currentQuantity: 65,
        maxVendors: 8,
        currentVendors: 5,
        pricePerKg: 22,
        deadline: "2025-07-28",
        organizer: "Raj's Chaat Corner",
        description: "Bulk order for fresh onions, Grade A quality required"
    },
    {
        id: 2,
        product: "Sunflower Oil",
        targetQuantity: 50,
        currentQuantity: 30,
        maxVendors: 5,
        currentVendors: 3,
        pricePerKg: 135,
        deadline: "2025-07-29",
        organizer: "Street Food Express",
        description: "Premium sunflower oil for frying, sealed packaging required"
    },
    {
        id: 3,
        product: "Wheat Flour",
        targetQuantity: 200,
        currentQuantity: 150,
        maxVendors: 10,
        currentVendors: 7,
        pricePerKg: 42,
        deadline: "2025-07-30",
        organizer: "Dosa Point",
        description: "High-quality wheat flour for making dosa and other items"
    }
];

let myGroupOrders = [
    {
        id: 1,
        product: "Onions",
        myQuantity: 15,
        status: "active",
        totalSavings: 45
    },
    {
        id: 3,
        product: "Wheat Flour",
        myQuantity: 25,
        status: "active",
        totalSavings: 75
    }
];

let recentOrders = [
    {
        id: 1,
        product: "Tomatoes",
        quantity: 10,
        supplier: "Fresh Veggie Hub",
        status: "delivered",
        date: "2025-07-25",
        amount: 350
    },
    {
        id: 2,
        product: "Turmeric Powder",
        quantity: 2,
        supplier: "Spice Master",
        status: "confirmed",
        date: "2025-07-26",
        amount: 360
    },
    {
        id: 3,
        product: "Sunflower Oil",
        quantity: 5,
        supplier: "Oil & More",
        status: "pending",
        date: "2025-07-27",
        amount: 700
    }
];

let supplierProducts = [
    // Vegetables
    { id: 1, name: "Onions", category: "vegetables", price: 25, minOrder: 5, stock: 500 },
    { id: 2, name: "Tomatoes", category: "vegetables", price: 35, minOrder: 3, stock: 300 },
    { id: 3, name: "Potatoes", category: "vegetables", price: 20, minOrder: 10, stock: 800 },
    { id: 4, name: "Green Chilies", category: "vegetables", price: 80, minOrder: 2, stock: 150 },
    { id: 5, name: "Ginger", category: "vegetables", price: 120, minOrder: 1, stock: 75 },
    { id: 6, name: "Garlic", category: "vegetables", price: 200, minOrder: 2, stock: 100 },
    { id: 7, name: "Coriander Leaves", category: "vegetables", price: 40, minOrder: 1, stock: 50 },
    { id: 8, name: "Mint Leaves", category: "vegetables", price: 60, minOrder: 1, stock: 30 },
    
    // Spices & Seasonings
    { id: 9, name: "Turmeric Powder", category: "spices", price: 180, minOrder: 1, stock: 25 },
    { id: 10, name: "Red Chili Powder", category: "spices", price: 220, minOrder: 1, stock: 30 },
    { id: 11, name: "Cumin Powder", category: "spices", price: 350, minOrder: 1, stock: 20 },
    { id: 12, name: "Coriander Powder", category: "spices", price: 280, minOrder: 1, stock: 25 },
    { id: 13, name: "Garam Masala", category: "spices", price: 450, minOrder: 1, stock: 15 },
    { id: 14, name: "Chat Masala", category: "spices", price: 320, minOrder: 1, stock: 18 },
    { id: 15, name: "Black Salt", category: "spices", price: 80, minOrder: 2, stock: 40 },
    
    // Oils & Ghee
    { id: 16, name: "Sunflower Oil", category: "oil", price: 140, minOrder: 5, stock: 200 },
    { id: 17, name: "Mustard Oil", category: "oil", price: 160, minOrder: 3, stock: 120 },
    { id: 18, name: "Pure Ghee", category: "oil", price: 520, minOrder: 2, stock: 50 },
    
    // Flour & Grains
    { id: 19, name: "Wheat Flour", category: "flour", price: 45, minOrder: 10, stock: 500 },
    { id: 20, name: "All Purpose Flour", category: "flour", price: 50, minOrder: 5, stock: 300 },
    { id: 21, name: "Besan (Gram Flour)", category: "flour", price: 80, minOrder: 3, stock: 150 },
    { id: 22, name: "Rice Flour", category: "flour", price: 55, minOrder: 3, stock: 100 },
    { id: 23, name: "Semolina (Suji)", category: "flour", price: 65, minOrder: 3, stock: 120 },
    
    // Dairy & Proteins
    { id: 24, name: "Paneer", category: "dairy", price: 320, minOrder: 2, stock: 25 },
    { id: 25, name: "Fresh Milk", category: "dairy", price: 60, minOrder: 5, stock: 100 },
    { id: 26, name: "Yogurt", category: "dairy", price: 80, minOrder: 2, stock: 60 },
    { id: 27, name: "Eggs", category: "protein", price: 6, minOrder: 30, stock: 500 },
    
    // Specialty Items
    { id: 28, name: "Tamarind Paste", category: "condiments", price: 120, minOrder: 1, stock: 35 },
    { id: 29, name: "Jaggery", category: "sweeteners", price: 90, minOrder: 2, stock: 80 },
    { id: 30, name: "Coconut (Fresh)", category: "fruits", price: 25, minOrder: 10, stock: 200 }
];

let supplierOrders = [
    // Recent Orders - Mixed Status
    { id: 1, vendor: "Raj's Chaat Corner", product: "Onions", quantity: 15, status: "pending", date: "2025-01-27", orderValue: 375, vendorPhone: "+91 98765 43210" },
    { id: 2, vendor: "Street Food Express", product: "Tomatoes", quantity: 8, status: "confirmed", date: "2025-01-26", orderValue: 280, vendorPhone: "+91 87654 32109" },
    { id: 3, vendor: "Dosa Point", product: "Potatoes", quantity: 20, status: "delivered", date: "2025-01-25", orderValue: 400, vendorPhone: "+91 76543 21098" },
    { id: 4, vendor: "Mumbai Vada Pav", product: "Green Chilies", quantity: 3, status: "pending", date: "2025-01-27", orderValue: 240, vendorPhone: "+91 65432 10987" },
    { id: 5, vendor: "Kolkata Rolls", product: "Wheat Flour", quantity: 25, status: "confirmed", date: "2025-01-26", orderValue: 1125, vendorPhone: "+91 54321 09876" },
    
    // Spice Orders
    { id: 6, vendor: "Spice Corner Stall", product: "Turmeric Powder", quantity: 2, status: "delivered", date: "2025-01-24", orderValue: 360, vendorPhone: "+91 43210 98765" },
    { id: 7, vendor: "Raj's Chaat Corner", product: "Chat Masala", quantity: 1, status: "pending", date: "2025-01-27", orderValue: 320, vendorPhone: "+91 98765 43210" },
    { id: 8, vendor: "Delhi Paranthas", product: "Red Chili Powder", quantity: 2, status: "confirmed", date: "2025-01-25", orderValue: 440, vendorPhone: "+91 32109 87654" },
    
    // Oil & Ghee Orders
    { id: 9, vendor: "Samosa Junction", product: "Sunflower Oil", quantity: 10, status: "delivered", date: "2025-01-23", orderValue: 1400, vendorPhone: "+91 21098 76543" },
    { id: 10, vendor: "Punjabi Kulcha", product: "Pure Ghee", quantity: 3, status: "pending", date: "2025-01-27", orderValue: 1560, vendorPhone: "+91 10987 65432" },
    
    // Flour Orders
    { id: 11, vendor: "Dosa Point", product: "Rice Flour", quantity: 5, status: "confirmed", date: "2025-01-26", orderValue: 275, vendorPhone: "+91 76543 21098" },
    { id: 12, vendor: "Bhel Puri Stall", product: "Besan (Gram Flour)", quantity: 4, status: "delivered", date: "2025-01-24", orderValue: 320, vendorPhone: "+91 09876 54321" },
    
    // Dairy & Protein Orders
    { id: 13, vendor: "Paneer Tikka Express", product: "Paneer", quantity: 5, status: "pending", date: "2025-01-27", orderValue: 1600, vendorPhone: "+91 98765 43211" },
    { id: 14, vendor: "Lassi Corner", product: "Fresh Milk", quantity: 10, status: "confirmed", date: "2025-01-26", orderValue: 600, vendorPhone: "+91 87654 32110" },
    { id: 15, vendor: "Egg Roll Center", product: "Eggs", quantity: 50, status: "delivered", date: "2025-01-25", orderValue: 300, vendorPhone: "+91 76543 21099" },
    
    // Specialty Orders
    { id: 16, vendor: "South Indian Express", product: "Coconut (Fresh)", quantity: 15, status: "pending", date: "2025-01-27", orderValue: 375, vendorPhone: "+91 65432 10988" },
    { id: 17, vendor: "Sweet Treats Stall", product: "Jaggery", quantity: 5, status: "confirmed", date: "2025-01-26", orderValue: 450, vendorPhone: "+91 54321 09877" },
    { id: 18, vendor: "Tangy Chaat Hub", product: "Tamarind Paste", quantity: 2, status: "delivered", date: "2025-01-24", orderValue: 240, vendorPhone: "+91 43210 98766" },
    
    // Large Volume Orders
    { id: 19, vendor: "Food Truck Alliance", product: "Wheat Flour", quantity: 50, status: "pending", date: "2025-01-27", orderValue: 2250, vendorPhone: "+91 32109 87655" },
    { id: 20, vendor: "Street Food Festival", product: "Sunflower Oil", quantity: 20, status: "confirmed", date: "2025-01-26", orderValue: 2800, vendorPhone: "+91 21098 76544" }
];

// Product management functions
function editProduct(productId) {
    const product = supplierProducts.find(p => p.id === productId);
    if (!product) {
        showNotification('Product not found!', 'error');
        return;
    }
    
    // Create edit modal
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    `;
    
    const modal = document.createElement('div');
    modal.style.cssText = `
        background: white;
        padding: 2rem;
        border-radius: 15px;
        max-width: 500px;
        width: 90%;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    `;
    
    modal.innerHTML = `
        <h3 style="margin-bottom: 1.5rem; color: #2c3e50;">Edit Product: ${product.name}</h3>
        <form id="editProductForm">
            <div style="margin-bottom: 1rem;">
                <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Price per kg (₹)</label>
                <input type="number" id="editPrice" value="${product.price}" style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 8px;" required>
            </div>
            <div style="margin-bottom: 1rem;">
                <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Minimum Order (kg)</label>
                <input type="number" id="editMinOrder" value="${product.minOrder}" style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 8px;" required>
            </div>
            <div style="margin-bottom: 1.5rem;">
                <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Current Stock (kg)</label>
                <input type="number" id="editStock" value="${product.stock}" style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 8px;" required>
            </div>
            <div style="display: flex; gap: 1rem; justify-content: flex-end;">
                <button type="button" onclick="closeEditModal()" style="padding: 0.75rem 1.5rem; background: #6c757d; color: white; border: none; border-radius: 8px; cursor: pointer;">Cancel</button>
                <button type="submit" style="padding: 0.75rem 1.5rem; background: #059669; color: white; border: none; border-radius: 8px; cursor: pointer;">Update Product</button>
            </div>
        </form>
    `;
    
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
    
    // Store reference for closing
    window.currentEditModal = overlay;
    
    // Handle form submission
    document.getElementById('editProductForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const newPrice = parseFloat(document.getElementById('editPrice').value);
        const newMinOrder = parseInt(document.getElementById('editMinOrder').value);
        const newStock = parseInt(document.getElementById('editStock').value);
        
        // Update product
        product.price = newPrice;
        product.minOrder = newMinOrder;
        product.stock = newStock;
        
        // Refresh display
        loadSupplierProducts();
        updateSupplierStats();
        
        showNotification(`✅ ${product.name} updated successfully!`, 'success');
        closeEditModal();
    });
}

function closeEditModal() {
    if (window.currentEditModal) {
        document.body.removeChild(window.currentEditModal);
        window.currentEditModal = null;
    }
}

function restockProduct(productId) {
    const product = supplierProducts.find(p => p.id === productId);
    if (!product) {
        showNotification('Product not found!', 'error');
        return;
    }
    
    // Create restock modal
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    `;
    
    const modal = document.createElement('div');
    modal.style.cssText = `
        background: white;
        padding: 2rem;
        border-radius: 15px;
        max-width: 400px;
        width: 90%;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    `;
    
    modal.innerHTML = `
        <h3 style="margin-bottom: 1.5rem; color: #2c3e50;">Restock: ${product.name}</h3>
        <p style="margin-bottom: 1rem; color: #718096;">Current Stock: <strong>${product.stock}kg</strong></p>
        <form id="restockForm">
            <div style="margin-bottom: 1.5rem;">
                <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Add Stock (kg)</label>
                <input type="number" id="restockAmount" min="1" placeholder="Enter amount to add" style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 8px;" required>
            </div>
            <div style="display: flex; gap: 1rem; justify-content: flex-end;">
                <button type="button" onclick="closeRestockModal()" style="padding: 0.75rem 1.5rem; background: #6c757d; color: white; border: none; border-radius: 8px; cursor: pointer;">Cancel</button>
                <button type="submit" style="padding: 0.75rem 1.5rem; background: #059669; color: white; border: none; border-radius: 8px; cursor: pointer;">Add Stock</button>
            </div>
        </form>
    `;
    
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
    
    // Store reference for closing
    window.currentRestockModal = overlay;
    
    // Handle form submission
    document.getElementById('restockForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const restockAmount = parseInt(document.getElementById('restockAmount').value);
        const oldStock = product.stock;
        
        // Update stock
        product.stock += restockAmount;
        
        // Refresh display
        loadSupplierProducts();
        updateSupplierStats();
        
        showNotification(`📦 Added ${restockAmount}kg to ${product.name}. Stock: ${oldStock}kg → ${product.stock}kg`, 'success');
        closeRestockModal();
    });
}

function closeRestockModal() {
    if (window.currentRestockModal) {
        document.body.removeChild(window.currentRestockModal);
        window.currentRestockModal = null;
    }
}

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    // Hide all sections initially
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show user selection screen
    showSection('userSelection');
    populateProductSelects();
    
    // Ensure proper initial state
    currentUserType = 'vendor';
    currentSection = 'userSelection';
});

// Navigation functions
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show the selected section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
        currentSection = sectionId;
        
        // Control navigation visibility
        const navMenu = document.querySelector('.nav-menu');
        const userProfile = document.querySelector('.user-profile');
        
        if (sectionId === 'userSelection') {
            // Hide navigation on user selection screen
            if (navMenu) navMenu.style.display = 'none';
            if (userProfile) userProfile.style.display = 'none';
        } else {
            // Show navigation on other screens
            if (navMenu) navMenu.style.display = 'flex';
            if (userProfile) userProfile.style.display = 'flex';
        }
        
        // Update navigation active state
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Find and activate the corresponding nav button
        const navButtons = document.querySelectorAll('.nav-btn');
        navButtons.forEach(btn => {
            const btnText = btn.textContent.toLowerCase();
            if ((sectionId === 'dashboard' && btnText.includes('dashboard')) ||
                (sectionId === 'marketplace' && btnText.includes('marketplace')) ||
                (sectionId === 'groups' && btnText.includes('group')) ||
                (sectionId === 'suppliers' && btnText.includes('suppliers'))) {
                btn.classList.add('active');
            }
        });
        
        // Load section-specific data
        switch(sectionId) {
            case 'dashboard':
                loadDashboard();
                break;
            case 'marketplace':
                loadMarketplace();
                break;
            case 'groups':
                loadGroups();
                break;
            case 'suppliers':
                loadSupplierDashboard();
                break;
        }
    }
}

function selectUserType(type) {
    currentUserType = type;
    updateUserInterface(type);
    
    // Show navigation elements after user selection
    const navMenu = document.querySelector('.nav-menu');
    const userProfile = document.querySelector('.user-profile');
    if (navMenu) navMenu.style.display = 'flex';
    if (userProfile) userProfile.style.display = 'flex';
    
    // Show the appropriate dashboard
    if (type === 'vendor') {
        showSection('dashboard');
    } else {
        showSection('suppliers');
    }
}



function updateUserInterface(type) {
    const userText = document.getElementById('currentUser');
    
    // Update user text
    userText.textContent = type === 'vendor' ? 'Vendor' : 'Supplier';
    
    // Update navigation visibility based on user type
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => {
        const text = btn.textContent.toLowerCase();
        if (type === 'vendor') {
            // Show vendor-relevant buttons
            btn.style.display = text.includes('suppliers') && !text.includes('group') ? 'none' : 'block';
        } else {
            // Show supplier-relevant buttons
            btn.style.display = (text.includes('group') || text.includes('dashboard')) ? 'none' : 'block';
        }
    });
}

// Dashboard functions
function loadDashboard() {
    loadRecentOrders();
    updateDashboardStats();
}

function loadRecentOrders() {
    const ordersList = document.getElementById('recentOrdersList');
    ordersList.innerHTML = '';
    
    recentOrders.forEach(order => {
        const orderElement = document.createElement('div');
        orderElement.className = 'order-item';
        orderElement.innerHTML = `
            <div class="order-info">
                <h4>${order.product}</h4>
                <p>${order.quantity}kg from ${order.supplier}</p>
                <p class="text-muted">${formatDate(order.date)}</p>
            </div>
            <div>
                <div class="order-status status-${order.status}">${order.status.toUpperCase()}</div>
                <div class="text-muted mt-1">₹${order.amount}</div>
            </div>
        `;
        ordersList.appendChild(orderElement);
    });
}

function updateDashboardStats() {
    document.getElementById('activeOrders').textContent = recentOrders.filter(o => o.status !== 'delivered').length;
    document.getElementById('groupOrders').textContent = myGroupOrders.length;
    
    const totalSavings = myGroupOrders.reduce((sum, order) => sum + order.totalSavings, 0);
    document.getElementById('monthlySavings').textContent = `₹${totalSavings}`;
}

// Marketplace functions
function loadMarketplace() {
    // Update marketplace header based on user type
    const marketplaceHeader = document.querySelector('.marketplace-header h2');
    const addVendorButton = document.querySelector('button[onclick="openAddVendorModal()"]');
    
    if (currentUserType === 'supplier') {
        marketplaceHeader.textContent = 'Vendor Marketplace';
        if (addVendorButton) addVendorButton.style.display = 'block';
        displayVendors(vendors);
    } else {
        marketplaceHeader.textContent = 'Supplier Marketplace';
        if (addVendorButton) addVendorButton.style.display = 'none';
        displaySuppliers(suppliers);
    }
    setupMarketplaceFilters();
}

function displaySuppliers(suppliersToShow) {
    const supplierGrid = document.getElementById('supplierGrid');
    supplierGrid.innerHTML = '';
    
    suppliersToShow.forEach(supplier => {
        const supplierCard = document.createElement('div');
        supplierCard.className = 'supplier-card';
        supplierCard.innerHTML = `
            <div class="supplier-header">
                <div class="supplier-avatar">${supplier.name.charAt(0)}</div>
                <div class="supplier-info">
                    <h4>${supplier.name}</h4>
                    <div class="supplier-rating">
                        ${'★'.repeat(Math.floor(supplier.rating))} ${supplier.rating}
                    </div>
                    <p class="text-muted">${supplier.location}</p>
                </div>
            </div>
            <div class="product-list">
                ${supplier.products.map(product => `
                    <div class="product-item">
                        <span class="product-name">${product.name}</span>
                        <span class="product-price">₹${product.price}/kg</span>
                    </div>
                `).join('')}
            </div>
            <button class="btn-primary" onclick="contactSupplier(${supplier.id})">Contact Supplier</button>
        `;
        supplierGrid.appendChild(supplierCard);
    });
}

function displayVendors(vendorsToShow) {
    const supplierGrid = document.getElementById('supplierGrid');
    supplierGrid.innerHTML = '';
    
    vendorsToShow.forEach(vendor => {
        const vendorCard = document.createElement('div');
        vendorCard.className = 'supplier-card';
        vendorCard.innerHTML = `
            <div class="supplier-header">
                <div class="supplier-avatar">${vendor.name.charAt(0)}</div>
                <div class="supplier-info">
                    <h4>${vendor.name}</h4>
                    <div class="supplier-rating">
                        ${'★'.repeat(Math.floor(vendor.rating))} ${vendor.rating}
                    </div>
                    <p class="text-muted">${vendor.location}</p>
                    <p class="business-type">${vendor.businessType}</p>
                </div>
            </div>
            <div class="product-list">
                ${vendor.requirements.map(req => `
                    <div class="product-item">
                        <span class="product-name">${req.name}</span>
                        <span class="product-price">${req.quantity}</span>
                    </div>
                `).join('')}
            </div>
            <button class="btn-primary" onclick="contactVendor(${vendor.id})">Contact Vendor</button>
        `;
        supplierGrid.appendChild(vendorCard);
    });
}

function setupMarketplaceFilters() {
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');
    const locationFilter = document.getElementById('locationFilter');
    
    function filterMarketplace() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedCategory = categoryFilter.value;
        const selectedLocation = locationFilter.value;
        
        if (currentUserType === 'supplier') {
            // Filter vendors for suppliers
            let filteredVendors = vendors.filter(vendor => {
                const matchesSearch = vendor.name.toLowerCase().includes(searchTerm) ||
                                    vendor.requirements.some(r => r.name.toLowerCase().includes(searchTerm));
                
                const matchesCategory = !selectedCategory || 
                                      vendor.requirements.some(r => r.category === selectedCategory);
                
                const matchesLocation = !selectedLocation || 
                                      (selectedLocation === 'nearby' && vendor.location.includes('Delhi')) ||
                                      (selectedLocation === 'city' && vendor.location.includes('Delhi'));
                
                return matchesSearch && matchesCategory && matchesLocation;
            });
            
            displayVendors(filteredVendors);
        } else {
            // Filter suppliers for vendors
            let filteredSuppliers = suppliers.filter(supplier => {
                const matchesSearch = supplier.name.toLowerCase().includes(searchTerm) ||
                                    supplier.products.some(p => p.name.toLowerCase().includes(searchTerm));
                
                const matchesCategory = !selectedCategory || 
                                      supplier.products.some(p => p.category === selectedCategory);
                
                const matchesLocation = !selectedLocation || 
                                      (selectedLocation === 'nearby' && supplier.location.includes('Delhi')) ||
                                      (selectedLocation === 'city' && supplier.location.includes('Delhi'));
                
                return matchesSearch && matchesCategory && matchesLocation;
            });
            
            displaySuppliers(filteredSuppliers);
        }
    }
    
    searchInput.addEventListener('input', filterMarketplace);
    categoryFilter.addEventListener('change', filterMarketplace);
    locationFilter.addEventListener('change', filterMarketplace);
}

function contactSupplier(supplierId) {
    const supplier = suppliers.find(s => s.id === supplierId);
    if (!supplier) {
        showNotification('Supplier not found!', 'error');
        return;
    }
    
    showContactModal(supplier);
}

function contactVendor(vendorId) {
    const vendor = vendors.find(v => v.id === vendorId);
    if (!vendor) {
        showNotification('Vendor not found!', 'error');
        return;
    }
    
    showVendorContactModal(vendor);
}

function showContactModal(supplier) {
    // Create modal overlay
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 4000;
        backdrop-filter: blur(5px);
        animation: fadeIn 0.3s ease-out;
    `;
    
    // Create modal content
    const modal = document.createElement('div');
    modal.style.cssText = `
        background: white;
        border-radius: 20px;
        padding: 0;
        max-width: 500px;
        width: 90%;
        max-height: 80vh;
        overflow-y: auto;
        box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        animation: modalSlideIn 0.3s ease-out;
        position: relative;
    `;
    
    modal.innerHTML = `
        <div style="background: linear-gradient(135deg, #ff6600, #ff9900); color: white; padding: 2rem; border-radius: 20px 20px 0 0; position: relative;">
            <button onclick="closeContactModal()" style="position: absolute; top: 1rem; right: 1rem; background: rgba(255,255,255,0.2); border: none; color: white; width: 32px; height: 32px; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 18px;">
                ×
            </button>
            <div style="display: flex; align-items: center; gap: 1rem;">
                <div style="width: 60px; height: 60px; background: rgba(255,255,255,0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.5rem;">
                    🏪
                </div>
                <div>
                    <h2 style="margin: 0; font-size: 1.5rem; font-weight: 700;">${supplier.name}</h2>
                    <p style="margin: 0.5rem 0 0 0; opacity: 0.9; font-size: 1rem;">${supplier.location}</p>
                </div>
            </div>
        </div>
        
        <div style="padding: 2rem;">
            <div style="margin-bottom: 2rem;">
                <h3 style="margin: 0 0 1rem 0; color: #2d3748; font-size: 1.1rem; font-weight: 600;">Supplier Information</h3>
                <div style="display: grid; gap: 0.75rem;">
                    <div style="display: flex; justify-content: space-between; padding: 0.75rem; background: #f8fafc; border-radius: 8px;">
                        <span style="color: #718096; font-weight: 500;">Rating:</span>
                        <span style="color: #2d3748; font-weight: 600;">${supplier.rating} ⭐ (${supplier.reviews} reviews)</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; padding: 0.75rem; background: #f8fafc; border-radius: 8px;">
                        <span style="color: #718096; font-weight: 500;">Speciality:</span>
                        <span style="color: #2d3748; font-weight: 600;">${supplier.speciality}</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; padding: 0.75rem; background: #f8fafc; border-radius: 8px;">
                        <span style="color: #718096; font-weight: 500;">Delivery Time:</span>
                        <span style="color: #2d3748; font-weight: 600;">2-4 hours</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; padding: 0.75rem; background: #f8fafc; border-radius: 8px;">
                        <span style="color: #718096; font-weight: 500;">Minimum Order:</span>
                        <span style="color: #2d3748; font-weight: 600;">₹500</span>
                    </div>
                </div>
            </div>
            
            <div style="margin-bottom: 2rem;">
                <h3 style="margin: 0 0 1rem 0; color: #2d3748; font-size: 1.1rem; font-weight: 600;">Contact Options</h3>
                <div style="display: grid; gap: 1rem;">
                    <button onclick="callSupplier('${supplier.id}')" style="display: flex; align-items: center; gap: 1rem; padding: 1rem; background: #10b981; color: white; border: none; border-radius: 12px; cursor: pointer; transition: all 0.2s ease; font-weight: 600;" onmouseover="this.style.background='#059669'" onmouseout="this.style.background='#10b981'">
                        <i class="fas fa-phone" style="font-size: 1.2rem;"></i>
                        <div style="text-align: left; flex: 1;">
                            <div style="font-size: 1rem;">Call Supplier</div>
                            <div style="font-size: 0.875rem; opacity: 0.9;">+91 ${Math.floor(Math.random() * 9000000000) + 1000000000}</div>
                        </div>
                    </button>
                    
                    <button onclick="whatsappSupplier('${supplier.id}')" style="display: flex; align-items: center; gap: 1rem; padding: 1rem; background: #25d366; color: white; border: none; border-radius: 12px; cursor: pointer; transition: all 0.2s ease; font-weight: 600;" onmouseover="this.style.background='#128c7e'" onmouseout="this.style.background='#25d366'">
                        <i class="fab fa-whatsapp" style="font-size: 1.2rem;"></i>
                        <div style="text-align: left; flex: 1;">
                            <div style="font-size: 1rem;">WhatsApp Chat</div>
                            <div style="font-size: 0.875rem; opacity: 0.9;">Quick messaging</div>
                        </div>
                    </button>
                    
                    <button onclick="emailSupplier('${supplier.id}')" style="display: flex; align-items: center; gap: 1rem; padding: 1rem; background: #3b82f6; color: white; border: none; border-radius: 12px; cursor: pointer; transition: all 0.2s ease; font-weight: 600;" onmouseover="this.style.background='#2563eb'" onmouseout="this.style.background='#3b82f6'">
                        <i class="fas fa-envelope" style="font-size: 1.2rem;"></i>
                        <div style="text-align: left; flex: 1;">
                            <div style="font-size: 1rem;">Send Email</div>
                            <div style="font-size: 0.875rem; opacity: 0.9;">${supplier.name.toLowerCase().replace(/\s+/g, '')}@supplier.com</div>
                        </div>
                    </button>
                </div>
            </div>
            
            <div style="display: flex; gap: 1rem; justify-content: flex-end;">
                <button onclick="closeContactModal()" style="padding: 0.75rem 1.5rem; border: 1px solid #e2e8f0; background: white; color: #4a5568; border-radius: 8px; cursor: pointer; font-weight: 600; transition: all 0.2s ease;" onmouseover="this.style.background='#f7fafc'" onmouseout="this.style.background='white'">
                    Close
                </button>
                <button onclick="viewSupplierProducts('${supplier.id}')" style="padding: 0.75rem 1.5rem; border: none; background: linear-gradient(135deg, #ff6600, #ff9900); color: white; border-radius: 8px; cursor: pointer; font-weight: 600; transition: all 0.2s ease;" onmouseover="this.style.transform='translateY(-1px)'" onmouseout="this.style.transform='translateY(0)'">
                    View Products
                </button>
            </div>
        </div>
    `;
    
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
    
    // Store modal reference globally
    window.currentContactModal = overlay;
    
    // Close on overlay click
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            closeContactModal();
        }
    });
    
    // Close on Escape key
    document.addEventListener('keydown', function escapeHandler(e) {
        if (e.key === 'Escape') {
            closeContactModal();
            document.removeEventListener('keydown', escapeHandler);
        }
    });
}

function closeContactModal() {
    if (window.currentContactModal) {
        document.body.removeChild(window.currentContactModal);
        window.currentContactModal = null;
    }
}

function callSupplier(supplierId) {
    const supplier = suppliers.find(s => s.id === supplierId);
    showNotification(`📞 Calling ${supplier.name}... In a real app, this would initiate a phone call.`, 'success');
    closeContactModal();
}

function whatsappSupplier(supplierId) {
    const supplier = suppliers.find(s => s.id === supplierId);
    showNotification(`💬 Opening WhatsApp chat with ${supplier.name}... In a real app, this would open WhatsApp.`, 'success');
    closeContactModal();
}

function emailSupplier(supplierId) {
    const supplier = suppliers.find(s => s.id === supplierId);
    showNotification(`📧 Opening email to ${supplier.name}... In a real app, this would open your email client.`, 'success');
    closeContactModal();
}

function viewSupplierProducts(supplierId) {
    closeContactModal();
    showNotification(`🛍️ Viewing products from supplier ${supplierId}... In a real app, this would filter the marketplace.`, 'info');
    // In a real app, you would filter the marketplace to show only this supplier's products
    showSection('marketplace');
}

function showVendorContactModal(vendor) {
    // Create modal overlay
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    `;
    
    const modal = document.createElement('div');
    modal.style.cssText = `
        background: white;
        padding: 30px;
        border-radius: 15px;
        max-width: 500px;
        width: 90%;
        max-height: 80vh;
        overflow-y: auto;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    `;
    
    modal.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
            <h3 style="margin: 0; color: #2c3e50;">Contact ${vendor.name}</h3>
            <button onclick="closeVendorContactModal()" style="background: none; border: none; font-size: 24px; cursor: pointer; color: #7f8c8d;">&times;</button>
        </div>
        
        <div style="margin-bottom: 20px;">
            <div style="display: flex; align-items: center; margin-bottom: 10px;">
                <div style="width: 50px; height: 50px; border-radius: 50%; background: #3498db; color: white; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 15px;">
                    ${vendor.name.charAt(0)}
                </div>
                <div>
                    <h4 style="margin: 0; color: #2c3e50;">${vendor.name}</h4>
                    <p style="margin: 5px 0; color: #7f8c8d;">${vendor.businessType}</p>
                    <p style="margin: 0; color: #7f8c8d;">📍 ${vendor.location}</p>
                    <div style="margin-top: 5px;">${'⭐'.repeat(Math.floor(vendor.rating))} ${vendor.rating}</div>
                </div>
            </div>
        </div>
        
        <div style="margin-bottom: 20px;">
            <h4 style="color: #2c3e50; margin-bottom: 10px;">Requirements:</h4>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px;">
                ${vendor.requirements.map(req => `
                    <div style="display: flex; justify-content: space-between; margin-bottom: 8px; padding: 8px; background: white; border-radius: 5px;">
                        <span style="font-weight: 500;">${req.name}</span>
                        <span style="color: #27ae60; font-weight: bold;">${req.quantity}</span>
                    </div>
                `).join('')}
            </div>
        </div>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 15px;">
            <button onclick="callVendor(${vendor.id})" style="background: #27ae60; color: white; border: none; padding: 12px; border-radius: 8px; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px;">
                📞 Call
            </button>
            <button onclick="whatsappVendor(${vendor.id})" style="background: #25d366; color: white; border: none; padding: 12px; border-radius: 8px; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px;">
                💬 WhatsApp
            </button>
        </div>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
            <button onclick="emailVendor(${vendor.id})" style="background: #3498db; color: white; border: none; padding: 12px; border-radius: 8px; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px;">
                📧 Email
            </button>
            <button onclick="viewVendorRequirements(${vendor.id})" style="background: #f39c12; color: white; border: none; padding: 12px; border-radius: 8px; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px;">
                📋 View Details
            </button>
        </div>
    `;
    
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
    
    // Store reference for closing
    window.currentVendorContactModal = overlay;
}

function closeVendorContactModal() {
    if (window.currentVendorContactModal) {
        document.body.removeChild(window.currentVendorContactModal);
        window.currentVendorContactModal = null;
    }
}

function callVendor(vendorId) {
    const vendor = vendors.find(v => v.id === vendorId);
    showNotification(`📞 Calling ${vendor.name}... In a real app, this would initiate a call.`, 'success');
    closeVendorContactModal();
}

function whatsappVendor(vendorId) {
    const vendor = vendors.find(v => v.id === vendorId);
    showNotification(`💬 Opening WhatsApp chat with ${vendor.name}... In a real app, this would open WhatsApp.`, 'success');
    closeVendorContactModal();
}

function emailVendor(vendorId) {
    const vendor = vendors.find(v => v.id === vendorId);
    showNotification(`📧 Opening email to ${vendor.name}... In a real app, this would open your email client.`, 'success');
    closeVendorContactModal();
}

function viewVendorRequirements(vendorId) {
    closeVendorContactModal();
    const vendor = vendors.find(v => v.id === vendorId);
    showVendorDetailsModal(vendor);
}

function showVendorDetailsModal(vendor) {
    // Create modal overlay
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    `;
    
    const modal = document.createElement('div');
    modal.style.cssText = `
        background: white;
        padding: 30px;
        border-radius: 15px;
        max-width: 600px;
        width: 90%;
        max-height: 80vh;
        overflow-y: auto;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    `;
    
    modal.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 25px;">
            <h3 style="margin: 0; color: #2c3e50; display: flex; align-items: center; gap: 10px;">
                📋 ${vendor.name} - Detailed Requirements
            </h3>
            <button onclick="closeVendorDetailsModal()" style="background: none; border: none; font-size: 24px; cursor: pointer; color: #7f8c8d;">&times;</button>
        </div>
        
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 10px; margin-bottom: 25px;">
            <div style="display: flex; align-items: center; margin-bottom: 15px;">
                <div style="width: 60px; height: 60px; border-radius: 50%; background: rgba(255,255,255,0.2); color: white; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 24px; margin-right: 20px;">
                    ${vendor.name.charAt(0)}
                </div>
                <div>
                    <h4 style="margin: 0; font-size: 22px;">${vendor.name}</h4>
                    <p style="margin: 5px 0; opacity: 0.9;">${vendor.businessType}</p>
                    <p style="margin: 0; opacity: 0.9;">📍 ${vendor.location}</p>
                </div>
            </div>
            <div style="display: flex; align-items: center; gap: 15px;">
                <div style="display: flex; align-items: center; gap: 5px;">
                    ${'⭐'.repeat(Math.floor(vendor.rating))} 
                    <span style="font-weight: bold;">${vendor.rating}</span>
                </div>
                <div style="background: rgba(255,255,255,0.2); padding: 5px 10px; border-radius: 15px; font-size: 12px;">
                    Verified Vendor
                </div>
            </div>
        </div>
        
        <div style="margin-bottom: 25px;">
            <h4 style="color: #2c3e50; margin-bottom: 15px; display: flex; align-items: center; gap: 8px;">
                🛒 Raw Material Requirements
            </h4>
            <div style="display: grid; gap: 12px;">
                ${vendor.requirements.map(req => `
                    <div style="background: #f8f9fa; padding: 18px; border-radius: 10px; border-left: 4px solid #3498db;">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                            <h5 style="margin: 0; color: #2c3e50; font-size: 16px;">${req.name}</h5>
                            <span style="background: #27ae60; color: white; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: bold;">
                                ${req.category.toUpperCase()}
                            </span>
                        </div>
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <span style="color: #7f8c8d; font-size: 14px;">Required Quantity:</span>
                            <span style="color: #e74c3c; font-weight: bold; font-size: 16px;">${req.quantity}</span>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
        
        <div style="background: #e8f5e8; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
            <h4 style="color: #27ae60; margin: 0 0 10px 0; display: flex; align-items: center; gap: 8px;">
                💡 Business Opportunity
            </h4>
            <p style="margin: 0; color: #2c3e50; line-height: 1.5;">
                This vendor has consistent requirements and could be a valuable long-term customer. 
                Regular supply partnerships often lead to better pricing and priority orders.
            </p>
        </div>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
            <button onclick="contactVendorFromDetails(${vendor.id})" style="background: #3498db; color: white; border: none; padding: 15px; border-radius: 8px; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; font-weight: bold;">
                💬 Contact Now
            </button>
            <button onclick="closeVendorDetailsModal()" style="background: #95a5a6; color: white; border: none; padding: 15px; border-radius: 8px; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; font-weight: bold;">
                ✕ Close
            </button>
        </div>
    `;
    
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
    
    // Store reference for closing
    window.currentVendorDetailsModal = overlay;
}

function closeVendorDetailsModal() {
    if (window.currentVendorDetailsModal) {
        document.body.removeChild(window.currentVendorDetailsModal);
        window.currentVendorDetailsModal = null;
    }
}

function contactVendorFromDetails(vendorId) {
    closeVendorDetailsModal();
    contactVendor(vendorId);
}

// Group Orders functions
function loadGroups() {
    showGroupTab('available');
}

function showGroupTab(tabName) {
    // Update tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    
    // Find and activate the correct tab button
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(btn => {
        if ((tabName === 'available' && btn.textContent.includes('Available')) ||
            (tabName === 'my-groups' && btn.textContent.includes('My Groups'))) {
            btn.classList.add('active');
        }
    });
    
    // Update tab content
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    
    if (tabName === 'available') {
        document.getElementById('availableGroups').classList.add('active');
        loadAvailableGroups();
    } else {
        document.getElementById('myGroups').classList.add('active');
        loadMyGroups();
    }
}

function loadAvailableGroups() {
    const groupsList = document.getElementById('availableGroupsList');
    groupsList.innerHTML = '';
    
    groupOrders.forEach(group => {
        const progressPercentage = (group.currentQuantity / group.targetQuantity) * 100;
        const isJoined = myGroupOrders.some(myGroup => myGroup.id === group.id);
        
        const groupCard = document.createElement('div');
        groupCard.className = 'group-card';
        groupCard.innerHTML = `
            <div class="group-header">
                <div class="group-info">
                    <h4>${group.product} - Bulk Order</h4>
                    <div class="group-meta">
                        <p>Organized by: ${group.organizer}</p>
                        <p>Price: ₹${group.pricePerKg}/kg (Save ₹${calculateSavings(group.product, group.pricePerKg)}/kg)</p>
                        <p>Deadline: ${formatDate(group.deadline)}</p>
                    </div>
                </div>
                <div class="text-right">
                    <div class="text-muted">${group.currentVendors}/${group.maxVendors} vendors</div>
                </div>
            </div>
            <div class="group-progress">
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${progressPercentage}%"></div>
                </div>
                <div class="progress-text">${group.currentQuantity}kg / ${group.targetQuantity}kg target</div>
            </div>
            <p class="text-muted mb-3">${group.description}</p>
            <button class="btn-primary" onclick="${isJoined ? `showAlreadyJoinedMessage('${group.product}')` : `joinGroup(${group.id})`}" ${isJoined ? 'style="background: #9ca3af; cursor: not-allowed;"' : ''}>
                ${isJoined ? 'Already Joined' : 'Join Group'}
            </button>
        `;
        groupsList.appendChild(groupCard);
    });
}

function loadMyGroups() {
    const groupsList = document.getElementById('myGroupsList');
    groupsList.innerHTML = '';
    
    myGroupOrders.forEach(myGroup => {
        const fullGroup = groupOrders.find(g => g.id === myGroup.id);
        if (!fullGroup) return;
        
        const groupCard = document.createElement('div');
        groupCard.className = 'group-card';
        groupCard.innerHTML = `
            <div class="group-header">
                <div class="group-info">
                    <h4>${myGroup.product} - My Order</h4>
                    <div class="group-meta">
                        <p>My Quantity: ${myGroup.myQuantity}kg</p>
                        <p>Status: <span class="text-success">${myGroup.status.toUpperCase()}</span></p>
                        <p>Savings: <span class="text-success">₹${myGroup.totalSavings}</span></p>
                    </div>
                </div>
            </div>
            <div class="group-progress">
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${(fullGroup.currentQuantity / fullGroup.targetQuantity) * 100}%"></div>
                </div>
                <div class="progress-text">${fullGroup.currentQuantity}kg / ${fullGroup.targetQuantity}kg target</div>
            </div>
            <button class="btn-secondary" onclick="leaveGroup(${myGroup.id})">Leave Group</button>
        `;
        groupsList.appendChild(groupCard);
    });
}

function calculateSavings(productName, groupPrice) {
    // Find regular price from suppliers
    for (let supplier of suppliers) {
        const product = supplier.products.find(p => p.name.toLowerCase().includes(productName.toLowerCase()));
        if (product) {
            return Math.max(0, product.price - groupPrice);
        }
    }
    return 5; // Default savings
}

function joinGroup(groupId) {
    const group = groupOrders.find(g => g.id === groupId);
    if (!group) {
        showNotification('Group order not found!', 'error');
        return;
    }
    
    // Check if group is still open
    if (group.currentVendors >= group.maxVendors) {
        showNotification('This group order is full!', 'warning');
        return;
    }
    
    // Show custom input modal for quantity
    showQuantityModal(group, (quantity) => {
        if (!quantity || isNaN(quantity) || quantity <= 0) {
            showNotification('Please enter a valid quantity!', 'error');
            return;
        }
        
        processGroupJoin(group, parseInt(quantity));
    });
}

function processGroupJoin(group, quantityNum) {
    if (quantityNum > (group.targetQuantity - group.currentQuantity)) {
        showNotification(`Only ${group.targetQuantity - group.currentQuantity}kg space remaining in this group!`, 'warning');
        return;
    }
    
    const savings = calculateSavings(group.product, group.pricePerKg) * quantityNum;
    
    myGroupOrders.push({
        id: group.id,
        product: group.product,
        myQuantity: quantityNum,
        status: 'active',
        totalSavings: savings
    });
    
    group.currentQuantity += quantityNum;
    group.currentVendors += 1;
    
    showNotification(`✅ Successfully joined! You'll save ₹${savings} on ${quantityNum}kg of ${group.product}.`, 'success');
    loadAvailableGroups();
    updateDashboardStats();
}

function showAlreadyJoinedMessage(productName) {
    showNotification(`🎯 You've already joined the ${productName} group order! Check "My Groups" tab to manage your participation.`, 'info');
}

function leaveGroup(groupId) {
    const myGroupIndex = myGroupOrders.findIndex(g => g.id === groupId);
    if (myGroupIndex === -1) return;
    
    const myGroup = myGroupOrders[myGroupIndex];
    const fullGroup = groupOrders.find(g => g.id === groupId);
    
    // Show custom confirmation modal
    showConfirmModal(
        `Leave Group Order`,
        `Are you sure you want to leave the ${myGroup.product} group order?`,
        () => {
        // Update group quantities
        if (fullGroup) {
            fullGroup.currentQuantity -= myGroup.myQuantity;
            fullGroup.currentVendors -= 1;
        }
        
        // Remove from my groups
        myGroupOrders.splice(myGroupIndex, 1);
        
            showNotification('You have left the group order.', 'info');
            loadMyGroups();
            updateDashboardStats();
        }
    );
}

// Supplier Dashboard functions
function loadSupplierDashboard() {
    loadSupplierProducts();
    loadSupplierOrders();
    updateSupplierStats();
}

function loadSupplierProducts() {
    const productsList = document.getElementById('supplierProducts');
    productsList.innerHTML = '';
    
    // Group products by category for better organization
    const productsByCategory = {};
    supplierProducts.forEach(product => {
        if (!productsByCategory[product.category]) {
            productsByCategory[product.category] = [];
        }
        productsByCategory[product.category].push(product);
    });
    
    // Display products grouped by category
    Object.keys(productsByCategory).forEach(category => {
        // Add category header
        const categoryHeader = document.createElement('div');
        categoryHeader.style.cssText = `
            font-weight: 600;
            color: #2d3748;
            text-transform: capitalize;
            margin: 1.5rem 0 0.75rem 0;
            padding-bottom: 0.5rem;
            border-bottom: 2px solid #e2e8f0;
            font-size: 1.1rem;
        `;
        categoryHeader.textContent = `${category.charAt(0).toUpperCase() + category.slice(1)} (${productsByCategory[category].length} items)`;
        productsList.appendChild(categoryHeader);
        
        // Add products in this category
        productsByCategory[category].forEach(product => {
            const productElement = document.createElement('div');
            productElement.className = 'supplier-product-item';
            productElement.style.cssText = `
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 1rem;
                margin-bottom: 0.75rem;
                background: #f8fafc;
                border-radius: 12px;
                border: 1px solid #f1f5f9;
                transition: all 0.2s ease;
            `;
            
            // Add hover effect
            productElement.onmouseover = () => {
                productElement.style.background = '#f1f5f9';
                productElement.style.borderColor = '#e2e8f0';
            };
            productElement.onmouseout = () => {
                productElement.style.background = '#f8fafc';
                productElement.style.borderColor = '#f1f5f9';
            };
            
            // Determine stock status
            let stockStatus = 'In Stock';
            let stockColor = '#059669';
            if (product.stock < 50) {
                stockStatus = 'Low Stock';
                stockColor = '#f59e0b';
            }
            if (product.stock < 20) {
                stockStatus = 'Critical';
                stockColor = '#dc2626';
            }
            
            productElement.innerHTML = `
                <div class="product-info" style="flex: 1;">
                    <h4 style="margin: 0 0 0.5rem 0; color: #2d3748; font-size: 1rem;">${product.name}</h4>
                    <div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
                        <span style="font-weight: 600; color: #059669; font-size: 0.95rem;">₹${product.price}/kg</span>
                        <span style="color: #718096; font-size: 0.9rem;">Min: ${product.minOrder}kg</span>
                        <span style="color: ${stockColor}; font-weight: 600; font-size: 0.9rem;">${stockStatus}: ${product.stock}kg</span>
                    </div>
                </div>
                <div style="display: flex; gap: 0.5rem;">
                    <button class="btn-mini btn-secondary" onclick="editProduct(${product.id})" style="padding: 0.5rem 1rem; font-size: 0.85rem; border-radius: 8px;">Edit</button>
                    <button class="btn-mini btn-primary" onclick="restockProduct(${product.id})" style="padding: 0.5rem 1rem; font-size: 0.85rem; border-radius: 8px;">Restock</button>
                </div>
            `;
            productsList.appendChild(productElement);
        });
    });
}

function loadSupplierOrders() {
    const ordersList = document.getElementById('supplierOrdersList');
    if (!ordersList) return;
    
    ordersList.innerHTML = '';
    
    if (supplierOrders.length === 0) {
        ordersList.innerHTML = `
            <div style="text-align: center; padding: 2rem; color: #718096;">
                <i class="fas fa-inbox" style="font-size: 2rem; margin-bottom: 1rem; display: block;"></i>
                <p>No orders yet. Orders from vendors will appear here.</p>
            </div>
        `;
        return;
    }
    
    supplierOrders.forEach(order => {
        const orderElement = document.createElement('div');
        orderElement.className = 'supplier-order-item';
        
        // Add click handler for pending orders
        if (order.status === 'pending') {
            orderElement.style.cursor = 'pointer';
            orderElement.style.transition = 'all 0.2s ease';
            orderElement.onclick = () => confirmOrder(order.id);
            orderElement.onmouseover = () => {
                orderElement.style.background = '#f0f9ff';
                orderElement.style.borderColor = '#0ea5e9';
            };
            orderElement.onmouseout = () => {
                orderElement.style.background = '#f8fafc';
                orderElement.style.borderColor = '#f1f5f9';
            };
        }
        
        orderElement.innerHTML = `
            <div class="order-icon">
                <i class="fas fa-shopping-cart"></i>
            </div>
            <div class="order-vendor">
                <h4>${order.product} - ${order.quantity}kg</h4>
                <p>From: ${order.vendor} • ${formatDate(order.date)}</p>
                <p style="font-size: 0.85rem; color: #059669; font-weight: 600; margin: 0.25rem 0 0 0;">₹${order.orderValue ? order.orderValue.toLocaleString() : (order.quantity * 25)} • ${order.vendorPhone || 'Contact via app'}</p>
                ${order.status === 'pending' ? '<p style="font-size: 0.8rem; color: #0ea5e9; font-weight: 600; margin: 0.25rem 0 0 0;"><i class="fas fa-hand-pointer"></i> Click to confirm order</p>' : ''}
            </div>
            <div class="order-actions">
                <span class="order-status ${order.status}">${order.status.toUpperCase()}</span>
                ${order.status === 'pending' ? `
                    <i class="fas fa-arrow-right" style="color: #0ea5e9; font-size: 1.2rem;"></i>
                ` : order.status === 'confirmed' ? `
                    <i class="fas fa-check-circle" style="color: #10b981; font-size: 1.2rem;"></i>
                ` : order.status === 'delivered' ? `
                    <i class="fas fa-check-double" style="color: #059669; font-size: 1.2rem;"></i>
                ` : ''}
            </div>
        `;
        ordersList.appendChild(orderElement);
    });
}

function updateSupplierStats() {
    document.getElementById('productsListed').textContent = supplierProducts.length;
    document.getElementById('activeVendors').textContent = new Set(supplierOrders.map(o => o.vendor)).size;
    
    const revenue = supplierOrders
        .filter(o => o.status === 'delivered')
        .reduce((sum, order) => {
            const product = supplierProducts.find(p => p.name === order.product);
            return sum + (product ? product.price * order.quantity : 0);
        }, 0);
    
    document.getElementById('monthlyRevenue').textContent = `₹${revenue.toLocaleString()}`;
}

function confirmOrder(orderId) {
    const order = supplierOrders.find(o => o.id === orderId);
    if (!order) {
        showNotification('Order not found!', 'error');
        return;
    }
    
    if (order.status !== 'pending') {
        showNotification('This order has already been processed!', 'warning');
        return;
    }
    
    // Update order status
    order.status = 'confirmed';
    order.confirmedDate = new Date().toISOString();
    
    // Reload supplier dashboard
    loadSupplierOrders();
    updateSupplierStats();
    
    // Show success notification
    showNotification(`✅ Order confirmed! ${order.quantity}kg of ${order.product} for ${order.vendor}. Customer will be notified.`, 'success');
    
    // In a real app, you would also notify the vendor about the confirmation
    console.log(`Order ${orderId} confirmed by supplier`);
}

function editProduct(productId) {
    showNotification(`Edit product ${productId}. In a real app, this would open an edit form.`, 'info');
}

// Modal functions
function createNewOrder() {
    document.getElementById('orderModal').style.display = 'block';
}

function createGroupOrder() {
    document.getElementById('groupModal').style.display = 'block';
}

function addProduct() {
    openModal('productModal');
}

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
        // Populate dropdowns if needed
        if (modalId === 'orderModal') {
            populateProductSelects();
        } else if (modalId === 'groupModal') {
            populateProductSelects();
        }
    } else {
        showNotification(`Modal ${modalId} not found!`, 'error');
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
    }
}

// Form submissions
document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const product = document.getElementById('orderProduct').value;
    const quantity = document.getElementById('orderQuantity').value;
    const date = document.getElementById('orderDate').value;
    const notes = document.getElementById('orderNotes').value;
    
    // Add to recent orders
    const newOrder = {
        id: recentOrders.length + 1,
        product: product,
        quantity: parseInt(quantity),
        supplier: "Selected Supplier",
        status: "pending",
        date: date,
        amount: parseInt(quantity) * 30 // Estimated price
    };
    
    recentOrders.unshift(newOrder);
    
    showNotification(`Order placed for ${quantity}kg of ${product}`, 'success');
    closeModal('orderModal');
    loadDashboard();
    this.reset();
});

document.getElementById('groupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const product = document.getElementById('groupProduct').value;
    const quantity = document.getElementById('groupQuantity').value;
    const maxVendors = document.getElementById('maxVendors').value;
    const deadline = document.getElementById('groupDeadline').value;
    const description = document.getElementById('groupDescription').value;
    
    // Add to group orders
    const newGroup = {
        id: groupOrders.length + 1,
        product: product,
        targetQuantity: parseInt(quantity),
        currentQuantity: 0,
        maxVendors: parseInt(maxVendors),
        currentVendors: 0,
        pricePerKg: 25, // Estimated price
        deadline: deadline,
        organizer: "You",
        description: description
    };
    
    groupOrders.unshift(newGroup);
    
    showNotification(`Group order created for ${quantity}kg of ${product}`, 'success');
    closeModal('groupModal');
    loadGroups();
    this.reset();
});

document.getElementById('productForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('productName').value;
    const category = document.getElementById('productCategory').value;
    const price = document.getElementById('productPrice').value;
    const minOrder = document.getElementById('productMinOrder').value;
    const description = document.getElementById('productDescription').value;
    
    // Add to supplier products
    const newProduct = {
        id: supplierProducts.length + 1,
        name: name,
        category: category,
        price: parseFloat(price),
        minOrder: parseInt(minOrder),
        stock: 100 // Default stock
    };
    
    supplierProducts.push(newProduct);
    
    showNotification(`Product "${name}" added successfully`, 'success');
    closeModal('productModal');
    loadSupplierDashboard();
    this.reset();
});

// Utility functions
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
    });
}

function populateProductSelects() {
    const selects = ['orderProduct', 'groupProduct'];
    const allProducts = [];
    
    suppliers.forEach(supplier => {
        supplier.products.forEach(product => {
            if (!allProducts.find(p => p.name === product.name)) {
                allProducts.push(product);
            }
        });
    });
    
    selects.forEach(selectId => {
        const select = document.getElementById(selectId);
        if (select) {
            allProducts.forEach(product => {
                const option = document.createElement('option');
                option.value = product.name;
                option.textContent = product.name;
                select.appendChild(option);
            });
        }
    });
}

// Close modals when clicking outside
window.addEventListener('click', function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

// Enhanced notification system with attractive success messages
function showNotification(message, type = 'info') {
    // Create notification container if it doesn't exist
    let container = document.getElementById('notificationContainer');
    if (!container) {
        container = document.createElement('div');
        container.id = 'notificationContainer';
        container.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 3000;
            max-width: 350px;
            pointer-events: none;
        `;
        document.body.appendChild(container);
    }
    
    // Define notification styles based on type
    const notificationStyles = {
        success: {
            background: 'linear-gradient(135deg, #10b981, #059669)',
            color: '#ffffff',
            border: 'none',
            icon: 'check-circle',
            shadow: '0 10px 30px rgba(16, 185, 129, 0.4), 0 4px 15px rgba(16, 185, 129, 0.2)',
            iconBg: 'rgba(255,255,255,0.25)'
        },
        error: {
            background: 'linear-gradient(135deg, #ef4444, #dc2626)',
            color: '#ffffff',
            border: 'none',
            icon: 'exclamation-circle',
            shadow: '0 10px 30px rgba(239, 68, 68, 0.4), 0 4px 15px rgba(239, 68, 68, 0.2)',
            iconBg: 'rgba(255,255,255,0.25)'
        },
        warning: {
            background: 'linear-gradient(135deg, #f59e0b, #d97706)',
            color: '#ffffff',
            border: 'none',
            icon: 'exclamation-triangle',
            shadow: '0 10px 30px rgba(245, 158, 11, 0.4), 0 4px 15px rgba(245, 158, 11, 0.2)',
            iconBg: 'rgba(255,255,255,0.25)'
        },
        info: {
            background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
            color: '#ffffff',
            border: 'none',
            icon: 'info-circle',
            shadow: '0 10px 30px rgba(59, 130, 246, 0.4), 0 4px 15px rgba(59, 130, 246, 0.2)',
            iconBg: 'rgba(255,255,255,0.25)'
        }
    };
    
    const style = notificationStyles[type] || notificationStyles.info;
    
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        background: ${style.background};
        color: ${style.color};
        border: ${style.border};
        border-radius: 16px;
        padding: 18px 22px;
        margin-bottom: 14px;
        box-shadow: ${style.shadow};
        animation: slideInBounce 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        position: relative;
        cursor: pointer;
        pointer-events: auto;
        backdrop-filter: blur(15px);
        overflow: hidden;
        min-width: 320px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    `;
    
    // Add sparkle effect for success messages
    const sparkleEffect = type === 'success' ? `
        <div style="
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(circle at 20% 20%, rgba(255,255,255,0.3) 1px, transparent 1px),
                        radial-gradient(circle at 80% 30%, rgba(255,255,255,0.2) 1px, transparent 1px),
                        radial-gradient(circle at 60% 70%, rgba(255,255,255,0.25) 1px, transparent 1px);
            background-size: 50px 50px, 40px 40px, 60px 60px;
            animation: sparkle 3s ease-in-out infinite;
            pointer-events: none;
        "></div>
    ` : '';
    
    notification.innerHTML = `
        ${sparkleEffect}
        <div style="display: flex; align-items: flex-start; gap: 14px; position: relative; z-index: 1;">
            <div style="
                display: flex;
                align-items: center;
                justify-content: center;
                width: 36px;
                height: 36px;
                border-radius: 12px;
                background: ${style.iconBg};
                backdrop-filter: blur(8px);
                flex-shrink: 0;
                margin-top: 2px;
            ">
                <i class="fas fa-${style.icon}" style="font-size: 18px; color: white;"></i>
            </div>
            <div style="flex: 1; min-width: 0;">
                <div style="
                    font-weight: 700;
                    font-size: 15px;
                    margin-bottom: 4px;
                    letter-spacing: -0.2px;
                    line-height: 1.2;
                ">
                    ${type === 'success' ? '🎉 Success!' : type === 'error' ? '❌ Error' : type === 'warning' ? '⚠️ Warning' : '💡 Info'}
                </div>
                <div style="
                    font-size: 14px;
                    opacity: 0.95;
                    line-height: 1.4;
                    font-weight: 400;
                    word-wrap: break-word;
                ">${message}</div>
            </div>
            <div style="
                cursor: pointer;
                opacity: 0.8;
                transition: all 0.2s ease;
                padding: 6px;
                border-radius: 8px;
                background: rgba(255,255,255,0.15);
                flex-shrink: 0;
                margin-top: 2px;
            " 
            onmouseover="this.style.opacity='1'; this.style.background='rgba(255,255,255,0.25)';" 
            onmouseout="this.style.opacity='0.8'; this.style.background='rgba(255,255,255,0.15)';" 
            onclick="this.parentElement.parentElement.style.animation='slideOutBounce 0.4s ease-in'; setTimeout(() => this.parentElement.parentElement.remove(), 400);">
                <i class="fas fa-times" style="font-size: 11px; color: white;"></i>
            </div>
        </div>
    `;
    
    // Add enhanced animations
    const animationStyle = document.createElement('style');
    animationStyle.textContent = `
        @keyframes slideInBounce {
            0% { 
                transform: translateX(100%) scale(0.8); 
                opacity: 0;
            }
            60% { 
                transform: translateX(-10px) scale(1.05); 
                opacity: 1;
            }
            100% { 
                transform: translateX(0) scale(1); 
                opacity: 1;
            }
        }
        @keyframes slideOutBounce {
            0% { 
                transform: translateX(0) scale(1); 
                opacity: 1;
            }
            100% { 
                transform: translateX(100%) scale(0.8); 
                opacity: 0;
            }
        }
        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
        }
        @keyframes sparkle {
            0%, 100% { opacity: 0.8; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.1); }
        }
    `;
    if (!document.querySelector('style[data-enhanced-notifications]')) {
        animationStyle.setAttribute('data-enhanced-notifications', 'true');
        document.head.appendChild(animationStyle);
    }
    
    container.appendChild(notification);
    
    // Add pulse effect for success messages
    if (type === 'success') {
        setTimeout(() => {
            notification.style.animation = 'pulse 0.6s ease-in-out';
        }, 600);
    }
    
    // Auto remove after 5 seconds (longer for better readability)
    setTimeout(() => {
        notification.style.animation = 'slideOutBounce 0.4s ease-in';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 400);
    }, 5000);
    
    // Remove on click
    notification.addEventListener('click', () => {
        notification.style.animation = 'slideOutBounce 0.4s ease-in';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 400);
    });
}

// Custom Modal Functions for replacing browser dialogs
function showQuantityModal(group, callback) {
    // Create modal overlay
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 4000;
        backdrop-filter: blur(5px);
    `;
    
    // Create modal content
    const modal = document.createElement('div');
    modal.style.cssText = `
        background: white;
        border-radius: 12px;
        padding: 24px;
        max-width: 400px;
        width: 90%;
        box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        animation: modalSlideIn 0.3s ease-out;
    `;
    
    modal.innerHTML = `
        <h3 style="margin: 0 0 16px 0; color: #333; font-size: 18px;">Join Group Order</h3>
        <p style="margin: 0 0 16px 0; color: #666; line-height: 1.4;">
            How many kg of <strong>${group.product}</strong> do you want to order?<br>
            <small>Minimum: 1kg | Available space: ${group.targetQuantity - group.currentQuantity}kg</small>
        </p>
        <input type="number" id="quantityInput" min="1" max="${group.targetQuantity - group.currentQuantity}" value="10" 
               style="width: 100%; padding: 12px; border: 2px solid #ddd; border-radius: 6px; font-size: 16px; margin-bottom: 20px;">
        <div style="display: flex; gap: 12px; justify-content: flex-end;">
            <button onclick="closeQuantityModal()" style="padding: 10px 20px; border: 1px solid #e2e8f0; background: #f8fafc; color: #4a5568; border-radius: 6px; cursor: pointer; font-weight: 600; transition: all 0.2s ease;" onmouseover="this.style.background='#f1f5f9'" onmouseout="this.style.background='#f8fafc'">Cancel</button>
            <button onclick="confirmQuantity()" style="padding: 10px 20px; border: none; background: linear-gradient(135deg, #10b981, #059669); color: white; border-radius: 6px; cursor: pointer; font-weight: 600; transition: all 0.2s ease;" onmouseover="this.style.transform='translateY(-1px)'" onmouseout="this.style.transform='translateY(0)'">Join Group</button>
        </div>
    `;
    
    // Add animation styles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes modalSlideIn {
            from { transform: translateY(-50px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
    `;
    document.head.appendChild(style);
    
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
    
    // Focus input
    setTimeout(() => {
        document.getElementById('quantityInput').focus();
        document.getElementById('quantityInput').select();
    }, 100);
    
    // Store callback globally for button access
    window.currentQuantityCallback = callback;
    window.currentQuantityModal = overlay;
    
    // Close on overlay click
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            closeQuantityModal();
        }
    });
    
    // Handle Enter key
    document.getElementById('quantityInput').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            confirmQuantity();
        }
    });
}

function closeQuantityModal() {
    if (window.currentQuantityModal) {
        document.body.removeChild(window.currentQuantityModal);
        window.currentQuantityModal = null;
        window.currentQuantityCallback = null;
    }
}

function confirmQuantity() {
    const quantity = document.getElementById('quantityInput').value;
    if (window.currentQuantityCallback) {
        window.currentQuantityCallback(quantity);
    }
    closeQuantityModal();
}

function showConfirmModal(title, message, onConfirm) {
    // Create modal overlay
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 4000;
        backdrop-filter: blur(5px);
    `;
    
    // Create modal content
    const modal = document.createElement('div');
    modal.style.cssText = `
        background: white;
        border-radius: 12px;
        padding: 24px;
        max-width: 400px;
        width: 90%;
        box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        animation: modalSlideIn 0.3s ease-out;
    `;
    
    modal.innerHTML = `
        <h3 style="margin: 0 0 16px 0; color: #333; font-size: 18px;">${title}</h3>
        <p style="margin: 0 0 24px 0; color: #666; line-height: 1.4;">${message}</p>
        <div style="display: flex; gap: 12px; justify-content: flex-end;">
            <button onclick="closeConfirmModal()" style="padding: 10px 20px; border: 1px solid #ddd; background: white; border-radius: 6px; cursor: pointer;">Cancel</button>
            <button onclick="confirmAction()" style="padding: 10px 20px; border: none; background: linear-gradient(135deg, #dc3545, #fd7e14); color: white; border-radius: 6px; cursor: pointer;">Confirm</button>
        </div>
    `;
    
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
    
    // Store callback globally for button access
    window.currentConfirmCallback = onConfirm;
    window.currentConfirmModal = overlay;
    
    // Close on overlay click
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            closeConfirmModal();
        }
    });
}

function closeConfirmModal() {
    if (window.currentConfirmModal) {
        document.body.removeChild(window.currentConfirmModal);
        window.currentConfirmModal = null;
        window.currentConfirmCallback = null;
    }
}

function confirmAction() {
    if (window.currentConfirmCallback) {
        window.currentConfirmCallback();
    }
    closeConfirmModal();
}

// Demo data refresh (simulates real-time updates)
setInterval(() => {
    // Simulate some dynamic updates
    if (Math.random() > 0.8) {
        // Randomly update group order progress
        groupOrders.forEach(group => {
            if (group.currentQuantity < group.targetQuantity && Math.random() > 0.7) {
                const addedQuantity = Math.floor(Math.random() * 5) + 1;
                group.currentQuantity += addedQuantity;
                group.currentVendors += Math.random() > 0.5 ? 1 : 0;
                
                // Show notification for group progress
                if (currentSection === 'groups' && Math.random() > 0.7) {
                    showNotification(`${group.product} group order: +${addedQuantity}kg added by another vendor!`, 'info');
                }
            }
        });
        
        // Refresh current view if on groups page
        if (currentSection === 'groups') {
            loadGroups();
        }
    }
}, 15000); // Update every 15 seconds

// Vendor Management Functions
function openAddVendorModal() {
    document.getElementById('addVendorModal').style.display = 'block';
}

function closeAddVendorModal() {
    document.getElementById('addVendorModal').style.display = 'none';
    document.getElementById('addVendorForm').reset();
    // Reset requirements container to have only one field
    const container = document.getElementById('requirementsContainer');
    container.innerHTML = `
        <div class="requirement-item">
            <input type="text" placeholder="Item name" class="req-name" required>
            <input type="text" placeholder="Quantity (e.g., 10kg/week)" class="req-quantity" required>
            <select class="req-category" required>
                <option value="">Category</option>
                <option value="vegetables">Vegetables</option>
                <option value="spices">Spices</option>
                <option value="oil">Cooking Oil</option>
                <option value="flour">Flour & Grains</option>
                <option value="dairy">Dairy Products</option>
                <option value="meat">Meat & Poultry</option>
            </select>
        </div>
    `;
}

function addRequirementField() {
    const container = document.getElementById('requirementsContainer');
    const currentFields = container.querySelectorAll('.requirement-item').length;
    
    if (currentFields >= 5) {
        showNotification('Maximum 5 requirements allowed', 'warning');
        return;
    }
    
    const newField = document.createElement('div');
    newField.className = 'requirement-item';
    newField.innerHTML = `
        <input type="text" placeholder="Item name" class="req-name" required>
        <input type="text" placeholder="Quantity (e.g., 10kg/week)" class="req-quantity" required>
        <select class="req-category" required>
            <option value="">Category</option>
            <option value="vegetables">Vegetables</option>
            <option value="spices">Spices</option>
            <option value="oil">Cooking Oil</option>
            <option value="flour">Flour & Grains</option>
            <option value="dairy">Dairy Products</option>
            <option value="meat">Meat & Poultry</option>
        </select>
        <button type="button" onclick="removeRequirementField(this)" style="background: #e74c3c; color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer; margin-left: 10px;">Remove</button>
    `;
    container.appendChild(newField);
}

function removeRequirementField(button) {
    const container = document.getElementById('requirementsContainer');
    const currentFields = container.querySelectorAll('.requirement-item').length;
    
    if (currentFields <= 1) {
        showNotification('At least one requirement is needed', 'warning');
        return;
    }
    
    button.parentElement.remove();
}

// Handle vendor form submission
document.addEventListener('DOMContentLoaded', function() {
    const addVendorForm = document.getElementById('addVendorForm');
    if (addVendorForm) {
        addVendorForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = document.getElementById('vendorName').value;
            const businessType = document.getElementById('vendorBusinessType').value;
            const location = document.getElementById('vendorLocation').value;
            const rating = parseFloat(document.getElementById('vendorRating').value);
            
            // Get requirements
            const requirementItems = document.querySelectorAll('.requirement-item');
            const requirements = [];
            
            let isValid = true;
            requirementItems.forEach(item => {
                const reqName = item.querySelector('.req-name').value.trim();
                const reqQuantity = item.querySelector('.req-quantity').value.trim();
                const reqCategory = item.querySelector('.req-category').value;
                
                if (reqName && reqQuantity && reqCategory) {
                    requirements.push({
                        name: reqName,
                        quantity: reqQuantity,
                        category: reqCategory
                    });
                } else {
                    isValid = false;
                }
            });
            
            if (!isValid) {
                showNotification('Please fill in all requirement fields', 'error');
                return;
            }
            
            if (requirements.length === 0) {
                showNotification('At least one requirement is needed', 'error');
                return;
            }
            
            // Create new vendor object
            const newVendor = {
                id: vendors.length + 1,
                name: name,
                rating: rating,
                location: location,
                businessType: businessType,
                requirements: requirements
            };
            
            // Add to vendors array
            vendors.push(newVendor);
            
            // Update the marketplace display
            if (currentUserType === 'supplier' && currentSection === 'marketplace') {
                displayVendors(vendors);
            }
            
            // Close modal and show success message
            closeAddVendorModal();
            showNotification(`✅ ${name} has been added to the vendor marketplace!`, 'success');
        });
    }
});

//



