const productsData = [
    {
        "id": 1,
        "name": "Apple",
        "image": "https://th.bing.com/th/id/OIP.yMPQZ-HF7pKK-NK3Yo5WywHaE5?rs=1&pid=ImgDetMain",
        "price": 30,
        "description": "Fresh red apple"
    },
    {
        "id": 2,
        "name": "Banana",
        "image": "https://th.bing.com/th/id/OIP.BZkbbfCybzvCQr47MRKe6wHaHa?rs=1&pid=ImgDetMain",
        "price": 60,
        "description": "Ripe banana"
    },
    {
        "id": 3,
        "name": "Milk",
        "image": "https://th.bing.com/th/id/OIP.rCaYUIS4xGuvUTX64vTZ8AHaHa?rs=1&pid=ImgDetMain",
        "price": 50,
        "description": "Fresh milk from local dairy"
    },
    {
        "id": 4,
        "name": "Bread",
        "image": "https://wallpaperaccess.com/full/4435101.jpg",
        "price":100,
        "description": "Whole wheat bread"
    },
    {
        "id": 5,
        "name": "Eggs",
        "image": "https://cdn0.woolworths.media/content/wowproductimages/large/777103.jpg",
        "price": 120,
        "description": "Organic free-range eggs"
    },
    {
        "id": 6,
        "name": "Orange Juice",
        "image": "https://thumbs.dreamstime.com/z/isolated-apricot-whole-single-fruit-leaf-white-background-fresh-closeup-217057750.jpg",
        "price": 90,
        "description": "Freshly squeezed orange juice"
    },
    {
        "id": 7,
        "name": "Cheese",
        "image": "https://c8.alamy.com/comp/2BBKJBX/cathedral-city-vintage-cheddar-cheese-cathedral-city-cheese-cathedral-cheese-cathedral-city-cheddar-cheese-cheddar-cheese-packet-pack-cheese-2BBKJBX.jpg",
        "price": 50,
        "description": "Imported cheddar cheese"
    },
    {
        "id": 8,
        "name": "Tomato",
        "image": "https://www.luluhypermarket.com/medias/18849-01.jpg-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wzNDQ3NDd8aW1hZ2UvanBlZ3xpbWFnZXMvaDYxL2gwMS85MDc5NzYxNzY0MzgyLmpwZ3xhN2ZiNWIzNmY1MzE4MDlkNGU2N2Q1ZTg1NGM1OGFmMGU5NjEwMjRmMWZjNjliMDU2NjkxNmJjMzlmYjc5YmQx",
        "price": 100,
        "description": "Ripe red tomato"
    },
    {
        "id": 9,
        "name": "Potato",
        "image": "https://th.bing.com/th/id/OIP.VWVE2cwRhllUYewtcd0WsAHaHa?rs=1&pid=ImgDetMain",
        "price": 20,
        "description": "Fresh potato"
    },
    {
        "id": 10,
        "name": "Chicken Breast",
        "image": "https://th.bing.com/th/id/OIP.PNxO5yoqe2T7qXuggKY82AHaFm?rs=1&pid=ImgDetMain",
        "price": 200,
        "description": "Skinless chicken breast"
    },
    {
        "id": 11,
        "name": "Spinach",
        "image": "https://th.bing.com/th/id/OIP.oN5JPe9_hZKaMck7Lq6xIwHaFp?rs=1&pid=ImgDetMain",
        "price": 10,
        "description": "Organic spinach leaves"
    },
    {
        "id": 12,
        "name": "Salmon",
        "image": "https://bing.com/th?id=OSK.069c26b1f5592d20d1c80edf9abc8510",
        "price": 300,
        "description": "Fresh Atlantic salmon fillet"
    },
    {
        "id": 13,
        "name": "Pasta",
        "image": "https://m.media-amazon.com/images/I/71DKvW9y30L._SL1000_.jpg",
        "price": 400,
        "description": "Italian pasta"
    },
    {
        "id": 14,
        "name": "Rice",
        "image": "https://th.bing.com/th/id/OIP.1wMW14MlzX-9NV32RTFhqgHaJT?rs=1&pid=ImgDetMain",
        "price": 1800,
        "description": "Long grain rice"
    },
    {
        "id": 15,
        "name": "Olive Oil",
        "image": "https://cdn.britannica.com/55/157155-050-D07F5610/Containers-olive-oil.jpg",
        "price": 300,
        "description": "Extra virgin olive oil"
    },
    {
        "id": 16,
        "name": "Coffee",
        "image": "https://www.williams-sonoma.com.au/site/WS/Product%20Images/espresso-powder-202038-0167-espresso-powder-z.jpg?resizeid=94&resizeh=960&resizew=960",
        "price": 200,
        "description": "Freshly ground coffee beans"
    },
    {
        "id": 17,
        "name": "Tea",
        "image": "https://th.bing.com/th?id=OPAC.FMVKqbcu0wi4IQ474C474&w=592&h=550&o=5&dpr=1.3&pid=21.1",
        "price": 240,
        "description": "Assorted tea leaves"
    },
    {
        "id": 18,
        "name": "Chocolate",
        "image": "https://th.bing.com/th/id/OIP.vcY97-Nb_LWXO5rfP1Ue7wAAAA?rs=1&pid=ImgDetMain",
        "price": 200,
        "description": "Dark chocolate bar"
    },
    {
        "id": 19,
        "name": "Yogurt",
        "image": "https://i5.walmartimages.com/asr/ff447503-c1a0-4f5b-9ad5-362953099c7a_1.e132e26e08010c5a2eb6873317df8761.jpeg",
        "price": 100,
        "description": "Greek yogurt"
    },
    {
        "id": 20,
        "name": "Applesauce",
        "image": "https://bing.com/th?id=OSK.298b4de9e96828e7cddfea2ce460f070",
        "price": 190,
        "description": "Natural applesauce"
    },
    {
        "id": 21,
        "name": "Avocado",
        "image": "https://th.bing.com/th/id/R.8f17417f3fea5a2d7341242f444da67d?rik=A%2fmqi%2fqCcfmDFg&riu=http%3a%2f%2fdoctormurray.com%2fwp-content%2fuploads%2f2014%2f01%2fAvocado_open.jpg&ehk=KYEOOJw%2fHB9U4qJ1TQ0tIbZooNvReKWEdJde%2b%2fvcIo8%3d&risl=&pid=ImgRaw&r=0",
        "price": 150,
        "description": "Ripe avocado"
    },
    {
        "id": 22,
        "name": "Honey",
        "image": "https://th.bing.com/th/id/OIP.51S_FuRWvtoHPBUVRRIVfAHaGW?rs=1&pid=ImgDetMain",
        "price": 500,
        "description": "Organic honey"
    }
];




