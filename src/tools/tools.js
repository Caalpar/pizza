export const SendClient = (res,object,con = true) =>
{
    if(con)
        console.log(object.msg)
    if(res!==null)
        res.json(object)
}