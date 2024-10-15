// Product array with objects
const products = [
    { id: 1, name: 'Product A' },
    { id: 2, name: 'Product B' },
    { id: 3, name: 'Product C' }
];

// Populate the product dropdown
const productSelect = document.getElementById('product');
products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
});

// localStorage counter for reviews
window.onload = function() {
    let reviewCount = localStorage.getItem('reviewCount') || 0;
    localStorage.setItem('reviewCount', ++reviewCount);
};
