
const Usuarios = require('../../db/models/Usuarios');
const Service = require('../../db/service')


class UsuariosService extends Service {
    constructor() {
		super();
	}

    async crearUsuario(usuario){
        try {
            const nuevo_usuario = await Usuarios.crearUsuario(usuario)
            return nuevo_usuario
        } catch (error) {
            console.error("Error al guardar usuario", error);
            throw error
        }
    }


    async allUsuarios(){
        try {
            const allusuarios = await Usuarios.getAllUsuarios()
            return allusuarios
        } catch (error) {
            console.error("Error al obtener todos los usuarios", error);
            throw error
        }
    }

}

module.exports = UsuariosService