document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();  

    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const complaint = document.getElementById('complaint').value;

    
    if (phone === '' || email === '' || complaint === '') {
        alert('Todos os campos são obrigatórios!');
        return;
    }

    
    const message = document.getElementById('message');
    message.textContent = 'Sua reclamação foi enviada com sucesso!';

    document.getElementById('contact-form').reset();
});
