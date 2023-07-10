
const getFeriadosDelMes = (feriados) => {
    const mes = new Date().getMonth() + 1;
    const year = new Date().getFullYear()
    const feriadosDelMes = []
    feriados.forEach((feriado) => {
        const fecha = feriado.date.slice(0, -3)
        fecha === `${year}-0${mes}` && feriadosDelMes.push(feriado)
    });
    return feriadosDelMes
}

module.exports = {
    getFeriadosDelMes
}