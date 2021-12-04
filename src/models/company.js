import {Schema,model} from 'mongoose';

const companySchema = new Schema({
    nombre:{
        type: String,
        unique: true
    },
    telefono:String,
    direccion:String,
    lat:Number,
    long:Number,
    correo:String,
    descripcion:String,
    resenas:Array,
    categoria:String
},{
    timestamps: true,
    versionKey:false
});

export default model('companies', companySchema);