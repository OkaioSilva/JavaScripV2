/* (function(){
    const nomeUsuario = prompt('digite seu nome:')
    document.querySelector('.top-bar p').innerHTML += nomeUsuario
    
})() */

(function(){
    const nomeUsuario = null
    const elemento = document.querySelector('.top-bar p')
    if(nomeUsuario){
        console.log(elemento.textContent)
        elemento.innerHTML +='<b>'+ nomeUsuario + '</b>'
    } else{
        elemento.parentElement.style.display = 'none' 
        //acessa o elemento pai
        // se eu quiser o elemento filho, basta digitar:
        // elemento.children
    }
    console.log(elemento)
})()