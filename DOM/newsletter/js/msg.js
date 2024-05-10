/* (function () {
    function enviar(){
        let email = document.querySelector('#txtEmail')
        if(email === 0){
            
        }
    }

})() */

function enviar(){
    let feedback = document.querySelector('#newsletterFeedback')
    let email = document.querySelector('#txtEmail')
    if(email.value.length === 0){
        feedback.innerHTML = '<p>Insira um email, por favor!</p>'
        console.log('Insira um email, por favor!')
    }else{
        feedback.innerHTML = `<p> Email: ${email.value} cadastrado com sucesso!</p>`
    }
}