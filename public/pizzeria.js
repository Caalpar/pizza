



window.addEventListener("load", function (event) {

  let open_acordion = localStorage.getItem('open-acordion')



  if (open_acordion) {
    document.getElementById(open_acordion).click();
  }
  else
    document.getElementById("open-pedidos").click();

  GetALllDeliverys()
  if (id === null) {
    CreatePizzeria(id)
    setTimeout(() => {
      location.reload();
    }, 1000);
  }
  else {
    start()
  }
})

function start() {
  CreatePizzeria(id)

  setTimeout(() => {

    let menus = document.getElementById('Menus')
    let pedidos = document.getElementById('Pedidos')
    let deliverys = document.getElementById('Deliverys')
    let categorias = new Modal('categoria')
    let menu = new Modal('menu')
    let delivery = new Modal('delivery')
    let new_order = new Modal('new-order')
    let new_order_client = new Modal('client-new-order', '4')

    //elementos del modal del nuevo pedido
    let h1_new_order = document.createElement('h1')
    h1_new_order.innerHTML = 'Agregar Pedido'

    let table_new_oreder = document.createElement('table')
    let table_oreder = document.createElement('table')
    table_oreder.id = 'table_oreder'
    let div_new_oreder_row = document.createElement('div')
    let div_new_oreder_col = document.createElement('div')
    let div_new_oreder_col2 = document.createElement('div')

    div_new_oreder_row.style.display = 'flex'
    div_new_oreder_row.style.marginLeft = '-5px'
    div_new_oreder_row.style.marginRight = '-5px'

    div_new_oreder_col.style.flex = '50%'
    div_new_oreder_col.style.padding = '5px'

    div_new_oreder_col2.style.flex = '50%'
    div_new_oreder_col2.style.padding = '5px'

    table_oreder.setAttribute('class', 'table-menu')
    let table_oreder_header = document.createElement('thead')
    let table_oreder_header_colum_0 = document.createElement('th')
    let table_oreder_header_colum_1 = document.createElement('th')
    let table_oreder_header_colum_2 = document.createElement('th')
    let table_oreder_header_colum_3 = document.createElement('th')
    let table_oreder_header_colum_4 = document.createElement('th')
    let table_oreder_tbody = document.createElement('tbody')
    let table_oreder_tfoot = document.createElement('tfoot')
    let tfoot_oreder_tr = document.createElement('tr')
    let tfoot_oreder_td_total = document.createElement('td')
    let tfoot_oreder_td_relleno = document.createElement('td')
    let tfoot_oreder_td_price = document.createElement('td')
    tfoot_oreder_td_price.id = 'oreder-td-price'
    tfoot_oreder_td_price.innerHTML = '$0'
    tfoot_oreder_td_total.innerHTML = "Total: "
    tfoot_oreder_td_relleno.colSpan = '3'

    tfoot_oreder_tr.appendChild(tfoot_oreder_td_relleno)
    tfoot_oreder_tr.appendChild(tfoot_oreder_td_total)
    tfoot_oreder_tr.appendChild(tfoot_oreder_td_price)
    table_oreder_tfoot.appendChild(tfoot_oreder_tr)

    table_oreder_tbody.id = 'tbody-order'

    table_oreder_header_colum_0.innerHTML = 'categoria'
    table_oreder_header_colum_1.innerHTML = 'título'
    table_oreder_header_colum_2.innerHTML = 'precio'
    table_oreder_header_colum_3.innerHTML = 'disponibilidad'
    table_oreder_header_colum_4.innerHTML = 'eliminar'


    table_oreder_header.appendChild(table_oreder_header_colum_0)
    table_oreder_header.appendChild(table_oreder_header_colum_1)
    table_oreder_header.appendChild(table_oreder_header_colum_2)
    table_oreder_header.appendChild(table_oreder_header_colum_3)
    table_oreder_header.appendChild(table_oreder_header_colum_4)

    table_oreder.appendChild(table_oreder_header)
    table_oreder.appendChild(table_oreder_tbody)
    table_oreder.appendChild(table_oreder_tfoot)


    table_new_oreder.setAttribute('class', 'table-menu')
    let table_new_oreder_header = document.createElement('thead')
    let table_new_oreder_header_colum_0 = document.createElement('th')
    let table_new_oreder_header_colum_1 = document.createElement('th')
    let table_new_oreder_header_colum_2 = document.createElement('th')
    let table_new_oreder_header_colum_3 = document.createElement('th')
    let table_new_oreder_header_colum_4 = document.createElement('th')
    let table_new_oreder_tbody = document.createElement('tbody')
    table_new_oreder_tbody.id = 'tbody-new-order'

    table_new_oreder_header_colum_0.innerHTML = 'categoria'
    table_new_oreder_header_colum_1.innerHTML = 'título'
    table_new_oreder_header_colum_2.innerHTML = 'precio'
    table_new_oreder_header_colum_3.innerHTML = 'disponibilidad'
    table_new_oreder_header_colum_4.innerHTML = 'agregar'

    table_new_oreder_header.appendChild(table_new_oreder_header_colum_0)
    table_new_oreder_header.appendChild(table_new_oreder_header_colum_1)
    table_new_oreder_header.appendChild(table_new_oreder_header_colum_2)
    table_new_oreder_header.appendChild(table_new_oreder_header_colum_3)
    table_new_oreder_header.appendChild(table_new_oreder_header_colum_4)

    table_new_oreder.appendChild(table_new_oreder_header)
    table_new_oreder.appendChild(table_new_oreder_tbody)

    div_new_oreder_col.appendChild(table_new_oreder)
    div_new_oreder_col2.appendChild(table_oreder)
    div_new_oreder_row.appendChild(div_new_oreder_col)
    div_new_oreder_row.appendChild(div_new_oreder_col2)

    let client_label_new_oreder = document.createElement('label')
    client_label_new_oreder.id = 'client-label-new-oreder'
    client_label_new_oreder.style.padding = '0 15px 0 0'

    let contetnt_btn_new_oreder = document.createElement('div')

    let button_new_oreder = document.createElement('button')
    button_new_oreder.type = 'submit'
    button_new_oreder.classList.add('p-10px')
    button_new_oreder.style.backgroundColor = '#04AA6D'
    button_new_oreder.style.color = 'white'
    button_new_oreder.style.border = 'none'
    button_new_oreder.style.fontWeight = '900'
    button_new_oreder.innerHTML = 'Crear Pedido'
    button_new_oreder.setAttribute("onclick", "AddNewOreder()")

    contetnt_btn_new_oreder.appendChild(button_new_oreder)

    let content_client_new_order = document.createElement('div')

    let button_add_client = document.createElement('button')
    button_add_client.type = 'submit'
    button_add_client.classList.add('p-10px','mr-1p')
    button_add_client.innerHTML = 'Buscar Cliente'
    button_add_client.setAttribute("onclick", "ModalAddClientToOrder()")

    content_client_new_order.appendChild(button_add_client)
    content_client_new_order.appendChild(client_label_new_oreder)


    let input_search_label = CreateLabel('','Buscar en el menu')

    let input_search_menu = CreateInputfiled('menu-new-order-search', 'Buscar', 'text')
    input_search_menu.setAttribute('onkeyup', 'SearchMenu(this)')


    //------------------------------------------------------------------------------------------------------

    //new_order_client

    let input_search = CreateInputfiled('client-new-order-search', 'Buscar', 'text')
    input_search.setAttribute('onkeyup', 'SearchClient(this)')
    let content_users = document.createElement('div')
    content_users.id = 'content-users-new-order'

    new_order_client.setModalContent(input_search)
    new_order_client.setModalContent(content_users)



    new_order.setModalContent(h1_new_order)
    new_order.setModalContent(content_client_new_order)
    new_order.setModalContent(input_search_label)
    new_order.setModalContent(input_search_menu)
    new_order.setModalContent(div_new_oreder_row)
    new_order.setModalContent(contetnt_btn_new_oreder)
    new_order.setModalContent(new_order_client.getModal())

    pedidos.appendChild(new_order.getModal())
    // elementos del modal del delivery
    let h1_delivery = document.createElement('h1')
    let form_delivery_add = document.createElement('form')
    h1_delivery.innerHTML = 'Crear Delivery'
    let inputfiled_delivery_nombre = CreateInputfiled('inputfiled_delivery_nombre', 'nombre')
    inputfiled_delivery_nombre.required = true
    let inputfiled_delivery_apellido = CreateInputfiled('inputfiled_delivery_apellido', 'apellido')
    inputfiled_delivery_apellido.required = true
    let inputfiled_delivery_matricula = CreateInputfiled('inputfiled_delivery_matricula', 'matricula')
    inputfiled_delivery_matricula.required = true
    let inputfiled_delivery_vehiculo = CreateInputfiled('inputfiled_delivery_vehiculo', 'vehiculo')
    inputfiled_delivery_vehiculo.required = true

    let button_delivery = document.createElement('button')
    button_delivery.type = 'submit'
    button_delivery.innerHTML = 'Crear'
    button_delivery.setAttribute("onclick", "CreateDelivery()")
    form_delivery_add.appendChild(h1_delivery)
    form_delivery_add.appendChild(inputfiled_delivery_nombre)
    form_delivery_add.appendChild(inputfiled_delivery_apellido)
    form_delivery_add.appendChild(inputfiled_delivery_matricula)
    form_delivery_add.appendChild(inputfiled_delivery_vehiculo)
    form_delivery_add.appendChild(button_delivery)
    
    delivery.setModalContent(form_delivery_add)

    // elementos del modal de menu
    let h1_menu = document.createElement('h1')
    h1_menu.innerHTML = 'Crear Menu'

    let form_c_menu =  document.createElement('form')
    let inputfiled_menu_precio = CreateInputfiled('inputfiled_menu_precio', 'precio', 'number')
    let inputfiled_menu_titulo = CreateInputfiled('inputfiled_menu_titulo', 'titulo')
    let inputfiled_menu_descripcion = CreateInputfiled('inputfiled_menu_descripcion', 'descripcion')

    let content_dis = document.createElement('div')

    let label_dis = CreateLabel('label_disponibilidad', 'disponibilidad')
    label_dis.style.marginRight = "1%"
    let CheckBox_menu_disponibilidad = CreateCheckBox('checkbox_menu_disponivilidad')

    content_dis.appendChild(label_dis)
    content_dis.appendChild(CheckBox_menu_disponibilidad)

    let label_foto_menu = CreateLabel('label_foto_menu', 'Foto del Menu')
    let UploadFile = CreateFileUpload('upload_file', 'image')

    let content_cat = document.createElement('div')

    let label_drop = CreateLabel('label_cat', 'categoria')
    label_drop.style.marginRight = "2%"
    let drop = new DropDown('drop_cat_menu')
    drop.setClass('p-10px')

    content_cat.appendChild(label_drop)
    content_cat.appendChild(drop.getDrop())

    inputfiled_menu_precio.required = true
    inputfiled_menu_titulo.required = true
    UploadFile.required = true

    if (pizz !== null) {
      pizz.menus.forEach(menus => {
        drop.addOption(menus.categoria)
      });
    }

    let button_menu = document.createElement('button')
    button_menu.type = 'submit'
    button_menu.innerHTML = 'Crear'


    button_menu.setAttribute("onclick", "CreateMenu()")

    form_c_menu.appendChild(h1_menu)
    form_c_menu.appendChild(inputfiled_menu_precio)
    form_c_menu.appendChild(inputfiled_menu_titulo)
    form_c_menu.appendChild(inputfiled_menu_descripcion)
    form_c_menu.appendChild(content_dis)

    form_c_menu.appendChild(content_cat)
   // form_c_menu.appendChild(drop.getDrop())
    form_c_menu.appendChild(label_foto_menu)
    form_c_menu.appendChild(UploadFile)
    form_c_menu.appendChild(button_menu)

    menu.setModalContent(form_c_menu)

    // elementos del modal de categoria
    let form_cat_create  = document.createElement('form') 

    let h1_cat = document.createElement('h1')
    h1_cat.innerHTML = 'Crear Categoria'


    let inputfiled_cat = CreateInputfiled('inputfiled_categoria', 'categoria')
    inputfiled_cat.required = true
    inputfiled_cat.style.padding = '10px'
    inputfiled_cat.style.marginRight = '1%'

    let button_cat = document.createElement('button')
    button_cat.innerHTML = 'Crear'
    button_cat.style.padding = '10px'

    let content_create_cat =  document.createElement('div') 

    content_create_cat.appendChild(inputfiled_cat)
    content_create_cat.appendChild(button_cat)

    button_cat.setAttribute("onclick", "CreateCategoria()")

    form_cat_create.appendChild(h1_cat)
    form_cat_create.appendChild(content_create_cat)
    //form_cat_create.appendChild(button_cat)
    
    categorias.setModalContent(form_cat_create)


    CreateModalEditorder(pedidos)

    menus.appendChild(menu.getModal())
    menus.appendChild(categorias.getModal())
    deliverys.appendChild(delivery.getModal())
  }, 1000);
}


