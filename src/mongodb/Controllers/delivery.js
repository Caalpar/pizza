
import Delivery from '../Models/delivery'
import {SendClient} from '../../tools/tools'

export const CreateDelivery = (_name,last_name,matricula,vehiculo,res) =>{
    
    Delivery.findOne({_name:_name},(err,delivery)=>{
        
        if(err) throw err

        if(!delivery)
        {
            const new_delivery = new Delivery()
            new_delivery._name = _name
            new_delivery.last_name = last_name
            new_delivery.matricula = matricula
            new_delivery.vehiculo = vehiculo

            new_delivery.save((err,data)=>{
                if(err) throw err

                if(data)  
                    SendClient(res,{msg:"el delivery fue creado correctamente"},data)
                
            })

        }

        else  
            SendClient(res,{msg:"el delivery ya existe"})
    })
}

export const GetDelivery = (_id,res) => {
    const delivery = Delivery.findOne({_id:_id},{__v:0},(err,delivery)=>{
        if(err) throw err
        if(delivery)
            SendClient(res,{msg:"se encontro el delivery correctamente",delivery})
        else
            SendClient(res,{msg:"no se encontro el delivery"})
        
    })
 
}

export const Get_Delivery = (_id) => {
    const delivery = Delivery.findOne({_id:_id}).exec()
    return delivery
}


export const GetDeliverys = (res) => {
    const delivery = Delivery.find({},{__v:0},(err,deliverys)=>{
        if(err) throw err
        if(deliverys)
         SendClient(res,{msg:"se encontraron  los deliverys correctamente",deliverys})
        else
         SendClient(res,{msg:"no se encontro el delivery"})

    })
    
}

export const Get_Deliverys = (res) => {
    const delivery = Delivery.find({}).exec()
    return delivery
    
}
