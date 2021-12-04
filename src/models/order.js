import {Schema,model} from 'mongoose';

const orderSchema = new Schema({
    productoId:String,
    usuarioId:String,
    motoristaId:String,
    cantidad:Number,
    direccionEntrega:String,
    lat:Number,
    long: Number,
    estado:Number,
    detallesEstado:String,
    observacion:String,
    pago:Boolean
},{
    timestamps: true,
    versionKey:false
});

export default model('orders', orderSchema);