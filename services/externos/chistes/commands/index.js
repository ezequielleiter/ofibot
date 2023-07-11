const { default: axios } = require('axios');

const getDatos = async () => {
    try {
        const datos = await axios.get(`https://v2.jokeapi.dev/joke/Any?lang=es`);
        return datos.data
    }catch (error) {
        console.log(error);
        return error
    }
    
}

module.exports = {
    getDatos
}