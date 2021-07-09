import Pedidos from '../Models/pedido'
import { Get_Pizzeria, Get_Pizzerias } from './pizzeria'
import { Get_Client, GetClientes, Get_AllClientes, AddOrederClientes, UpdateOrederCliente } from './user'
import { GetDelivery, Get_Delivery, Get_Deliverys } from './delivery'
import { SendClient } from '../../tools/tools'




export const CreatePedido = (id_cliente, id_Pizzeria, ids_menu, details, res) => {

    Pedidos.find({}, (err, pedidos) => {

        if (err) throw err

        if (!pedidos) {
            Get_Pizzeria(id_Pizzeria).then(pizz => {
                if (pizz) {

                    Get_Client(id_cliente).then(client => {
                        if (client) {

                            if (pizz.OpenStored().open) {

                                let index_m = -1
                                let index_cat = -1
                                pizz.menus.forEach((c, index_c) => {
                                    if (index_m === -1) {
                                        index_cat = index_c
                                        ids_menu.forEach(id_menu_order => {
                                            index_m = c.menu.findIndex(c => c._id == id_menu_order)
                                        });


                                    }
                                });

                                if (index_cat !== -1 && index_m !== -1) {
                                    const new_pedido = new Pedidos()
                                    new_pedido.id_user = id_cliente
                                    new_pedido.id_pizzeria = id_Pizzeria
                                    new_pedido.ids_menu = ids_menu
                                    new_pedido.id_delivery = ''
                                    new_pedido.details = details
                                    new_pedido.date = new Date()
                                    new_pedido.state = 'process'
                                    new_pedido.order_number = 0
               

                                    new_pedido.save((err, data) => {
                                        if (err) throw err

                                        if (data) {
                                            let date_local = data.date.toLocaleString()
                                            console.log(data.order_number)
                                            AddOrederClientes(id_cliente, data._id, data.id_pizzeria, date_local, ids_menu, res)

                                        }


                                    })
                                }
                                else
                                    SendClient(res, { msg: "error al crear el pedido" })
                            }
                            else
                                SendClient(res, { msg: "el local esta cerrado" })
                        }
                        else
                            SendClient(res, { msg: "el cliente no existe" })

                    })
                }
                else
                    SendClient(res, { msg: "la pizzeria no existe" })
            })

        }
        else
        {
            Get_Pizzeria(id_Pizzeria).then(pizz => {
                if (pizz) {

                    Get_Client(id_cliente).then(client => {
                        if (client) {

                            if (pizz.OpenStored().open) {

                                let index_m = -1
                                let index_cat = -1
                                pizz.menus.forEach((c, index_c) => {
                                    if (index_m === -1) {
                                        index_cat = index_c
                                        ids_menu.forEach(id_menu_order => {
                                            index_m = c.menu.findIndex(c => c._id == id_menu_order)
                                        });


                                    }
                                });

                                if (index_cat !== -1 && index_m !== -1) {
                                    const new_pedido = new Pedidos()
                                    new_pedido.id_user = id_cliente
                                    new_pedido.id_pizzeria = id_Pizzeria
                                    new_pedido.ids_menu = ids_menu
                                    new_pedido.id_delivery = ''
                                    new_pedido.details = details
                                    new_pedido.date = new Date()
                                    new_pedido.state = 'process'
                                    let last_oreder = pedidos[pedidos.length-1].order_number

                                    console.log(pedidos[pedidos.length-1])
                                    if(last_oreder==100)
                                    last_oreder = 0
                                    else
                                    last_oreder++

                                    new_pedido.order_number = last_oreder
 

                                    new_pedido.save((err, data) => {
                                        if (err) throw err

                                        if (data) {
                                            let date_local = data.date.toLocaleString()
                                            console.log(data.order_number)
                                            AddOrederClientes(id_cliente, data._id, data.id_pizzeria, date_local, ids_menu, res)

                                        }


                                    })
                                }
                                else
                                    SendClient(res, { msg: "error al crear el pedido" })
                            }
                            else
                                SendClient(res, { msg: "el local esta cerrado" })
                        }
                        else
                            SendClient(res, { msg: "el cliente no existe" })

                    })
                }
                else
                    SendClient(res, { msg: "la pizzeria no existe" })
            })
        }
            

    })

}

export const GetOrederState = (_id, res) => {
    Pedidos.findOne({ _id: _id }, (err, pedido) => {
        if (err) throw err

        if (pedido) {
            Get_Pizzeria(pedido.id_pizzeria).then(pizz => {

                let state = pedido.state

                if(pizz)
                {
                    let open = pizz.OpenStored().open

                    Get_Deliverys().then(del => {



                        if (del) {
                            let index_delivery = del.findIndex(m => m._id == pedido.id_delivery)
                            let delivery = del[index_delivery]
                            
    
                            SendClient(res, { msg: "este es el estado del pedido", delivery, pedido,open }, false)
                        }
                        else {
                            SendClient(res, { msg: "este es el estado del pedido",state,open })
                        }
                    })
                }
                else
                SendClient(res, { msg: "no se encontro la pizzeria"})
            })

        }
        else {
            SendClient(res, { msg: "no se ha encontrado el pedido" })
        }
    })
}


