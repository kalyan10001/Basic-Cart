document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();
    let username = document.getElementById('regUsername').value;
    let email = document.getElementById('regEmail').value;
    let password = document.getElementById('regPassword').value;
    let userId = 'user_' + new Date().getTime();

    console.log('Registering User:', { userId, username, email, password });

    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({ userId, username, email, password });
    localStorage.setItem('users', JSON.stringify(users));

    document.getElementById('regMessage').innerText = 'Registered successfully! Your User ID: ' + userId;
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
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {
            let productsContainer = document.getElementById('products');
            productsContainer.innerHTML = '';
            data.forEach(product => {
                let productElement = document.createElement('div');
                productElement.classList.add('product');
                productElement.innerHTML = `
                    <img src="${product.image}" alt="${product.title}">
                    <div class="details">
                        <h3>${product.title}</h3>
                        <p>Price: $${product.price}</p>
                    </div>
                `;
                productsContainer.appendChild(productElement);
            });
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

window.addEventListener('beforeunload', function () {
    localStorage.removeItem('loggedInUser');
});



