(function () {
    const dateEventDom = document.querySelector('.hero-content h1 span').innerText
    const dateEvent = getDate(dateEventDom)
    console.log(dateEvent)

    const today = new Date()

    let left = dateEvent.getTime() - today.getTime()


    const one_minute =  60 * 1000
    const one_hour = 60 * one_minute
    const one_day = 24 * one_hour // 24 * 60 * 60 * 1000 == 1 dia
   
   
     // quantos dias cabem no número dentro de left ( os milisegundos que faltam para o dia estipulado)
    const days_left = parseInt(left / one_day)
    console.log(days_left)
    // agora que tenho os dias que faltam para a data estipulada, preciso subtrair da variável left
    left = left - days_left * one_day
    
    // agora para horas
    
    const hoursLeft = parseInt(left / one_hour)
    left = left - hoursLeft * one_hour
    console.log(left)
    
    // minutos
    const minutesLeft = parseInt(left / one_minute)
    left = left - minutesLeft * one_minute
    console.log(left)
    
    const secondsLeft = parseInt(left / 1000)
    console.log(left)

    addLeftTime(days_left, hoursLeft, minutesLeft, secondsLeft)


    
    
    function addLeftTime(d, h, m, s){
        const p = document.createElement('p')
        p.textContent = `Contagem regressiva: faltam ${d} dias, ${h} horas, ${m} minutos, ${s} segundos `
        document.querySelector('.hero-content').appendChild(p)
    }

    function getDate(str){
        const [date, hour] = str.split(' ')
        const [day, month, year] = date.split('/')
        const [h, minute] = hour.split('H')
        
        return new Date(year, month - 1, day, h, minute)
    }

})()