export const AddDelivery = (_id, _id_delivery, res) => {


    Pedidos.findOne({ _id: _id }, (err, pedido) => {

        if (err) throw err

        if (pedido) {
            pedido.id_delivery = _id_delivery
            pedido.state = 'in coming'

            pedido.save((err, data) => {
                if (err) throw err

                if (data) {
                    SendClient(res, { msg: "se agrrego correctamente el delivery al pedido" })
                }
                else
                    SendClient(res, { msg: "se agrrego correctamente el delivery al pedido" })
            })
        }
    })
}

export const ConfirmOrder = (_id, res) => {


    Pedidos.findOne({ _id: _id }, (err, pedido) => {

        if (err) throw err

        if (pedido) {
            pedido.state = 'delivered'

            pedido.save((err, data) => {
                if (err) throw err

                if (data) {

                    UpdateOrederCliente(data.id_user, data._id, data.state, res)
                }
                else
                    SendClient(res, { msg: "no se a podido confirmar el pedido" })
            })
        }
    })
}

export const GetPedidoFromID = (_id, res) => {

    Pedidos.findOne({ _id: _id }, (err, pedido) => {
        if (err) throw err
        if (pedido) {


            Get_Pizzeria(pedido.id_pizzeria).then(pizz => {
                if (pizz) {
                    Get_Client(pedido.id_user).then(client => {
                        if (client) {
                            let menu = []
                            let oreders = []
                            let total = 0
                            let titulo = ''
                            let date = pedido.date.toLocaleString()
                            let n_order = pedido.order_number
                            let state = pedido.state
                            let count = 1
                            let open_shop = pizz.OpenStored().open

                            pedido.ids_menu.forEach(id_m => {

                                let temp_menu = null
                                pizz.menus.forEach(c => {

                                    c.menu.forEach(m => {
                                        if (id_m == m._id) {
                                            temp_menu = m
                                        }
                                    })

                                })

                                menu.push(temp_menu)

                            })




                            menu.forEach(m => {
                                total += m.precio
                            })


                            if (menu.length == 1) {
                                titulo = menu[0].titulo + '<br>'
                            }
                            else {
                                for (let index = 0; index < menu.length - 1; index++) {

                                    let index_next = index + 1
                                    const current_t = menu[index].titulo;
                                    const next_t = menu[index_next].titulo;

    

                                    if (current_t == next_t) {
                                        count++

                                        if (index_next == menu.length - 1) {
                                            if(count>1)
                                            titulo += count + 'X ' + next_t + '<br>'
                                            else
                                            titulo += next_t + '<br>'
                                        }

                                    }
                                    else {
                                        if(count>1)
                                        titulo += count + 'X ' + current_t + '<br>'
                                        else
                                        titulo += current_t + '<br>'
                                        count = 1
                                        if (index_next == menu.length - 1) {
                                            if(count>1)
                                            titulo += count + 'X ' + next_t + '<br>'
                                            else
                                            titulo += next_t + '<br>'
                                        }
                                    }


                                }
                            }

                           

                            oreders.push({ total, titulo, date, state, _id, n_order })



                            if (oreders.length > 0) {

                                if (pedido.id_delivery == '') {
                                    SendClient(res, { msg: "se a encontrado el pedido correctamente", oreders ,open_shop})
                                }
                                else {
                                    GetDelivery(pedido.id_delivery).then(delivery => {
                                        if (delivery) {
                                            SendClient(res, { msg: "se a encontrado el pedido correctamente", oreders, delivery ,open_shop})
                                        }
                                    })
                                }

                            }
                            else
                                SendClient(res, { msg: "no se ha encontrado el menu" })
                        }
                        else
                            SendClient(res, { msg: "no se ha encontrado el cliente" })
                    })
                }
                else
                    SendClient(res, { msg: "no se ha encontrado la pizzeria" })
            })

        }
        else
            SendClient(res, { msg: "no se ha encontrado el pedido" })


    })

}

