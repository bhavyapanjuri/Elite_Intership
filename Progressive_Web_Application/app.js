document.addEventListener('DOMContentLoaded', () => {
  const blankImg = "https://via.placeholder.com/400x250?text=No+Image";
  const products = [
    {
      name: "Shoes",
      price: "₹999",
      img: blankImg,
      rating: "4.2",
      offer: "20% OFF"
    },
    {
      name: "Watch",
      price: "₹1999",
      img: blankImg,
      rating: "4.5",
      offer: "10% OFF"
    },
    {
      name: "Smartphone",
      price: "₹15,999",
      img: blankImg,
      rating: "4.6",
      offer: "15% OFF"
    },
    {
      name: "Headphones",
      price: "₹1,299",
      img: blankImg,
      rating: "4.3",
      offer: "25% OFF"
    },
    {
      name: "Backpack",
      price: "₹799",
      img: blankImg,
      rating: "4.1",
      offer: "30% OFF"
    },
    {
      name: "Laptop",
      price: "₹49,999",
      img: blankImg,
      rating: "4.7",
      offer: "12% OFF"
    },
    {
      name: "Fitness Band",
      price: "₹2,499",
      img: blankImg,
      rating: "4.4",
      offer: "18% OFF"
    },
    {
      name: "Bluetooth Speaker",
      price: "₹1,599",
      img: blankImg,
      rating: "4.5",
      offer: "22% OFF"
    }
  ];

  let cartCount = 0;
  const list = document.getElementById("product-list");

  function renderProducts(filter = "") {
    list.innerHTML = "";
    products
      .filter(p => p.name.toLowerCase().includes(filter.toLowerCase()))
      .forEach(p => {
        list.innerHTML += `
          <div class="product-card">
            <img src="${p.img}" alt="${p.name}">
            <h3>${p.name}</h3>
            <div class="rating">⭐ ${p.rating}</div>
            <div class="offer">${p.offer}</div>
            <div class="price">${p.price}</div>
            <button class="add-cart-btn">Add to Cart</button>
          </div>
        `;
      });

    // Add event listeners for Add to Cart buttons
    document.querySelectorAll('.add-cart-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        cartCount++;
        document.getElementById('cart-count').textContent = cartCount;
      });
    });
  }

  renderProducts();

  // Search functionality
  document.getElementById('search').addEventListener('input', function() {
    renderProducts(this.value);
  });
});

// Register Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js')
    .then(() => console.log('Service Worker registered'));
}

// Push Notification
if ('Notification' in window) {
  Notification.requestPermission().then(permission => {
    if (permission === "granted") {
      new Notification("Welcome to ShopEasy!", {
        body: "You’ll get updates on best offers!",
        icon: "images/icon-192.png"
      });
    }
  });
}
