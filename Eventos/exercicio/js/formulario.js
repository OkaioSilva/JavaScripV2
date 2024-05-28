(function(){
    'use strict'

    const txtTitulo = document.getElementById('txtTitulo')
    const btn = document.getElementById('btn')
    const formCadastro = document.querySelector('.formCadastro')
    //btn.addEventListener('click', function(e){
    //    console.log(txtTitulo.value)
    //    if (!txtTitulo.value){
    //        alert('Preencha todos os campos')
    //        e.preventDefault() // previne o comportamento padrão, nesse caso, o envio do formulário

            // dar foco no input
    //        txtTitulo.focus()
    //    }
    //})

    // fazer o evento no envio do formulário
    formCadastro.addEventListener('submit', function(e){
        console.log(txtTitulo.value)
        if (!txtTitulo.value){
            showErrorMsg('Preencha todos os campos', function(){
                
                txtTitulo.focus()
            })
            e.preventDefault()
        }
    })
    const feedbackMessage = document.getElementById('feedbackMessage')
    const feedbackMessageCloseBtn = feedbackMessage.getElementsByTagName('button')[0]

    function showErrorMsg(msg, cb){ 
        //alert(msg)
        // feedbackMessage.setAttribute('class', 'show')
        // quando estamos trabalhando com classes, usar isso não é o ideal, pois posso ter mais de uma classe num elemento
        // quando estiver trabalhando com classes, o ideal é utilizar uma API específica para isso
        feedbackMessage.classList.add('show')
        feedbackMessage.getElementsByTagName('p')[0].textContent = msg

        if (cb === 'function'){
            cb()
        }

    }
    feedbackMessageCloseBtn.addEventListener('click', function(){
        feedbackMessage.classList.remove('show')
    })

    const txtDescricao = document.getElementById('txtDescricao')
    const contadorContainer = document.getElementById('contador')
    const resta = contadorContainer.getElementsByTagName('span')[0]
    const maxima = txtDescricao.maxLength
    mostrarNumero(maxima)

    contadorContainer.removeAttribute('style')

    function checkLength(){
        let nLetrasDigitadas = this.value.length
        let caracterRestante = parseInt(maxima - nLetrasDigitadas)
        mostrarNumero(caracterRestante)
    }
    function mostrarNumero(n){
        resta.textContent = n
    }
    // evento 'input' é sempre que ocorrer uma alteração no meu input
    txtDescricao.addEventListener('input', checkLength )

    btn.disabled = true
    const chkAceito = document.getElementById('chkAceito')
    
    function changechk(){
        btn.disabled = !this.checked
    }
    chkAceito.addEventListener('change', changechk)
})()