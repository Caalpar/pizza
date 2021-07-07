let my_orders  = $GetElement('my-orders')
let my_history  = $GetElement('my-orders-history')


function ShowMyOrders(order)
{


    if(order=='history')
    {
        my_orders.style.display = 'none'
        my_history.style.display = 'block'
    }

    if(order=='orders')
    {
        my_orders.style.display = 'block'
        my_history.style.display = 'none'
    }
}


function CreateMyOrders(_id,date,title,state,delivery,price,order)
{

    let html = `
    <div id='${_id}'>
    <span>${date}</span>
    <span>${title}</span>
    <span>${state}</span>
    <span>${delivery}</span>
    <span>${price}</span>
    </div>`

    if(order=='delivered')   
        my_history.innerHTML += html
       
    if(order=='process' || order=='in coming')
        my_orders.innerHTML += html
}


function UpdateMyOrders(id)
{
    fetch('/pedido/'+id, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => {
            

            if(data.delivery)
            {


                

                let delivery = $GetElementsByTagName($GetElement(data.pedido._id),'span')[3]
                let state = $GetElementsByTagName($GetElement(data.pedido._id),'span')[2]



                if(delivery.innerHTML == 'sin delivery')
                SnackBar('Tu pedido va en camino')

                let name = data.delivery._name+' '+data.delivery.last_name
                

                let state_text  = 'En camino'

                if(data.pedido.state=="delivered")                   
                    state_text = "Entregado"
                
                    
                
                state.innerHTML = state_text
                delivery.innerHTML = name
            }

        
            
        }).catch((error) => {
            console.log(error);
        })
}

window.addEventListener('load',function(event){
    let index = 0
    let index_history = 0

    setInterval(() => {

        let my_table_orders = $GetElementsByTagName(my_orders,'div')
        let my_table_orders_history = $GetElementsByTagName(my_history,'div')

        if(my_table_orders.length>0)
        {   
            UpdateMyOrders(my_table_orders[index].id)
        
            index++

            if(index == my_table_orders.length)
                index = 0
        }

        if(my_table_orders_history.length>0){            

                UpdateMyOrders(my_table_orders_history[index_history].id)
            
                index_history++
                if(index_history == my_table_orders_history.length)
                index_history = 0
            
        }

    }, 1000);
})
