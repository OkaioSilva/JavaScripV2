function quantoFaltaPara(m, d) {
    const data_atual = new Date()
    data_atual.setHours(0)
    data_atual.setMinutes(0)
    data_atual.setSeconds(0)
    data_atual.setMilliseconds(0)

    let ano_atual = data_atual.getFullYear()

    const bday = new Date(ano_atual, m - 1, d)

    const d_AtualTs = +data_atual
    let bDayTs = +bday

    if (bDayTs < d_AtualTs){
        bday.setFullYear(++ano_atual)
        bDayTs = +bday
    }

    const um_dia = 24 * 60 * 60 * 1000

    const diferenca = bDayTs - d_AtualTs

    return parseInt(diferenca / um_dia)
}