function SearchMenu(word) {
  let w = word.value.toUpperCase();

  let tbody_tr = document.getElementById('tbody-new-order').rows


  for (let index = 0; index < tbody_tr.length; index++) {
    const tr = tbody_tr[index];

    let value_search = ''

    for (let i = 0; i < tr.cells.length - 1; i++) {
      const td = tr.cells[i];
      // console.log(td)
      value_search += td.innerHTML + ' '
    }

    if (value_search.toUpperCase().indexOf(w) > -1)
      tr.style.display = ''
    else
      tr.style.display = 'none'

  }
}


function ModaAddOreder() {
  document.getElementById("modal_new-order").style.display = 'block';
}

function ModalEditOreder() {

  let ids_menu_edit = []

  let tbody_order_edit_2 = document.getElementById('tbody-oreder-edit-2')

  while (tbody_order_edit_2.hasChildNodes()) {
    tbody_order_edit_2.removeChild(tbody_order_edit_2.firstChild);
  }

  console.log(tbody_order_edit_2)


  if (temp.select_oreder) {
    let oreder_to_edit = document.getElementById(temp.select_oreder.id).getElementsByTagName('td')

    let tbody_order_edit = document.getElementById('tbody-oreder-edit-1').rows//[0].cells[4].childNodes[0].click()

    let user = document.getElementById('user-order-to-edit')
    let n_order = document.getElementById('oreder-number-to-edit')
    let text_order = document.getElementById('text-edit-oreder')

    n_order.innerHTML = 'Orden Nº ' + oreder_to_edit[0].innerHTML
    user.innerHTML = 'Cliente: ' + oreder_to_edit[4].innerHTML
    text_order.value = oreder_to_edit[5].innerHTML

    let str_title = oreder_to_edit[1].innerHTML.replace(/ /g, "")

    let arr_title = str_title.substring(0, str_title.length - 1).split(',');


    for (let index = 0; index < oreder_to_edit[1].attributes.length; index++) {
      const m = oreder_to_edit[1].attributes[index];

      if (m.name.startsWith('menu-')) {

        if (index < arr_title.length) {
          const count = arr_title[index].substring(0, 1)
          let num = parseInt(count)
          let id = m.name.split('-')[1]

          if (!isNaN(num)) {
            for (let index = 0; index < num; index++) {
              ids_menu_edit.push(id)
            }
          }
          else {
            ids_menu_edit.push(id)
          }
        }
      }
    }


    for (let index = 0; index < tbody_order_edit.length; index++) {
      const btn_add = tbody_order_edit[index].cells[4].childNodes[0];
      const id = tbody_order_edit[index].id.split('_')[2]

      for (let index = 0; index < ids_menu_edit.length; index++) {
        const id_order = ids_menu_edit[index];

        if (id == id_order)
          btn_add.click()
      }

    }
    document.getElementById("modal_edit-order").style.display = 'block';
  } else {
    alert('seleccione un pedido para editarlo')
  }


}

