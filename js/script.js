const data = [
    {
      id: 1,
      name: "Fire Boltt Ninja 2",
      img: "https://m.media-amazon.com/images/I/617eiZeFtNL._SL1500_.jpg",
      amt: 1599,
      seller: "Boltt Store",
      catagory: "Watch",
    },
  
    {
      id: 2,
      name: "Noise Pulse Go",
      img: "https://m.media-amazon.com/images/I/61akt30bJsL._SL1500_.jpg",
      amt: 1300,
      seller: "Noise Store",
      catagory: "Watch",
    },
  
    {
      id: 3,
      name: "boAt Xtend Pro",
      img: "https://m.media-amazon.com/images/I/61ZuL8CUigL._SL1500_.jpg",
      amt: 2799,
      seller: "boAt Watchs",
      catagory: "Watch",
    },
    {
      id: 4,
      name: "Lenovo Tab M8",
      img: "https://m.media-amazon.com/images/I/71SvqTFPXJL._SL1500_.jpg",
      amt: 9270,
      seller: "Lenovo Retail",
      catagory: "Tablets",
    },
    {
      id: 5,
      name: "Honor PAD X8",
      img: "https://m.media-amazon.com/images/I/710G-VKcgtL._SL1500_.jpg",
      amt: 12999,
      seller: "Honor india",
      catagory: "Tablets",
    },
  
    {
      id: 6,
      name: "IKALL N9 ",
      img: "https://m.media-amazon.com/images/I/7185GL6hPlL._SL1500_.jpg",
      amt: 3999,
      seller: "IKALL Store",
      catagory: "Tablets",
    },
  
    {
      id: 7,
      name: "Oppo Pad Air",
      img: "https://m.media-amazon.com/images/I/513FD4w8hGL._SL1500_.jpg",
      amt: 15999,
      seller: "Oppo Store",
      catagory: "Tablets",
    },
    {
      id: 8,
      name: "Acer EK220Q",
      img: "https://m.media-amazon.com/images/I/8150iUXkc5L._SL1500_.jpg",
      amt: 6249,
      seller: "Acer Store",
      catagory: "Monitors",
    },
    {
      id: 9,
      name: "Samsung 24",
      img: "https://m.media-amazon.com/images/I/81TjRLHaz1L._SL1500_.jpg",
      amt: 9799,
      seller: "Samsung Store",
      catagory: "Monitors",
    },
  
    {
      id: 10,
      name: "ZEBRONICS AC32FHD ",
      img: "https://m.media-amazon.com/images/I/813Y1TIZwfL._SL1500_.jpg",
      amt: 12799,
      seller: "ZEBRONICS Store",
      catagory: "Monitors",
    },

    {
      id: 11,
      name: "Amazfit GTS 2",
      img: "https://m.media-amazon.com/images/I/51T2nbc4v0L._SX679_.jpg",
      amt: 7999,
      seller: "Appario Retail Private Ltd",
      catagory: "Watch",
    },

    {
      id: 12,
      name: "Titan Crest Premium ",
      img: "https://m.media-amazon.com/images/I/719RiDAGXtL._SX679_.jpg",
      amt: 7995,
      seller: "Titan Company Ltd",
      catagory: "Watch",
    },

  ];
const productsContainer = document.querySelector(".products");
const categoryList = document.querySelector(".category-list");

function displayProducts(products) {
    if (products.length > 0) {
        const productDetails = products
            .map(
                (product) => `
                <div class="product">
                    <div class="img">
                        <img src="${product.img}" alt="${product.name}" />
                    </div>
                    <div class="product-details">
                        <span class="name">${product.name}</span>
                        <span class="amt">Rs.${product.amt}</span>
                        <span class="seller">${product.seller}</span>
                    </div>
                </div>`
            )
            .join("");

        productsContainer.innerHTML = productDetails;
    } else {
        productsContainer.innerHTML = "<h3>No Products Available</h3>";
    }
}

function setCategories() {
    const allCategories = data.map((product) => product.catagory);
    const catagories = [
      "All",
      ...allCategories.filter((product, index) => {
        return allCategories.indexOf(product) === index;
      }),
    ];

    categoryList.innerHTML = catagories.map((catagory) => `<li class="list-group-item">${catagory}</li>`).join("");

    categoryList.addEventListener("click", (e) => {
        const selectedCategory = e.target.textContent;
        selectedCategory === "All"
            ? displayProducts(data)
            : displayProducts(data.filter((product) =>  product.catagory == selectedCategory));
    });
}

const priceRange = document.querySelector("#priceRange");
const priceValue = document.querySelector(".priceValue");

function setPrices() {
    const priceList = data.map((product) => product.amt);
    const minPrice = Math.min(...priceList);
    const maxPrice = Math.max(...priceList);

    priceRange.min = minPrice;
    priceRange.max = maxPrice;
    priceValue.textContent = "Rs." + maxPrice;

    priceRange.addEventListener("input", (e) => {
        priceValue.textContent = "Rs." + e.target.value;
        displayProducts(data.filter((product) => product.amt <= e.target.value));
    });
}

const txtSearch = document.querySelector("#txtSearch");

txtSearch.addEventListener("keyup", (e) => {
    const value = e.target.value.toLowerCase().trim();
    if (value) {
        displayProducts(data.filter((product) => product.name.toLowerCase().includes(value)));
    } else {
        displayProducts(data);
    }
});

// Add this to your existing script or create a new file

// Share section functionality
const shareButton = document.querySelector('.share-button');

shareButton.addEventListener('click', () => {
  // Replace '#' with the URL you want to share
  const shareUrl = 'https://example.com';

  // Open a new window with the Facebook share dialog
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, 'Share on Facebook', 'width=600,height=400');
});


// Initial setup
displayProducts(data);
setCategories();
setPrices();
