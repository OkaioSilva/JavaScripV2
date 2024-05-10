const email = document.querySelector('#txtEmail')


function editarEmail(){
    email.disabled = false
    email.focus() 
}

function disableEmail(){
    email.disabled = true
}