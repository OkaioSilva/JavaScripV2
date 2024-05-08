/*  Passo 1
    Construir uma função para calcular o IMC

    Requesitos:
    IMC = peso / altura²;
    Deve retornar um único número;
    Deve gerar erro se receber um parâmetro que não seja; número;
    Deve retornar erro caso não receba nenhum parâmentro.
*/
/* 
    Passo 2
    Construir uma função para classificar o IMC
    Deve receber um número(IMC);
    Deve retornar uma string;
    Deve gerar erro se receber um parâmetro que não seja; número;
    Deve retornar erro caso não receba nenhum parâmentro.

*/
/* 
    Classificação               IMC       
    Muito abaixo do peso   = 16 a 16.9 Kg/m²       
    abaixo do peso         = 17 a 18.4 Kg/m²
    peso normal            = 18.5 a 24.9 Kg/m²
    acima do peso          = 25 a 29.9 Kg/m²
    obesidade grau I       = 30 a 34.9 Kg/m²
    obesidade grau II      = 35 a 40 Kg/m²
    obesidade grau III     = + 40 Kg/m²
*/



let peso = document.querySelector("#peso")
let altura = document.querySelector("#altura")
let res = document.querySelector('#res')
let imc = 0
function calcImc() {
    if (peso.value.length === 0 || altura.value.length === 0) {
        throw Error('Adicione númerosm, ou números válidos')
    } else{
        let p = Number(peso.value)
        let a = Number(altura.value)
        imc = p / (a * a) 
    }
    if(imc < 16.9){
        res.innerHTML = `Muito abaixo do peso. Seu imc é de: ${imc}`
    } else if(imc < 18.4){
        res.innerHTML = `Abaixo do peso. Seu imc é de: ${imc}`
    } else if(imc < 24.9){
        res.innerHTML = `Peso normal. Seu imc é de: ${imc}`
    } else if(imc < 29.9){
        res.innerHTML = `Acima do peso. Seu imc é de ${imc}`
    } else if(imc < 34.9){
        res.innerHTML = `Obesidade grau I. Seu imc é de ${imc}`
    } else if( imc < 40){
        res.innerHTML = `Obesidade grau II. Seu imc é de ${imc}`
    } else{
        res.innerHTML += `Obesidade grau III. Seu imc é de ${imc}`
    }
    
}    
