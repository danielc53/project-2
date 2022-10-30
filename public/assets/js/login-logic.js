const login = document.getElementById('login-btn');
const username = document.getElementById('username-input');
const password = document.getElementById('password-input');

login.addEventListener('click', async (e) => {
    try{ 
    e.preventDefault()
    const formBody = {
        username: username.value,
        password: password.value,
    }
    console.log(formBody);
    const response = await fetch('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify(formBody),
        headers: {
            'Content-Type': "application/json"
        },
    }).then((res) => {
        return res.json()
    })
    if (response.successful) {
        window.location.href = '/'
    }
    console.log('response', response)
    } catch (err) {
        console.log(err)
    }
});