function AddNewOreder() {

  let orders_id = []
  let table_oreders = document.getElementById('tbody-order')
  let total_price = document.getElementById('oreder-td-price')
  let cli_lbl = document.getElementById('client-label-new-oreder')
  let orders = table_oreders.rows
  let id_client = Clients.selected_to_new_order

  for (let index = 0; index < orders.length; index++) {
    const tr = orders[index];
    let temp_id_arr = tr.id.split('_')
    let id_temp = temp_id_arr[temp_id_arr.length - 1]
    orders_id.push(id_temp)
  }

  if (orders_id.length > 0 && id_pizzeria != '' && typeof id_client != 'undefined') {
    let order = {
      id_cliente: id_client,
      id_Pizzeria: id_pizzeria,
      ids_menu: orders_id,
      details: ''
    }

    fetch('/pedido/create', {
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
          alert(data.msg)
          document.getElementById('close_modal_new-order').click()
          table_oreders.innerHTML = ''
          total_price.innerHTML = '$0'
          cli_lbl.innerHTML = 'Cliente:'
          Clients.selected_to_new_order = undefined
          location.reload();
        }

      }).catch((error) => {
        console.log(error);
      })

  }
  else if (typeof id_client == 'undefined') {
    alert('no se ha cargado el cliente')
  }
  else if (orders_id.length <= 0) {
    alert('no se ha cargado el menu')
  }
  else if (id_pizzeria != '' == '') {
    alert('no se ha cargado la pizzeria')
  }
}

