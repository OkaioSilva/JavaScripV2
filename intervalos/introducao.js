// setTimeout(fn,ms) - agenda uma função para ser executada uma única vez
// setInterval(fn, ms) - agenda uma função para ser executada a cada tempo estipulado
// clearTimeout(id), clearInterval(id) - limpam


let n = 0
setTimeout(function(){
    console.log("timeOut depois de 2000ms")
}, 2000)
const intervalo = setInterval(function () {
    console.log("interval n:", n++)
    if(n > 10){
        clearInterval(intervalo)
    }
}, 1200)