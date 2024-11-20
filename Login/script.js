function formSubmit() {
    const username = document.querySelector('#user').value;
    const password = document.querySelector('#senha').value;

    if (username === 'admin' && password === 'admin') {
        window.location.href = '/Page/page.html',true;
    } else {
        alert('Usuário ou senha incorretos');   
    } 
   
}
