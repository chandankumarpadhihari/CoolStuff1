const swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    slidesPerView: 1,
    spaceBetween: 10,
    simulateTouch: true,
    grabCursor: true,
});

document.querySelector('.add-to-cart-btn').addEventListener('click', () => {
    const selectedSize = document.getElementById('size').value;
    console.log(`Added to cart: ${selectedSize}`);
    // Here you can add further functionality to handle the cart logic
});

        const addToCartBtn = document.querySelector('.add-to-cart-btn');

        addToCartBtn.addEventListener('click', () => {
            const selectedSize = document.getElementById('size').value;
            console.log(`Added to cart: ${selectedSize}`);

            // Store selected size in local storage
            localStorage.setItem('selectedSize', selectedSize);
            
            // Change button text to "Go to Cart"
            addToCartBtn.innerText = 'Go to Cart';

            // Redirect to cart page when clicked
            addToCartBtn.onclick = () => {
                window.location.href = 'cart.html'; // Navigate to the cart page
            };
        });

        document.addEventListener("DOMContentLoaded", function() {
            // Apply zoom effect to product images
            mediumZoom('.product-image');
        });
