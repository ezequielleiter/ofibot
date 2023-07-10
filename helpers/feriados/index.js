const mensajeDeFeriado = (feriados = []) => {
    const listaDeMensaje = []

    feriados.forEach((feriado) => {
        const msj = `${feriado.date}: ${feriado.localName}`
        return listaDeMensaje.push(msj)
    })

    return `${listaDeMensaje.map((m) => {return `${m}\n`})}`
}
module.exports = {
    mensajeDeFeriado
}