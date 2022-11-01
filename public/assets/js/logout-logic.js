const logout = document.getElementById('logout-btn');

logout.addEventListener('click', async (e) => {
    try {
        await fetch('/api/auth/logout', {
            method: 'POST',
            headers: {
                'Content-Type': "application/json"
            },
        }).then((res) => {
            return res.json()
        })
        console.log('response', res)
    } catch (err) {
        console.log(err)
    }
});