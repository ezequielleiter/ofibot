// import mongoose, { Schema, model} from 'mongoose';

const mongoose = require("mongoose");

const Usuarios = new mongoose.Schema ({
    name: {type: 'string'},
    esCooperativa: {type: 'boolean'},
    cooperativa: {type: 'string'},
    email: {type: 'string'},
    cumpleaños: {type: 'string'}
})

Usuarios.statics.crearUsuario = async function (usuario) {
    const nuevo_usuario = await this.create(usuario);
    return nuevo_usuario
}

Usuarios.statics.getAllUsuarios = async function () {
    const allUsuarios = await this.find();
    return allUsuarios
}

if (!mongoose.models.Usuarios) {
	mongoose.model('Usuarios', Usuarios);
}

module.exports = mongoose.models.Usuarios;