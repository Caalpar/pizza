const mongoose = require('mongoose');

const pedidoSchema = new mongoose.Schema({       
    id_user: String,
    id_pizzeria:String,
    ids_menu:[],
    id_delivery:String,
    date:Date,
    details:String,
    state:String,
    order_number:Number
});


module.exports = mongoose.model('Pedidos',pedidoSchema,'pedidoCollection');