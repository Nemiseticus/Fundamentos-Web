
/* 
Case Sensitive = Reconhece letras maiúscilas e minúsculas

por Tag: getElementByTagName()
por Id: getElementById()
por Nome: getElementsByName()
por Classe: getElementsByClassName()
por Seletor: querySelector()
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')

nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length< 3) {
        txtNome.innerHTML = 'Nome Inválido'
        txtNome.style.color = 'red'
    } else {
        txt.innerHTML = 'Nome Válido'
        txt.style.color = 'green'
    }
}
function validaEmail() {
       let textEmail = document.querySelector('#txtEmail')
       if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = 'Email Inválido'
        txtEmail.style.color = 'red'
       } else{
           txtEmail.innerHTML = 'E-mail Válido'
           txtEmail.style.color = 'green'
       }
}