document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();
    let username = document.getElementById('regUsername').value;
    let email = document.getElementById('regEmail').value;
    let password = document.getElementById('regPassword').value;
    let userId = 'user_' + new Date().getTime();
    let address=document.getElementById('textarea');
    let contact=document.getElementById('phno')
    console.log('Registering User:', { userId, username, email, password });

    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({ userId, username, email, password });
    localStorage.setItem('users', JSON.stringify(users));

    document.getElementById('regMessage').innerHTML = "<span style='color:green;'>Registartion Successful !!</span>";

   
    document.getElementById('details').innerHTML = `
    <div style="background-color: #f0f0f0; padding: 10px; border-radius: 5px;">
        <p><strong>USERNAME:</strong> ${username}</p>
        <p><strong>CUSTOMERID:</strong> ${userId}</p>
        <p><strong>EMAIL:</strong> ${email}</p>
    </div>
`;
    document.getElementById('registerForm').reset();
});

document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    let userId = document.getElementById('loginUserid').value;
    let password = document.getElementById('loginPassword').value;

    console.log('Attempting Login:', { userId, password });

    let users = JSON.parse(localStorage.getItem('users')) || [];
    console.log('Stored Users:', users);

    let user = users.find(user => user.userId === userId && user.password === password);

    if (user) {
        console.log('Login Successful:', user);
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        showHomepage();
    } else {
        console.log('Login Failed');
        document.getElementById('loginMessage').innerText = 'Invalid User ID or Password';
    }
});

function showHomepage() {
    document.getElementById('authBox').style.display = 'none';
    document.getElementById('homepage').style.display = 'block';
    fetchProducts();
}

function fetchProducts() {
    let productsContainer = document.getElementById('products');
    productsContainer.innerHTML = '';

    productsData.forEach(product => {
        let productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="details">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p>Price: $${product.price}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `;
        productsContainer.appendChild(productElement);
    });
}

function logout() {
    localStorage.removeItem('loggedInUser');
    document.getElementById('authBox').style.display = 'block';
    document.getElementById('homepage').style.display = 'none';
}

function showLogin() {
    document.getElementById('register').style.display = 'none';
    document.getElementById('login').style.display = 'block';
}

function showRegister() {
    document.getElementById('login').style.display = 'none';
    document.getElementById('register').style.display = 'block';
}

window.onload = function () {
    let loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (loggedInUser) {
        showHomepage();
    }
}





