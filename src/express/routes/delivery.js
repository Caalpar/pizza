import express from 'express'
import {CreateDelivery,GetDelivery,GetDeliverys} from '../../mongodb/Controllers/delivery'
const router = express.Router();


router.post('/create',(req,res)=>{
    let {name,last_name,matricula,vehiculo} = req.body
    CreateDelivery(name,last_name,matricula,vehiculo,res)
})

router.get('/:id',(req,res)=>{
    let id =  req.params.id
    GetDelivery(id,res)
})

router.get('/',(req,res)=>{    
    GetDeliverys(res)
})


module.exports = router;