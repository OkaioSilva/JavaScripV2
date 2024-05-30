(function () {
    'use strict'
    const txtTitulo = document.querySelector('#txtTitulo')
    const btn = document.querySelector('#btn')
    const formCadatro = document.querySelector('.formCadastro')

    formCadatro.addEventListener('submit', function (e) {
        if (!txtTitulo.value) {
            showErrorMessage('Preencha todos os campos', function () {
                txtTitulo.focus()
            })
        }
        e.preventDefault()
    })
    const feedbackMessage = document.querySelector('#feedbackMessage')
    const feedbackMessageCloseBtn = feedbackMessage.getElementsByTagName('button')[0]

    function showErrorMessage(msg, cb) {
        feedbackMessage.classList.add('show')
        feedbackMessage.getElementsByTagName('p')[0].textContent = msg

        feedbackMessageCloseBtn.focus()

        function hideErrorMessage() {
            console.log('clicou no close')
            feedbackMessage.classList.remove('show')

            feedbackMessageCloseBtn.removeEventListener('click', hideErrorMessage)
            feedbackMessageCloseBtn.removeEventListener('keyup', pressedKeyboardOnBtn)

            if (typeof cb === 'function') {
                cb()
            }
        }

        function pressedKeyboardOnBtn(e) {
            if (e.keyCode === 27) {
                hideErrorMessage()
            }
        }

        feedbackMessageCloseBtn.addEventListener('click', hideErrorMessage)
        feedbackMessageCloseBtn.addEventListener('keyup', pressedKeyboardOnBtn)
    }



    const txtDescricao = document.querySelector('#txtDescricao')
    const contadorContainer = document.querySelector('#contador')
    const resta = document.getElementsByTagName('span')[0]
    const maxima = txtDescricao.maxLength
    mostrarNumero(maxima)

    contadorContainer.style.display = 'block'

    function checkedLength() {
        let numeroLetrasDigitadas = this.value.length
        let caracterRestante = parseInt(maxima - numeroLetrasDigitadas)
        mostrarNumero(caracterRestante)
    }

    function mostrarNumero(n) {
        resta.textContent = n
    }
    txtDescricao.addEventListener('input', checkedLength)

    btn.disabled = true

    const chkAceito = document.querySelector('#chkAceito')
    chkAceito.addEventListener('change', function () {
        // btn.disabled = false
        btn.disabled = !this.checked
    })
})()