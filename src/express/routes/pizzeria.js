import express from 'express'
import upload from '../../multer/index'
import {GetPizzeria,GetSatatePizzerias,SendHoursAndDaysSettings,CreatePizzeria,AddCategoria,EditCategoria,DeleteCategoria,AddMenu,EditMenu,DeleteMenu,GetPizzerias} from '../../mongodb/Controllers/pizzeria'

const router = express.Router();

router.get('/',(req,res)=>{
    let {_id_pizzeria} = req.body
    GetPizzeria(_id_pizzeria,res)
})

router.get('/pizzrias',(req,res)=>{
    GetPizzerias(res)
})


router.post('/sethoursanddays',(req,res)=>{
    let {id_pizzeria,hours_days} = req.body
    SendHoursAndDaysSettings(id_pizzeria,hours_days,res)
})

router.post('/updatepizzeriastate',(req,res)=>{

    let {open} = req.body
    GetSatatePizzerias(open,res)

})

router.post('/create',(req,res)=>{
    let {email,name,address,phone,user_id} = req.body
    CreatePizzeria(email,name,address,phone,user_id,res)
})

router.post('/addcategoria',(req,res)=>{
    console.log(req.body)
    let{_id_pizzeria,categoria} = req.body
    AddCategoria(_id_pizzeria,categoria,res)
})

router.put('/editcategoria',(req,res)=>{
    let{_id_pizzeria,categoria,color} = req.body
    EditCategoria(_id_pizzeria,categoria,color,res)
})

router.delete('/deletecategoria',(req,res)=>{
    let{_id_pizzeria,categoria,menu} = req.body
    DeleteCategoria(_id_pizzeria,categoria,menu,res)
})


router.post('/addmenu',upload.single('imge'),(req,res)=>{
    
   
    let{_id_pizzeria,categoria,menu} = JSON.parse(req.body.user_data) 
    AddMenu(_id_pizzeria,categoria,menu,res)
})

router.put('/editmenu',(req,res)=>{
    let{_id_pizzeria,categoria,menu} = req.body
    EditMenu(_id_pizzeria,categoria,menu,res)
})

router.delete('/deletemenu',(req,res)=>{
    let{_id_pizzeria,categoria,menu} = req.body
    DeleteMenu(_id_pizzeria,categoria,menu,res)
})




module.exports = router;