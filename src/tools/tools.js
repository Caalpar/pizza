import fs from 'fs'
import path from 'path'

export const SendClient = (res,object,con = true) =>
{
    if(con)
        console.log(object.msg)
    if(res!==null && typeof res!='undefined') 
        res.json(object)
}

export const DeleteImg = (name_img) =>{
    let img_path = path.join(__dirname,'../assets/imgs/')
    img_path += name_img
    try {
        fs.unlinkSync(img_path)
      } catch(err) {
        console.error(err)
      }
}





