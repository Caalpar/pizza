import { resolvePreset } from '@babel/core';
import express from 'express'
import {CreateUser,AddPizzeriaID,ValidateUser,ValidateToken,GetAllClientes,Get_AllClientes,GetClient} from '../../mongodb/Controllers/user'


const router = express.Router();

router.post('/create',(req,res)=>{
    let {user_name,password,client,phone,address,neighborhood,reference,corner,last_name,first_name,email} = req.body
    CreateUser(user_name,password,client,phone,address,neighborhood,reference,corner,last_name,first_name,email,res)
})

router.put('/addpizzeria',(req,res)=>{
    let {user_name,pizzeria_id} = req.body
    AddPizzeriaID(user_name,pizzeria_id,res)
})

router.post('/login',(req,res)=>{
    console.log(req.body)
    let {user_name,password} = req.body
    ValidateUser(user_name,password,res)
})

router.get('/approved:user',(req,res)=>{
    let user =  req.params.user.split('&')
    ValidateToken(user[0],user[1],res)
})

router.get('/all',(req,res)=>{
    GetAllClientes(res)
})

router.get('/:id',(req,res)=>{
    let id =  req.params.id
    GetClient(id,res)
})

module.exports = router;