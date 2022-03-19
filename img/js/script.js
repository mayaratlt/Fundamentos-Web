/*
Case Sensitive = reconhece letras maiusculas e minusculas

por Tag: getElementByTagName()
por id: getElementById()
por Nome: getElementsByName()
por Classe: getElementsByClassName()
por Seletor: querySelector()
*/

function validaEmail() {
    let txtEmail = document.querySelector("#txtEmail")

    if(email.value.indexOf('@') == -1 || email.value.indexOf(".") == -1 ) {
        txtEmail.innerHTML = "E-mail Inválido"
        txtEmail.style.color = "red"
    }else{
        txtEmail.innerHTML = "E-mail Válido"
        txtEmail.style.color = "green"
        emailOk = true
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector("#txtAssunto")

    if(assunto.value.length > 3 ) {
        txtAssunto.innerHTML = "Texto é muito grande, digite no máximo 100 caracteres"
        txtAssunto.style.color = "red"
        txtAssunto.style.display = "block" 
    }else{
        txtAssunto.style.display = "none"
        assuntoOk = true
    }
}

function enviar() {
    if(nomeOk == true && emailOk == true && assuntoOk == true) {
        alert("Formulário enviado com sucesso!")
    } else {
        alert("Preencha o formulário corretamente antes de enviar...")
    }
}
