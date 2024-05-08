(function(){
    const nomeUsuario = 'José'
    if(nomeUsuario){
        const topBarElemento = document.createElement('div')
        topBarElemento.className = 'top-bar'
        topBarElemento.innerHTML = ` <p> olá, <b> ${nomeUsuario} </b></p> `
        
        // inserir isso antes do hero-content
        
        //sintaxe:
        
        //elementoPai.insertBefore(novoElemento, elementoReferencia)
        const pai = document.querySelector('.hero')
        pai.insertBefore(topBarElemento, pai.firstElementChild)
    }
})()