import mongoose from "mongoose";

const orderSchema= mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    orderItems:[{
        name:{type:String,reqired:true},
        qty:{type:Number,reqired:true},
        image:{type:String,reqired:true},
        price:{type:Number,reqired:true},
        product:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:'Product'
            }
    }],
    shippingAddress:{
        address:{type:String,reqired:true},
        city:{type:String,reqired:true},
        postalCode:{type:String,reqired:true},
        country:{type:String,reqired:true},
    },
    paymentMethod:{
        type:String,
        required:true,
    },
    paymentResult:{
        id:{type:String},
        status:{type:String},
        update_time:{type:String},
        email_address:{type:String}
        
    },
    taxPrice:{
        type:Number,
        required:true,
        default:0.0
    },
    shippingPrice:{
        type:Number,
        required:true,
        default:0.0
    },
    isPaid:{
        type:Boolean,
        required:true,
        default:false
    },
    paidAt:{
        type:Date
    },
    isDelivered:{
        type:Boolean,
        required:true,
        default:false
    },
    deliveredAt:{
        type:Date
    },

},{
    timestamps:true
})

const Order= mongoose.model('Order',orderSchema)

export default Order 