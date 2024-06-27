document.getElementById('darkModeToggle').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});
document.addEventListener('DOMContentLoaded', function () {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItemsList = document.querySelector('.cart-items');
    const cartTotal = document.querySelector('.total-amount');
    const checkoutButton = document.querySelector('.checkout');
    const cartLogo = document.querySelector('.cart-container h2 .fa-shopping-cart');

    let cart = [];

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            const productId = button.dataset.id;
            const productName = button.dataset.name;
            const productPrice = parseFloat(button.dataset.price);

            const existingItem = cart.find(item => item.id === productId);

            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push({
                    id: productId,
                    name: productName,
                    price: productPrice,
                    quantity: 1
                });
            }

            displayCart();
            // تغيير لون الأيقونة إذا كانت السلة ليست فارغة
            if (cart.length > 0) {
                cartLogo.style.color = 'green'; // لون أخضر للأيقونة
            } else {
                cartLogo.style.color = 'blue'; // لون أزرق للأيقونة
            }
        });
    });

    function displayCart() {
        cartItemsList.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - ${item.quantity} x ${item.price} دينار`;
            cartItemsList.appendChild(li);

            total += item.quantity * item.price;
        });

        cartTotal.textContent = total;
    }

    checkoutButton.addEventListener('click', function () {
        // تنفيذ وظيفة الدفع هنا
        alert('تم الدفع بنجاح!');
        cart = []; // مسح السلة بعد الدفع
        displayCart(); // تحديث عرض السلة
        cartLogo.style.color = 'blue'; // إعادة لون الأيقونة إلى اللون الأزرق بعد الدفع
    });
});
