const { default: axios } = require('axios');
const { getFeriadosDelMes } = require('../handlers');

const getFeriados = async ({delMes = false}) => {
    try {
        const year = new Date().getFullYear()
        const feriados = await axios.get(`https://date.nager.at/api/v3/PublicHolidays/${year}/AR`);

        if (delMes) {
            const feriadoDelMes = getFeriadosDelMes(feriados.data)
            return feriadoDelMes
        }
        return feriados.data
    }catch (error) {
        console.log(error);
        return error
    }
    
}

module.exports = {
    getFeriados
}