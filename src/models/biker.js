import {Schema,model} from 'mongoose';

const bikerSchema = new Schema({
    nombre: String,
    apellido: String,
    DNI: String,
    fechaNacimiento: Date,
    telefono: String,
    ciudad: String,
    departamento: String,
    placa: String,
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

export default model('bikers', bikerSchema);