export const GetPedidosFromDelivery = (_id_delivery, res) => {
    Pedidos.find({ id_delivery: _id_delivery }, (err, pedidos) => {
        if (err) throw err
        if (pedidos) {
            GetPizzerias().then(pizz => {
                if (pizz) {
                    GetClientes().then(clients => {
                        if (clients) {

                            let orderformdelivery = []

                            pedidos.forEach(pedido => {

                                let index_pizz = pizz.findIndex(p => p._id === pedido.id_pizzeria)
                                let index_cli = clients.findIndex(c => c._id === pedido.id_user)

                                if ((index_pizz !== -1) && (index_cli !== -1)) {
                                    let index_menu = -1
                                    let menu = []


                                    pizz[index_pizz].menus.forEach(cat => {
                                        pedido.id_menu.forEach(_id_menu => {
                                            index_menu = cat.menu.findIndex(m => m._id === _id_menu)
                                            if (index_menu !== -1) {
                                                menu.push(cat.menu[index_menu])
                                                index_menu = -1
                                            }
                                        })
                                    })

                                    if (menu.length > 0) {
                                        if (pedido._id_delivery !== null) {
                                            GetDelivery(pedido._id_delivery).then(delivery => {

                                                let order = {
                                                    pizz_name: pizz[index_pizz].name,
                                                    pizz_address: pizz[index_pizz].address,
                                                    pizz_phone: pizz[index_pizz].phone,
                                                    pizz_email: pizz[index_pizz].email,
                                                    menu: menu,
                                                    client: clients[index_cli],
                                                    date: pedido.date,
                                                }
                                                if (delivery)
                                                    order.delivery = delivery
                                                else
                                                    order.delivery = null

                                                orderformdelivery.push(order)
                                            })
                                        }
                                    }

                                }
                            });

                            if (orderformdelivery.length > 0)
                                SendClient(res, { msg: "se han enviado correctamente los pedidos", orderformdelivery })
                            else
                                SendClient(res, { msg: "no se encontraron los pedidos" })
                        }
                    })
                }
            })
        }
    })
}

export const GetPedidos = (_id_pizzeria, res) => {
    Pedidos.find({ id_pizzeria: _id_pizzeria }, (err, pedidos) => {
        if (err) throw err
        if (pedidos) {
            Get_Pizzerias().then(pizz => {
                if (pizz) {
                    Get_AllClientes().then(clients => {
                        if (clients) {


                            Get_Deliverys().then(del => {
                                if (del) {
                                    let oreders = []


                                    pedidos.forEach(pedido => {
                                        // aca esta el problema  

                                        let index_pizz = pizz.findIndex(p => p._id == pedido.id_pizzeria)
                                        let index_cli = clients.findIndex(c => c._id == pedido.id_user)


                                        if ((index_pizz !== -1) && (index_cli !== -1)) {
                                            let index_menu = -1
                                            let menu = []
                                            let index_delivery = -1
                                            let delivery = ''


                                            pizz[index_pizz].menus.forEach(cat => {
                                                pedido.ids_menu.forEach(_id_menu => {
                                                    index_menu = cat.menu.findIndex(m => m._id == _id_menu)
                                                    if (index_menu !== -1) {
                                                        menu.push({ menu: cat.menu[index_menu], categoria: cat.categoria })
                                                        index_menu = -1
                                                    }
                                                })
                                            })

                                            index_delivery = del.findIndex(m => m._id == pedido.id_delivery)
                                            delivery = del[index_delivery]



                                            if (menu.length > 0) {

                                                let order = {
                                                    pizz_name: pizz[index_pizz].name,
                                                    pizz_address: pizz[index_pizz].address,
                                                    pizz_phone: pizz[index_pizz].phone,
                                                    pizz_email: pizz[index_pizz].email,
                                                    menu: menu,
                                                    details: pedido.details,
                                                    client: clients[index_cli],
                                                    date: pedido.date.toLocaleString(),
                                                    delivery,
                                                    n_order: pedido.order_number,
                                                    _id: pedido._id,
                                                    state: pedido.state
                                                }

                                                oreders.push(order)

                                            }

                                        }

                                    });
                                    if (oreders.length > 0)
                                        SendClient(res, { msg: "se han enviado correctamente los pedidos", oreders }, false)

                                    else
                                        SendClient(res, { msg: "no se encontraron los pedidos" }, false)
                                }
                                else {
                                    let oreders = []



                                    pedidos.forEach(pedido => {

                                        let index_pizz = pizz.findIndex(p => p._id == pedido.id_pizzeria)
                                        let index_cli = clients.findIndex(c => c._id == pedido.id_user)



                                        if ((index_pizz !== -1) && (index_cli !== -1)) {
                                            let index_menu = -1
                                            let menu = []



                                            pizz[index_pizz].menus.forEach(cat => {
                                                pedido.ids_menu.forEach(_id_menu => {
                                                    index_menu = cat.menu.findIndex(m => m._id == _id_menu)
                                                    if (index_menu !== -1) {
                                                        menu.push({ menu: cat.menu[index_menu], categoria: cat.categoria })
                                                        index_menu = -1
                                                    }
                                                })
                                            })


                                            if (menu.length > 0) {

                                                let order = {
                                                    pizz_name: pizz[index_pizz].name,
                                                    pizz_address: pizz[index_pizz].address,
                                                    pizz_phone: pizz[index_pizz].phone,
                                                    pizz_email: pizz[index_pizz].email,
                                                    menu: menu,
                                                    details: pedido.details,
                                                    client: clients[index_cli],
                                                    date: pedido.date.toLocaleString(),
                                                    delivery: '',
                                                    _id: pedido._id
                                                }

                                                oreders.push(order)

                                            }

                                        }

                                    });
                                    if (oreders.length > 0)
                                        SendClient(res, { msg: "se han enviado correctamente los pedidos", oreders })

                                    else
                                        SendClient(res, { msg: "no se encontraron los pedidos" }, false)

                                }
                            })
                        }
                    })
                }
            })
        }
    }).sort('-date').limit(500)
}

