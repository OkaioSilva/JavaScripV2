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
            alert('Preencha todos os campos')
            e.preventDefault()
            txtTitulo.focus()
        }
    })
})()