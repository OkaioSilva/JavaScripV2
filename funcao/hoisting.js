// Chamada da função antes do corpo da função, funciona ? sim
// Por quê?
/*  Porque no momento do parcelamento desse JavaScript, todas as funções elas são, digamos assim, içadas
    para o topo do arquivo.
    Então, nesse momento, aqui na linha um do meu arquivo, essa função já encontra se disponível. */
teste()

function teste() {
    console.log('teste')
}


// O mesmo não ocorre com as functions Expression

/* 
    teste()
    const teste = function teste(){
        console,log('teste')
    }

*/

