import {Schema,model} from 'mongoose';

const billSchema = new Schema({
    products:Array,
    orderId:String,
    user:String,
    driverId:String,
    deliveryAddress:String,
    purchasePrice:Number,
    ISV:Number,
    adminCommission:Number,
    driverCommission:Number,
    date:Date,
    total: Number,
    sales:Number
},{
    timestamps: true,
    versionKey:false
});

export default model('bills', billSchema);