import monggose from 'mongoose'
import {urlconnect} from './config'

monggose.connect(urlconnect,{ useNewUrlParser: true, useUnifiedTopology: true },(err,data)=>{
    if(err){
        console.log("error connecting to DB")
    }
    if(data){
        console.log("connected to DB");
    }}
  )