const submit = document.getElementById('register-btn');
const firstName = document.getElementById('first-name-input');
const lastName = document.getElementById('last-name-input');
const emailInput = document.getElementById('email-input');
const userNameInput = document.getElementById('username-input');
const passwordInput = document.getElementById('password-input');

submit.addEventListener('click', async (e) => {
    try{ 
    e.preventDefault()
    const formBody = {
        first_name: firstName.value,
        last_name: lastName.value,
        email: emailInput.value,
        username: userNameInput.value,
        password: passwordInput.value,
    }
    console.log(formBody);
    //responds with 404 not found
    //api/authRoute/register :: ../../../../controllers/api/authRoute/reigster :: /api/auth :: /api/authRoute :: /controllers/api/authRoute/reigster :: /controllers/api/authRoute :: /controllers/api/auth
    const response = await fetch('/api/auth/register', {
        method: 'POST',
        body: JSON.stringify(formBody),
        headers: {
            'Content-Type': "application/json"
        },
    }).then((res) => {
        return res.json()
    })
    console.log('response', response)
    } catch (err) {
        console.log(err)
    }
});