function openCity(evt, cityName, ele) {
  var i, tabcontent, tablinks;

  console.log(ele.id)

  localStorage.setItem('open-acordion', ele.id)

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}


function ModalMenu() {
  document.getElementById("modal_menu").style.display = 'block';
}

function ModaDelivery() {
  document.getElementById("modal_delivery").style.display = 'block';
}

function ModalCategoria() {
  document.getElementById("modal_categoria").style.display = 'block';
}

function ModalAddClientToOrder() {
  document.getElementById("modal_client-new-order").style.display = 'block';
}

//estoy aca
function CreateDeliveryRow(_id, name, last_name, matricula, vehiculo) {

  let tr = document.createElement('tr')
  let td_name = CreateColum(name)
  let td_last_name = CreateColum(last_name)
  let td_matricula = CreateColum(matricula)
  let td_vehiculo = CreateColum(vehiculo)

  tr.appendChild(td_name)
  tr.appendChild(td_last_name)
  tr.appendChild(td_matricula)
  tr.appendChild(td_vehiculo)

  tr.id = _id

  return tr
}



function CreatePedidosRow(_id, n_order, date, huors, cliente, pedido, detalles, direecion, telefono, delivery, state, total, menus) {

  let n_order_strig = ''
  let stat_text = 'En Proceso'


  if (n_order < 10)
    n_order_strig = '0' + n_order.toString()
  else
    n_order_strig = n_order.toString()

  if (state == 'in coming') {
    stat_text = 'En Reparto'
  }


  if (state == 'delivered') {
    stat_text = 'Entregado'
  }


  if (state == 'cancel') {
    stat_text = 'Cancelado'
  }

  let content_state_order =  document.createElement('div')

  content_state_order.style.color = '#FDFEFE'
  content_state_order.style.fontWeight = '900'
  content_state_order.style.backgroundColor = '#E67E22'
  content_state_order.style.borderRadius = '10px'
  content_state_order.style.padding = '10px'

  if (state == 'in coming') {
    content_state_order.style.backgroundColor = '#3498DB'
  }


  if (state == 'delivered') {
    content_state_order.style.backgroundColor = '#27AE60'
  }


  if (state == 'cancel') {
    content_state_order.style.backgroundColor = '#E74C3C'
  }

  content_state_order.innerHTML = stat_text

  let tr = document.createElement('tr')
  let td_cliente = CreateColum(cliente)
  let td_pedido = CreateColum(pedido)
  let td_detalles = CreateColum(detalles)
  let td_direecion = CreateColum(direecion)
  let td_telefono = CreateColum(telefono)
  let td_delivery = CreateColum(delivery)
  let td_total = CreateColum('$ ' + total)
  let td_date = CreateColum(date)
  let td_huors = CreateColum(huors)
  let td_n_order = CreateColum(n_order_strig)
  let td_state = CreateColum(content_state_order,false,true)

  if (state == 'cancel') 
    td_total.style.textDecoration = 'line-through'
  


  if (menus.length > 0) {
    for (let index = 0; index < menus.length; index++) {
      const menu = menus[index];
      const current_price = menu.menu.precio
      const id = 'menu-' + menu.menu._id
      td_pedido.setAttribute(id, current_price)
    }

  }

  td_pedido.colSpan = 4
  td_pedido.style.fontWeight = "900"
  td_pedido.style.fontSize = "1.2rem"
  td_pedido.style.textAlign = "left"


  tr.appendChild(td_n_order)
  tr.appendChild(td_pedido)
  tr.appendChild(td_date)
  tr.appendChild(td_huors)
  tr.appendChild(td_cliente)
  tr.appendChild(td_detalles)
  tr.appendChild(td_direecion)
  tr.appendChild(td_telefono)
  tr.appendChild(td_delivery)
  tr.appendChild(td_state)
  tr.appendChild(td_total)
  tr.style.cursor = 'pointer'
  tr.id = _id


  if (typeof temp.select_oreder != 'undefined') {
    let id_selected = temp.select_oreder.id
    if (tr.id == id_selected)
    {
      tr.style.backgroundColor = '#ddd'
      tr.style.border = '2px solid rgb(27, 154, 212)'
    }
      
  }



  tr.setAttribute('onclick', 'Select(this,"tbody-pedidos")')

  return tr
}



