const form =  document.querySelector('form');
const nome =  document.querySelector('#nome');
const email =  document.querySelector('#email');
const assunto =  document.querySelector('#assunto');
const mensagem =  document.querySelector('#mensagem');
const error = document.querySelectorAll('.error');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const isValid = validateInputs();
    if (isValid && validateEmail(email.value)) {
        nome.value = '';
        email.value = '';
        assunto.value = '';
        mensagem.value = '';
    }
});


function setError(input, errorMsg) {
    const errorElement = input.nextElementSibling;
    errorElement.textContent = errorMsg;
    input.parentElement.classList.add('error-border');
}

function resetErrors() {
    error.forEach((msg) => {
        msg.textContent = "";
    });
    nome.parentElement.classList.remove('error-border');
    email.parentElement.classList.remove('error-border');
    assunto.parentElement.classList.remove('error-border');
    mensagem.parentElement.classList.remove('error-border');
}

function validateEmail(emailValue) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(emailValue);
}

function validateInputs() {
    const nomeValue = nome.value.trim();
    const emailValue = email.value.trim();
    const assuntoValue = assunto.value.trim();
    const mensagemValue = mensagem.value.trim();

    resetErrors();

    let isValid = true;

    if(nomeValue === '') {
        setError(nome, "O campo nome deve ser preenchido.");
        isValid = false;
    }

    if(emailValue === '') {
        setError(email, "O campo email deve ser preenchido."); 
        isValid = false;
    }

    if(assuntoValue === '') {
        setError(assunto, "O campo assunto deve ser preenchido."); 
        isValid = false;
    }

    if(mensagemValue === '') {
        setError(mensagem, "O campo mensagem deve ser preenchido.");
        isValid = false;
    }

    return isValid;
}