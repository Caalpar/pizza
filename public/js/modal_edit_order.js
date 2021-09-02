


function CreateModalEditorder(pedidos) {
    let modal = new Modal('edit-order')

    // title
    let h1 = Create('h1')
    h1.innerHTML = 'Editar Pedido'

    //numero de orden
    let oreder_number = Create('h3')
    oreder_number.id = 'oreder-number-to-edit'
    oreder_number.innerHTML = 'o_number'

    //cliente
    let user = Create('h3')
    user.id = 'user-order-to-edit'
    user.innerHTML = 'client'

    // table oreder
    let table_order = Create('table')
    table_order.setAttribute('class', 'table-menu')
    // table order header
    let table_order_header = Create('thead')
    let h_order_col_1 = Create('th')
    let h_order_col_2 = Create('th')
    let h_order_col_3 = Create('th')
    let h_order_col_4 = Create('th')
    let h_order_col_5 = Create('th')

    h_order_col_1.innerHTML = 'categoria'
    h_order_col_2.innerHTML = 'título'
    h_order_col_3.innerHTML = 'precio'
    h_order_col_4.innerHTML = 'disponibilidad'
    h_order_col_5.innerHTML = 'agregar'

    table_order_header.appendChild(h_order_col_1)
    table_order_header.appendChild(h_order_col_2)
    table_order_header.appendChild(h_order_col_3)
    table_order_header.appendChild(h_order_col_4)
    table_order_header.appendChild(h_order_col_5)

    // table order body
    let table_order_body = Create('tbody')
    table_order_body.id = 'tbody-oreder-edit-1'

    // load table order
    table_order.appendChild(table_order_header)
    table_order.appendChild(table_order_body)

    // table 2 oreder edit
    let table_order_edit = Create('table')
    table_order_edit.setAttribute('class', 'table-menu')
    // table 2 order edit header
    let table_order_edit_header = Create('thead')
    let h_order_edit_col_1 = Create('th')
    let h_order_edit_col_2 = Create('th')
    let h_order_edit_col_3 = Create('th')
    let h_order_edit_col_4 = Create('th')
    let h_order_edit_col_5 = Create('th')

    h_order_edit_col_1.innerHTML = 'categoria'
    h_order_edit_col_2.innerHTML = 'título'
    h_order_edit_col_3.innerHTML = 'precio'
    h_order_edit_col_4.innerHTML = 'disponibilidad'
    h_order_edit_col_5.innerHTML = 'eliminar'

    table_order_edit_header.appendChild(h_order_edit_col_1)
    table_order_edit_header.appendChild(h_order_edit_col_2)
    table_order_edit_header.appendChild(h_order_edit_col_3)
    table_order_edit_header.appendChild(h_order_edit_col_4)
    table_order_edit_header.appendChild(h_order_edit_col_5)

    // table 2 order edit body
    let table_order_edit_body = Create('tbody')
    table_order_edit_body.id = 'tbody-oreder-edit-2'

    // table 2 order edit tfoot  
    let table_oreder_edit_tfoot = Create('tfoot')
    let tfoot_oreder_edit_tr = Create('tr')
    let tfoot_oreder_edit_td_total = Create('td')
    let tfoot_oreder_edit_td_relleno = Create('td')
    let tfoot_oreder_edit_td_price = Create('td')
    tfoot_oreder_edit_td_price.id = 'oreder-edit-td-price'
    tfoot_oreder_edit_td_price.innerHTML = '$0'
    tfoot_oreder_edit_td_total.innerHTML = "Total: "
    tfoot_oreder_edit_td_relleno.colSpan = '3'

    tfoot_oreder_edit_tr.appendChild(tfoot_oreder_edit_td_relleno)
    tfoot_oreder_edit_tr.appendChild(tfoot_oreder_edit_td_total)
    tfoot_oreder_edit_tr.appendChild(tfoot_oreder_edit_td_price)
    table_oreder_edit_tfoot.appendChild(tfoot_oreder_edit_tr)

    // load table 2 order edit
    table_order_edit.appendChild(table_order_edit_header)
    table_order_edit.appendChild(table_order_edit_body)
    table_order_edit.appendChild(table_oreder_edit_tfoot)

    // div table separate
    let div_conteiner = Create('div')

    div_conteiner.style.display = 'flex'
    div_conteiner.style.margin = '2px'
    div_conteiner.style.padding = '10px'

    let div_table_order = Create('div')
    let div_table_order_edit = Create('div')

    div_table_order.style.flex = '1 1 50%'
    div_table_order.style.padding = '5px'

    div_table_order_edit.style.flex = '1 1 50%'
    div_table_order_edit.style.padding = '5px'

    div_table_order.appendChild(table_order)
    div_table_order_edit.appendChild(table_order_edit)

    div_conteiner.appendChild(div_table_order)
    div_conteiner.appendChild(div_table_order_edit)

    //button 
    let button_edit_order = Create('button')
    button_edit_order.type = 'submit'
    button_edit_order.innerHTML = 'Editar'
    button_edit_order.setAttribute("onclick", "EditOrder()")


    //text area
    let div_text_area = Create('div')
    let titel_text_area = Create('h3')
    titel_text_area.innerHTML = 'Detalles'
    let text_area = Create('textarea')
    text_area.id = 'text-edit-oreder'
    text_area.style.width = '80%'
    text_area.style.height = '10vh'
    text_area.style.resize = 'none'
    div_text_area.appendChild(titel_text_area)
    div_text_area.appendChild(text_area)

    // add title to modal
    modal.setModalContent(h1)
    // add order number to modal
    modal.setModalContent(oreder_number)
    // add client to modal
    modal.setModalContent(user)
    //add div separate
    modal.setModalContent(div_conteiner)
    //add div text area
    modal.setModalContent(div_text_area)
    //add button
    modal.setModalContent(button_edit_order)



    pedidos.appendChild(modal.getModal())

}

function EditOrder() {

    if (temp.select_oreder) {

        let table_order_edit_body = document.getElementById('tbody-oreder-edit-2').rows
        let details = document.getElementById('text-edit-oreder').value
        let ids_menu = []
        let _id = temp.select_oreder.id

        for (let index = 0; index < table_order_edit_body.length; index++) {
            const id = table_order_edit_body[index].id.split('_')[5];
            ids_menu.push(id)
        }

        let order = { _id, ids_menu, details }

        fetch('/pedido/edit', {
            method: 'POST',
            body: JSON.stringify(order),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {

                if (data) {
                    location.reload();  
                }


            }).catch((error) => {
                console.log(error);
            })
    }
}

function Create(tag) {
    return document.createElement(tag)
}