function ModaDeliveryOreder() {
  if (temp.select_oreder)
    document.getElementById("modal_delivery_oreder").style.display = 'block';
  else
    alert('seleccione un pedido para agregarle un delivery')

}

function AddDelivery() {
  if (temp.select_oreder) {

    let _id_delivery = document.getElementById('drop_del_pedidos').value
    let _id = temp.select_oreder.id
    let send_data = { _id, _id_delivery }

    fetch('/pedido/adddelivery', {
      method: 'POST',
      body: JSON.stringify(send_data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {


        alert(data.msg)

      }).catch((error) => {
        console.log(error);
      })



  }
  else {
    console.log('no hay orden seleccionada')
  }
}

function CreateEditOrderRow(_id, categoria, titulo, precio, disponibilidad) {
  let tr = document.createElement('tr')

  tr.style.cursor = 'pointer'
  tr.id = _id


  let button_add_menu = document.createElement('button')
  button_add_menu.type = 'submit'
  button_add_menu.innerHTML = '>>'
  button_add_menu.setAttribute("onclick", `AddMenuToOrderEdit(${tr.id})`)

  let disponibilidad_text = disponibilidad ? 'si' : 'no'

  let td_categoria = CreateColum(categoria)
  let td_titulo = CreateColum(titulo)
  let td_precio = CreateColum('$' + precio)
  let td_disponibilidad = CreateColum(disponibilidad_text)
  let td_btn_add = document.createElement('td')

  td_btn_add.appendChild(button_add_menu)

  tr.appendChild(td_categoria)
  tr.appendChild(td_titulo)
  tr.appendChild(td_precio)
  tr.appendChild(td_disponibilidad)
  tr.appendChild(td_btn_add)

  return tr

}


function AddMenuToOrderEdit(menu) {

  let t = document.getElementById('tbody-oreder-edit-2')


  let total = document.getElementById('oreder-edit-td-price')
  let total_price = parseFloat(total.innerHTML.substring(1))

  let c = menu.cells[0].innerHTML
  let ti = menu.cells[1].innerHTML
  let pre = menu.cells[2].innerHTML
  let dis = menu.cells[3].innerHTML

  let row = t.insertRow(0)
  row.id = 'add_menu_edit_' + menu.id
  let cat = row.insertCell(0)
  let title = row.insertCell(1)
  let precio = row.insertCell(2)
  let dispon = row.insertCell(3)
  let delet = row.insertCell(4)

  let price_row = parseFloat(pre.substring(1))

  let btn_delete = document.createElement('button')
  btn_delete.type = 'submit'
  btn_delete.innerHTML = 'X'
  btn_delete.setAttribute("onclick", `DeleteMenuToOrderEdit(${row.id},${price_row})`)


  delet.appendChild(btn_delete)

  cat.innerHTML = c
  title.innerHTML = ti
  precio.innerHTML = pre
  dispon.innerHTML = dis

  total_price += price_row

  total.innerHTML = '$' + total_price

}

function DeleteMenuToOrderEdit(row, price) {
  let id = ''

  if (row.length == undefined)
    id = row.id
  else if (row.length > 0) {
    id = row[0].id
  }

  let t = document.getElementById('tbody-oreder-edit-2')
  let total = document.getElementById('oreder-edit-td-price')

  let total_price = parseFloat(total.innerHTML.substring(1))

  total_price -= price

  total.innerHTML = '$' + total_price

  t.deleteRow(row.rowIndex);
}

function CreateNewOrderRow(_id, categoria, titulo, precio, disponibilidad) {
  let tr = document.createElement('tr')

  tr.style.cursor = 'pointer'
  tr.id = 'menu_order_' + _id

  let button_add_menu = document.createElement('button')
  button_add_menu.type = 'submit'
  button_add_menu.innerHTML = '>>'
  button_add_menu.setAttribute("onclick", `AddMenuToOrder(${tr.id})`)

  let disponibilidad_text = disponibilidad ? 'si' : 'no'

  let td_categoria = CreateColum(categoria)
  let td_titulo = CreateColum(titulo)
  let td_precio = CreateColum('$' + precio)
  let td_disponibilidad = CreateColum(disponibilidad_text)
  let td_btn_add = document.createElement('td')

  td_btn_add.appendChild(button_add_menu)

  tr.appendChild(td_categoria)
  tr.appendChild(td_titulo)
  tr.appendChild(td_precio)
  tr.appendChild(td_disponibilidad)
  tr.appendChild(td_btn_add)

  return tr
}

function AddMenuToOrder(menu) {

  let t = document.getElementById('tbody-order')
  let total = document.getElementById('oreder-td-price')
  let total_price = parseFloat(total.innerHTML.substring(1))

  let total_temp = 0

  let c = menu.cells[0].innerHTML
  let ti = menu.cells[1].innerHTML
  let pre = menu.cells[2].innerHTML
  let dis = menu.cells[3].innerHTML

  let row = t.insertRow(0)

  row.id = 'add_menu_' + menu.id
  let cat = row.insertCell(0)
  let title = row.insertCell(1)
  let precio = row.insertCell(2)
  let dispon = row.insertCell(3)
  let delet = row.insertCell(4)

  let price_row = parseFloat(pre.substring(1))

  let btn_delete = document.createElement('button')
  btn_delete.type = 'submit'
  btn_delete.innerHTML = 'X'
  btn_delete.setAttribute("onclick", `DeleteMenuToOrder(${row.id},${price_row})`)

  delet.appendChild(btn_delete)

  cat.innerHTML = c
  title.innerHTML = ti
  precio.innerHTML = pre
  dispon.innerHTML = dis

  total_price += price_row

  total.innerHTML = '$' + total_price

}

function DeleteMenuToOrder(row, price) {

  let t = document.getElementById('table_oreder')
  let total = document.getElementById('oreder-td-price')

  let total_price = parseFloat(total.innerHTML.substring(1))

  total_price -= price
  total.innerHTML = '$' + total_price

  t.deleteRow(row.rowIndex);
}



function CreateMenuRow(_id, categoria, titulo, descripcion, precio, disponibilidad, img,portada) {

  let tr = document.createElement('tr')

  if(portada)
  {
    tr.style.backgroundColor = 'rgb(27, 154, 212)'
    tr.setAttribute("portada",true)  
  }
  else
  tr.setAttribute("portada",false)  

  tr.id = _id
  tr.style.cursor = 'pointer'
  let disponibilidad_text = disponibilidad ? 'si' : 'no'
  let td_categoria = CreateColum(categoria)
  let td_titulo = CreateColum(titulo)
  let td_descripcion = CreateColum(descripcion)
  let td_precio = CreateColum('$' + precio)
  let td_disponibilidad = CreateColum(disponibilidad_text)
  let td_img = CreateColum(img, true)

  let btn_edit = document.createElement('button')
  btn_edit.innerHTML = 'aplicar'
  btn_edit.setAttribute('onclick',`SetPortada("${_id}")`)

  td_btn_edit = CreateColum(btn_edit,false,true)

  tr.appendChild(td_categoria)
  tr.appendChild(td_titulo)
  tr.appendChild(td_descripcion)
  tr.appendChild(td_precio)
  tr.appendChild(td_disponibilidad)
  tr.appendChild(td_img)
  tr.appendChild(td_btn_edit)

  tr.setAttribute('onclick', 'Select(this,"tbody-menu")')

  return tr

}


function OrderConfirm() {
  if (temp.select_oreder) {

    let _id = temp.select_oreder.id

    fetch('/pedido/orderconfirm', {
      method: 'POST',
      body: JSON.stringify({ _id }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        alert(data.msg)
      }).catch((error) => {
        console.log(error);
      })
  }
  else
    alert('seleccione un pedido para confirmarlo')
}

function CreatePizzeria(user_id) {

  let user_data =
  {
    email: '',
    name: 'nostra pizza',
    address: 'Avenida Pablo Rios N47',
    phone: '091899084',
    user_id
  }

  fetch('/pizzeria/create', {
    method: 'POST',
    body: JSON.stringify(user_data),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      localStorage.setItem('_id_pizzeria', data.pizz._id)
      SetHoursAndDays(data.pizz.hours_days)

      GetPedidos(data.pizz._id)

      setInterval(() => {
        GetPedidos(data.pizz._id)
      }, 1000);

      pizz = data.pizz
      ShowMenusLists(pizz)

    }).catch((error) => {
      console.log(error);
    })

}

function GetPedidos(id) {
  fetch('/pedido/pizzeria/' + id, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(data => {

      ShowPedidos(data)

    }).catch((error) => {
      console.log(error);
    })

}

function ShowPedidos(data) {

  let oreders_total = 0
  let oreders_general_total = 0
  let tbody_pedidos = document.getElementById('tbody-pedidos')
  let drop_del_deliverys_search = document.getElementById('drop_del_deliverys_search').value

  tbody_pedidos.innerHTML = ''

  console.log(data.oreders.length)

  data.oreders.forEach(oreder => {
    let count = 1
    let total = 0
    let pedido = []
    let pedido_titulo = ''

    if (oreder.menu.length == 1) {
      const current_order = oreder.menu[0];
      pedido.push({ titulo: current_order.menu.titulo, count: 1 })
      total += current_order.menu.precio

    }
    else {
      for (let index = 0; index < oreder.menu.length - 1; index++) {

        const next_index = index + 1
        const current_order = oreder.menu[index];
        const next_order = oreder.menu[next_index];

        total += current_order.menu.precio

        if (current_order.menu._id == next_order.menu._id) {
          count++

          if (next_index == oreder.menu.length - 1) {

            pedido.push({ titulo: next_order.menu.titulo, count })
            total += next_order.menu.precio
          }

        }

        else {

          pedido.push({ titulo: current_order.menu.titulo, count })
          count = 1
          if (next_index == oreder.menu.length - 1) {
            pedido.push({ titulo: next_order.menu.titulo, count })
            total += next_order.menu.precio
          }
        }
      }
    }

    let client = oreder.client.first_name + ' ' + oreder.client.last_name
    let address_client = oreder.client.address
    let phone_client = oreder.client.phone

    oreders_general_total += total

    let delivery = oreder.delivery

    if (oreder.delivery == undefined)
      delivery = 'sin delivery'
    else
      delivery = oreder.delivery._name + ' ' + oreder.delivery.last_name

    let pedido_descripcion = oreder.details

    pedido.forEach(p => {
      if (p.count > 1)
        pedido_titulo += p.count + ' X ' + p.titulo + ', '
      else
        pedido_titulo += p.titulo + ', '
    })

    let fecha = oreder.date.split(' ')

    let date_string_american = fecha[0].split('-')
    let date_string = date_string_american[2] + '/' + date_string_american[1] + '/' + date_string_american[0]

    let hours_string_arr = fecha[1].split(':')
    let hours_string = hours_string_arr[0] + ':' + hours_string_arr[1]
    let row = CreatePedidosRow(oreder._id, oreder.n_order, date_string, hours_string, client, pedido_titulo, pedido_descripcion, address_client, phone_client, delivery, oreder.state, total, oreder.menu)

    if (delivery == drop_del_deliverys_search || drop_del_deliverys_search == 'ALL') {
      row.style.display = ''
      if (oreder.state != 'cancel')
        oreders_total += total
    }
    else
      row.style.display = 'none'

    tbody_pedidos.appendChild(row)

    pedido_titulo = ''
  })

  let porcentaje = oreders_total * 100 / oreders_general_total

  tfoot_oreder_Total = document.getElementById('total-oreders-price')
  tfoot_oreder_general_total = document.getElementById('oreders_general_total')
  tfoot_oreder_porcentaje = document.getElementById('oreders_porcentage')
  tfoot_oreder_porcentaje.innerHTML = '%' + porcentaje.toFixed(2);
  tfoot_oreder_general_total.innerHTML = ' $' + oreders_general_total
  tfoot_oreder_Total.innerHTML = '$' + oreders_total

}

function CancelOrder() {
  if (temp.select_oreder) {
    let _id = temp.select_oreder.id

    let conf = confirm('¿Esta seguro de cancelar el pedido?')

    if (conf) {
      fetch('/pedido/cancel', {
        method: 'POST',
        body: JSON.stringify({ _id }),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then(data => {
          alert('el pedido se ha cancelado correctamente')
        }).catch((error) => {
          console.log(error);
        })
    }
  }
  else
    alert('seleccione un pedido para cancelarlo')
}


function CreateCategoria() {

  let categoria = document.getElementById('inputfiled_categoria').value
  if(categoria)
  {
    let _id_pizzeria = id_pizzeria
    let user_data =
    {
      _id_pizzeria, categoria
    }
  
    fetch('/pizzeria/addcategoria', {
      method: 'POST',
      body: JSON.stringify(user_data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
  
  
  
        let drop = document.getElementById('drop_cat_menu')
        let op = document.createElement('option')
        op.text = data.categoria
        drop.add(op)
  
        let drop_edit = document.getElementById('drop_cat_edit')
        let op_edit = document.createElement('option')
        op_edit.text = data.categoria
        drop_edit.add(op)
        document.getElementById('close_modal_categoria').click()
        alert(`La categoria ${data.categoria} fue creada correctamente`)
  
      }).catch((error) => {
        console.log(error);
      })
  }

}
function CreateDelivery() {

  let name_input = document.getElementById('inputfiled_delivery_nombre')
  let last_name_input = document.getElementById('inputfiled_delivery_apellido')
  let matricula_input = document.getElementById('inputfiled_delivery_matricula')
  let vehiculo_input = document.getElementById('inputfiled_delivery_vehiculo')

  let name = name_input.value
  let last_name = last_name_input.value
  let matricula = matricula_input.value
  let vehiculo = vehiculo_input.value


  if(
    name && 
    last_name && 
    matricula &&
    vehiculo
    )
    {
      fetch('/delivery/create', {
        method: 'POST',
        body: JSON.stringify({ name, last_name, matricula, vehiculo }),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then(data => {
    
          if (data)
            GetALllDeliverys()
    
        }).catch((error) => {
          console.log(error);
        })
    }

 // name_input.required  
 // last_name_input.required  
 // matricula_input.required  
 // vehiculo_input.required

 /* 


*/
}

function GetALllDeliverys() {

  fetch('/delivery', {
    method: 'GET',
  })
    .then(response => response.json())
    .then(data => {

      if (data) {
        let tbody = document.getElementById('tbody-deliverys')
        let search_deliverys_oreder = document.getElementById('dropdown-delivery-search')
        let pedidos = document.getElementById('Pedidos')
        tbody.innerHTML = ''

        let modal_delivery_oreder = new Modal('delivery_oreder')

        let drop_delivery = new DropDown('drop_del_pedidos')
        let drop_delivery_search = new DropDown('drop_del_deliverys_search')
        drop_delivery_search.setClass('mr-1p')

        let button_delivery_oreder = document.createElement('button')
        button_delivery_oreder.type = 'submit'
        button_delivery_oreder.innerHTML = 'Agregar Delivery'
        button_delivery_oreder.setAttribute("onclick", "AddDelivery()")

        let button_delivery_search = document.createElement('button')
        button_delivery_search.type = 'submit'
        button_delivery_search.innerHTML = 'Buscar'

        button_delivery_search.setAttribute("onclick", "SearchDelivery()")

        drop_delivery_search.addOption('Todos los pedidos', 'ALL')
        drop_delivery_search.addOption('Sin delivery', 'sin delivery')

        data.deliverys.forEach(del => {
          tbody.appendChild(CreateDeliveryRow(del._id, del._name, del.last_name, del.matricula, del.vehiculo))
          drop_delivery.addOption(del._name + ' ' + del.last_name, del._id)
          drop_delivery_search.addOption(del._name + ' ' + del.last_name, del._name + ' ' + del.last_name)
        })

        modal_delivery_oreder.setModalContent(drop_delivery.getDrop())
        modal_delivery_oreder.setModalContent(button_delivery_oreder)

        search_deliverys_oreder.appendChild(drop_delivery_search.getDrop())
        search_deliverys_oreder.appendChild(button_delivery_search)

        pedidos.appendChild(modal_delivery_oreder.getModal())

      }

    }).catch((error) => {
      console.log(error);
    })
}

function SearchDelivery() {


  let tpedidos = document.getElementById('tbody-pedidos').rows
  let delivery = document.getElementById('drop_del_deliverys_search').value
  let total_oreders_price = document.getElementById('total-oreders-price')
  console.log(delivery)

  let total = 0

  for (let index = 0; index < tpedidos.length; index++) {
    const row = tpedidos[index];
    search = row.cells[8].innerHTML

    if (search == delivery || delivery == 'ALL') {
      row.style.display = ''
      let total_oreder = parseFloat(row.cells[10].innerHTML.substring(1))
      total += total_oreder
    }
    else {
      row.style.display = 'none'
    }


    console.log()

  }
  total_oreders_price.innerHTML = '$' + total

}