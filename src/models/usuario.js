import {Schema,model} from 'mongoose';

const usuarioSchema = new Schema({
    nombre: String,
    apellido: String,
    fechaNacimiento: Date,
    telefono: String,
    direccion: String,
    estado: Number,
    detallesEstado: String,
    correo: {
        type: String,
        unique: true
    },
    contrasena: {
        type: String,
        required: true
    }
},{
    timestamps: true,
    versionKey:false
});

export default model('usuarios', usuarioSchema);