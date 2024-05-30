(function () {
    'use strict'
    // variáveis 
    const txtTitulo = document.getElementById('txtTitulo')
    const btn = document.getElementById('btn')
    const formCadastro = document.querySelector('.formCadastro')
    const feedbackMessage = document.getElementById('feedbackMessage')
    const feedbackMessageCloseBtn = feedbackMessage.getElementsByTagName('button')[0]
    const txtDescricao = document.getElementById('txtDescricao')
    const contadorContainer = document.getElementById('contador')
    const resta = contadorContainer.getElementsByTagName('span')[0]
    const maxima = txtDescricao.maxLength
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
    formCadastro.addEventListener('submit', function (e) {
        console.log(txtTitulo.value)
        if (!txtTitulo.value) {
            showErrorMsg('Preencha todos os campos', function () {

                txtTitulo.focus()
            })
            e.preventDefault()
        }
    })

    function showErrorMsg(msg, cb) {
        // feedbackMessage.setAttribute('class', 'show')
        //quando estamos trabalhando com classes, usar isso não é o ideal, pois posso ter mais de uma classe num elemento, o ideal é utilizar uma API específica
        feedbackMessage.classList.add('show')
        feedbackMessage.getElementsByTagName('p')[0].textContent = msg
        feedbackMessageCloseBtn.focus()

        function hideErrorMessage() {
            feedbackMessage.classList.remove('show')
            feedbackMessageCloseBtn.removeEventListener('click', hideErrorMessage)
            feedbackMessageCloseBtn.removeEventListener('keyup', pressedKeyboardOnBtn)

            if (cb === 'function') {
                cb()
            }
        };

        function pressedKeyboardOnBtn(e) {
            if (e.keyCode === 27) {
                hideErrorMessage()
            }
        }

        feedbackMessageCloseBtn.addEventListener('click', hideErrorMessage)
        feedbackMessageCloseBtn.addEventListener('keyup', pressedKeyboardOnBtn)

    }

    mostrarNumero(maxima)

    contadorContainer.removeAttribute('style')

    function checkLength() {
        let nLetrasDigitadas = this.value.length
        let caracterRestante = parseInt(maxima - nLetrasDigitadas)
        mostrarNumero(caracterRestante)
    }
    function mostrarNumero(n) {
        resta.textContent = n
    }
    // evento 'input' é sempre que ocorrer uma alteração no meu input
    txtDescricao.addEventListener('input', checkLength)

    btn.disabled = true
    const chkAceito = document.getElementById('chkAceito')

    function changechk() {
        btn.disabled = !this.checked
    }
    chkAceito.addEventListener('change', changechk)
})()