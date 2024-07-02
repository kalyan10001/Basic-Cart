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

async function fetchProducts() {
    await fetch('products.json')
        .then(response => response.json())
        .then(data => {
            let productsContainer = document.getElementById('products');
            productsContainer.innerHTML = '';
            data.products.forEach(product => {
                let productElement = document.createElement('div');
                productElement.classList.add('product');
                productElement.innerHTML = `
                    <img src="${product.image}" alt="image">
                    <div class="details">
                        <h3>${product.name}</h3>
                        <p>Price: ₹${product.price}</p>
                        <p>description: ${product.description}</p>
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





