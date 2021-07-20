export const SendClient = (res,object,con = true) =>
{
    if(con)
        console.log(object.msg)
    if(res!==null && typeof res!='undefined') 
        res.json(object)
}