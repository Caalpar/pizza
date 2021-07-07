import express from 'express'
import {ConfirmOrder,CreatePedido,AddDelivery,GetPedidoFromID,GetPedidosFromDelivery,GetPedidos,GetOrederState} from '../../mongodb/Controllers/pedido'
const router = express.Router();

router.post('/create',(req,res)=>{
    let {id_cliente,id_Pizzeria,ids_menu,details} = req.body
    CreatePedido(id_cliente,id_Pizzeria,ids_menu,details,res)
})

router.post('/adddelivery',(req,res)=>{
    let {_id,_id_delivery} = req.body
    AddDelivery(_id,_id_delivery,res)
})

router.post('/orderconfirm',(req,res)=>{
    let {_id} = req.body
    ConfirmOrder(_id,res)
})

router.get('/:id',(req,res)=>{
    let id =  req.params.id
    GetOrederState(id,res)
})

router.get('/delivery/:id',(req,res)=>{
    let id =  req.params.id
    GetPedidosFromDelivery(id,res)
})

router.get('/pizzeria/:id',(req,res)=>{
    let id =  req.params.id
    GetPedidos(id,res)
})


module.exports = router;