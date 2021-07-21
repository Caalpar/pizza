




window.addEventListener("load", function (event) {

  GetALllDeliverys()
  if (id === null) {
    CreatePizzeria(id)
    setTimeout(() => {
      start()
    }, 2000);
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
    let new_order_client = new Modal('client-new-order','4')

    //elementos del modal del nuevo pedido
    let h1_new_order = document.createElement('h1')
    h1_new_order.innerHTML = 'Agregar Pedido'
    let table_new_oreder = document.createElement('table')
    let table_oreder = document.createElement('table')
    table_oreder.id = 'table_oreder'
    let div_new_oreder_row = document.createElement('div')
    let div_new_oreder_col = document.createElement('div')
    let div_new_oreder_col2 = document.createElement('div')

    div_new_oreder_row.style.display ='flex'
    div_new_oreder_row.style.marginLeft = '-5px'
    div_new_oreder_row.style.marginRight = '-5px'

    div_new_oreder_col.style.flex = '50%'
    div_new_oreder_col.style.padding = '5px'

    div_new_oreder_col2.style.flex = '50%'
    div_new_oreder_col2.style.padding = '5px'

    table_oreder.setAttribute('class','table-menu')
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

    table_oreder_tbody.id='tbody-order'

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
    

    table_new_oreder.setAttribute('class','table-menu')
    let table_new_oreder_header = document.createElement('thead')
    let table_new_oreder_header_colum_0 = document.createElement('th')
    let table_new_oreder_header_colum_1 = document.createElement('th')
    let table_new_oreder_header_colum_2 = document.createElement('th')
    let table_new_oreder_header_colum_3 = document.createElement('th')
    let table_new_oreder_header_colum_4 = document.createElement('th')
    let table_new_oreder_tbody = document.createElement('tbody') 
    table_new_oreder_tbody.id='tbody-new-order'



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
    client_label_new_oreder.style.padding = '0 15px'
    client_label_new_oreder.innerHTML = 'Cliente: '

    let button_new_oreder = document.createElement('button')
    button_new_oreder.type = 'submit'
    button_new_oreder.innerHTML = 'Crear Pedido'
    button_new_oreder.setAttribute("onclick", "AddNewOreder()")
   
    
    let button_add_client = document.createElement('button')
    button_add_client.type = 'submit'
    button_add_client.innerHTML = 'Buscar Cliente'
    button_add_client.setAttribute("onclick", "ModalAddClientToOrder()")

    let input_search_menu = CreateInputfiled('menu-new-order-search','Buscar','text')
    input_search_menu.setAttribute('onkeyup','SearchMenu(this)')


   //------------------------------------------------------------------------------------------------------
    
   //new_order_client

    let input_search = CreateInputfiled('client-new-order-search','Buscar','text')
    input_search.setAttribute('onkeyup','SearchClient(this)')
    let content_users = document.createElement('div')
    content_users.id='content-users-new-order'

    new_order_client.setModalContent(input_search)
    new_order_client.setModalContent(content_users)



    new_order.setModalContent(h1_new_order)
    new_order.setModalContent(input_search_menu)
    new_order.setModalContent(button_add_client)
    new_order.setModalContent(client_label_new_oreder)
    new_order.setModalContent(button_new_oreder)
    new_order.setModalContent(div_new_oreder_row)
    new_order.setModalContent(new_order_client.getModal())

    pedidos.appendChild(new_order.getModal())
    pedidos.appendChild(new_order.getModal())
    // elementos del modal del delivery
    let h1_delivery = document.createElement('h1')
    h1_delivery.innerHTML = 'Crear Delivery'
    let inputfiled_delivery_nombre = CreateInputfiled('inputfiled_delivery_nombre', 'nombre')
    let inputfiled_delivery_apellido = CreateInputfiled('inputfiled_delivery_apellido', 'apellido')
    let inputfiled_delivery_matricula = CreateInputfiled('inputfiled_delivery_matricula', 'matricula')
    let inputfiled_delivery_vehiculo = CreateInputfiled('inputfiled_delivery_vehiculo', 'vehiculo')

    let button_delivery = document.createElement('button')
    button_delivery.innerHTML = 'Crear'
    button_delivery.setAttribute("onclick", "CreateDelivery()")

    delivery.setModalContent(inputfiled_delivery_nombre)
    delivery.setModalContent(inputfiled_delivery_apellido)
    delivery.setModalContent(inputfiled_delivery_matricula)
    delivery.setModalContent(inputfiled_delivery_vehiculo)
    delivery.setModalContent(button_delivery)

    // elementos del modal de menu
    let h1_menu = document.createElement('h1')
    h1_menu.innerHTML = 'Crear Menu'

    let inputfiled_menu_precio = CreateInputfiled('inputfiled_menu_precio', 'precio','number')
    let inputfiled_menu_titulo = CreateInputfiled('inputfiled_menu_titulo', 'titulo')
    let inputfiled_menu_descripcion = CreateInputfiled('inputfiled_menu_descripcion', 'descripcion')
    let label_dis = CreateLabel('label_disponibilidad', 'disponibilidad')
    let CheckBox_menu_disponibilidad = CreateCheckBox('checkbox_menu_disponivilidad')
    let UploadFile = CreateFileUpload('upload_file', 'image')
    let label_drop = CreateLabel('label_cat', 'categoria')
    let drop = new DropDown('drop_cat_menu')
  

    if (pizz !== null) {
      pizz.menus.forEach(menus => {
        drop.addOption(menus.categoria)
      });
    }

    let button_menu = document.createElement('button')
    button_menu.type = 'submit'
    button_menu.innerHTML = 'Crear'


    button_menu.setAttribute("onclick", "CreateMenu()")

    menu.setModalContent(h1_menu)
    menu.setModalContent(inputfiled_menu_precio)
    menu.setModalContent(inputfiled_menu_titulo)
    menu.setModalContent(inputfiled_menu_descripcion)
    menu.setModalContent(label_dis)
    menu.setModalContent(CheckBox_menu_disponibilidad)
    menu.setModalContent(label_drop)
    menu.setModalContent(drop.getDrop())
    menu.setModalContent(UploadFile)
    menu.setModalContent(button_menu)


    // elementos del modal de categoria
    let h1_cat = document.createElement('h1')
    h1_cat.innerHTML = 'Crear Categoria'

    let inputfiled_cat = CreateInputfiled('inputfiled_categoria', 'categoria')

    let button_cat = document.createElement('button')
    button_cat.innerHTML = 'Crear'


    button_cat.setAttribute("onclick", "CreateCategoria()")

    categorias.setModalContent(h1_cat)
    categorias.setModalContent(inputfiled_cat)
    categorias.setModalContent(button_cat)




    menus.appendChild(menu.getModal())
    menus.appendChild(categorias.getModal())
    deliverys.appendChild(delivery.getModal())
  }, 1000);
}


function SearchMenu(word)
{
   let w = word.value.toUpperCase();

   let tbody_tr = document.getElementById('tbody-new-order').rows


    for (let index = 0; index < tbody_tr.length; index++) {
      const tr = tbody_tr[index];
     
      let value_search = ''

      for (let i = 0; i < tr.cells.length-1; i++) {
        const td = tr.cells[i];
       // console.log(td)
        value_search += td.innerHTML +' '
      }

      if(value_search.toUpperCase().indexOf(w)>-1)
         tr.style.display = ''
      else
        tr.style.display = 'none'

    } 
}


function ModaAddOreder()
{
  document.getElementById("modal_new-order").style.display = 'block';
}


function AddNewOreder(){
  
  let orders_id = []
  let table_oreders = document.getElementById('tbody-order')
  let total_price = document.getElementById('oreder-td-price')
  let cli_lbl = document.getElementById('client-label-new-oreder')
  let orders = table_oreders.rows
  let id_client = Clients.selected_to_new_order
  for (let index = 0; index < orders.length; index++) {
    const tr = orders[index];
    let temp_id_arr = tr.id.split('_')
    let id_temp = temp_id_arr[temp_id_arr.length-1]
    orders_id.push(id_temp)
  }
  console.log(id_client)
  console.log(id_pizzeria)
  console.log(orders_id)
if(orders_id.length>0 && id_pizzeria!=''&& typeof id_client!='undefined')
{
  let order = {
    id_cliente: id_client,
    id_Pizzeria: id_pizzeria,
    ids_menu:orders_id,
    details:''
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
        

        if (data)
        {
          console.log('el pedido se agrego correctamente')
          table_oreders.innerHTML = ''
          total_price.innerHTML = '$0'
          cli_lbl.innerHTML = 'Cliente:'
          Clients.selected_to_new_order = undefined
        }

     
    }).catch((error) => {
      console.log(error);
    })

}
else if(typeof id_client =='undefined')
{ 
  console.log('no se ha cargado el cliente')
}
else if(orders_id.length<=0)
{   
  console.log('no se ha cargado el menu')
}
else if(id_pizzeria!='' == '')
{ 
  console.log('no se ha cargado la pizzeria')
}


}


function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
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

document.getElementById("defaultOpen").click();

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
function CreateDeliveryRow(_id,name,last_name,matricula, vehiculo) {
  
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



function CreatePedidosRow(_id,n_order,date,huors,cliente, pedido, detalles, direecion, telefono, delivery,state, total) {
 
  let n_order_strig = ''
  let stat_text = 'En Proceso'

  if(n_order < 10)
    n_order_strig = '0'+n_order.toString() 
  else
    n_order_strig = n_order.toString()

  if(state == 'in coming')
  stat_text = 'En Reparto'

  if(state == 'delivered')
  stat_text = 'Entregado'
 
  let tr = document.createElement('tr')
  let td_cliente = CreateColum(cliente)
  let td_pedido = CreateColum(pedido)
  let td_detalles = CreateColum(detalles)
  let td_direecion = CreateColum(direecion)
  let td_telefono = CreateColum(telefono)
  let td_delivery = CreateColum(delivery)
  let td_total = CreateColum('$ '+total)
  let td_date = CreateColum(date)
  let td_huors = CreateColum(huors)
  let td_n_order = CreateColum(n_order_strig)
  let td_state = CreateColum(stat_text)
 
  tr.appendChild(td_n_order)
  tr.appendChild(td_date)
  tr.appendChild(td_huors)
  tr.appendChild(td_cliente)
  tr.appendChild(td_pedido)
  tr.appendChild(td_detalles)
  tr.appendChild(td_direecion)
  tr.appendChild(td_telefono)
  tr.appendChild(td_delivery)
  tr.appendChild(td_state)
  tr.appendChild(td_total)
  tr.style.cursor = 'pointer'
  tr.id = _id
  tr.setAttribute('onclick','Select(this,"tbody-pedidos")')

  return tr
}



function ModaDeliveryOreder()
{
  document.getElementById("modal_delivery_oreder").style.display = 'block';
}

function AddDelivery()
{
  if(temp.select_oreder){

    let _id_delivery= document.getElementById('drop_del_pedidos').value
    let _id = temp.select_oreder.id
    let send_data = {_id,_id_delivery}

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
  

        console.log(data)
  
      }).catch((error) => {
        console.log(error);
      })
  


  }
  else
  {
    console.log('no hay orden seleccionada')
  }
}

function CreateNewOrderRow(_id, categoria, titulo, precio, disponibilidad) {
  let tr = document.createElement('tr')

  tr.style.cursor = 'pointer'
  tr.id = 'menu_order_'+_id


  let button_add_menu = document.createElement('button')
  button_add_menu.type = 'submit'
  button_add_menu.innerHTML = '>>'
  button_add_menu.setAttribute("onclick", `AddMenuToOrder(${tr.id})`)
  
  let disponibilidad_text = disponibilidad ? 'si' : 'no'

  let td_categoria = CreateColum(categoria)
  let td_titulo = CreateColum(titulo)
  let td_precio = CreateColum('$'+precio)
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

function AddMenuToOrder(menu)
{

  let t = document.getElementById('tbody-order')
  let total = document.getElementById('oreder-td-price')
  let total_price = parseFloat(total.innerHTML.substring(1))

  let total_temp = 0

  let c = menu.cells[0].innerHTML
  let ti = menu.cells[1].innerHTML
  let pre = menu.cells[2].innerHTML
  let dis = menu.cells[3].innerHTML




  let row = t.insertRow(0)



  row.id = 'add_menu_'+menu.id
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

 total_price+=price_row

total.innerHTML = '$'+total_price 

 

}

function DeleteMenuToOrder(row,price)
{


  let t = document.getElementById('table_oreder')
  let total = document.getElementById('oreder-td-price')

  let total_price = parseFloat(total.innerHTML.substring(1))


  total_price-=price


  total.innerHTML ='$'+total_price  

  t.deleteRow(row.rowIndex);
}



function CreateMenuRow(_id, categoria, titulo, descripcion, precio, disponibilidad, img) {
  
  let tr = document.createElement('tr')
  tr.id = _id
  tr.style.cursor = 'pointer'
  let disponibilidad_text = disponibilidad ? 'si' : 'no'
  let td_categoria = CreateColum(categoria)
  let td_titulo = CreateColum(titulo)
  let td_descripcion = CreateColum(descripcion)
  let td_precio = CreateColum('$'+precio)
  let td_disponibilidad = CreateColum(disponibilidad_text)
  let td_img = CreateColum(img, true)
  tr.appendChild(td_categoria)
  tr.appendChild(td_titulo)
  tr.appendChild(td_descripcion)
  tr.appendChild(td_precio)
  tr.appendChild(td_disponibilidad)
  tr.appendChild(td_img)

  tr.setAttribute('onclick','Select(this,"tbody-menu")')

  return tr

}


function OrderConfirm()
{
  if(temp.select_oreder){

    let _id = temp.select_oreder.id

    fetch('/pedido/orderconfirm', {
      method: 'POST',
      body: JSON.stringify({_id}),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
  

        console.log(data)
  
      }).catch((error) => {
        console.log(error);
      })
  


  }
  else
  {
    console.log('no hay orden seleccionada')
  }
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

      SetHoursAndDays(data.pizz.hours_days)
      localStorage.setItem('_id_pizzeria', data.pizz._id)
      GetPedidos(data.pizz._id)
      
      
      
      
      
     setInterval(() => {
        GetPedidos(data.pizz._id)
       }, 10000);
 
     

      // on_overlay(data.msg)
      //  window.location.href = '/' + data.link + data.user_name + '&' + data.token

    
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



      // on_overlay(data.msg)
      //  window.location.href = '/' + data.link + data.user_name + '&' + data.token
      ShowPedidos(data)
      

    }).catch((error) => {
      console.log(error);
    })

}

function ShowPedidos(data) {

  let oreders_total = 0
  let oreders_general_total = 0
  let tbody_pedidos = document.getElementById('tbody-pedidos')
  let drop_del_deliverys_search =  document.getElementById('drop_del_deliverys_search').value

  tbody_pedidos.innerHTML =''

  data.oreders.forEach(oreder => {
    let count = 1
    let total = 0
    let pedido = []
    let pedido_titulo = ''

    if(oreder.menu.length == 1) {
      const current_order = oreder.menu[0];
      pedido.push({titulo: current_order.menu.titulo, count:1 })
      total+= current_order.menu.precio
      
    }
    else
    {
      for (let index = 0; index < oreder.menu.length - 1; index++) {

        const next_index = index + 1
        const current_order = oreder.menu[index];
        const next_order = oreder.menu[next_index];
        
        total+= current_order.menu.precio
        
        if (current_order.menu._id == next_order.menu._id) 
        {
          count++

          if (next_index == oreder.menu.length - 1) {
          
            pedido.push({titulo: next_order.menu.titulo, count })
            total+= next_order.menu.precio
          }
        
        }
        
        else
        {
     
          pedido.push({titulo: current_order.menu.titulo, count })
          count = 1
          if (next_index == oreder.menu.length - 1)
          {
            pedido.push({titulo: next_order.menu.titulo, count })
            total+= next_order.menu.precio
          }

        }
      }
      
    }

    let client  = oreder.client.first_name +' '+ oreder.client.last_name
    let address_client =  oreder.client.address
    let phone_client = oreder.client.phone
  
  
    oreders_general_total += total

    let delivery = oreder.delivery

    if(oreder.delivery == undefined)
      delivery = 'sin delivery'
    else
      delivery = oreder.delivery._name +' '+oreder.delivery.last_name

    
    let pedido_descripcion = oreder.details

    pedido.forEach(p=>{
      if(p.count>1)
        pedido_titulo += p.count+' X '+ p.titulo +'<br>'
      else
        pedido_titulo += p.titulo +'<br>'
    })
 

  
    let fecha = oreder.date.split(' ')

    let date_string_american = fecha[0].split('-')
    let date_string = date_string_american[2] +'/'+ date_string_american[1]+'/'+date_string_american[0]

    let hours_string_arr = fecha[1].split(':')
    let hours_string = hours_string_arr[0]+':'+hours_string_arr[1]
    let row = CreatePedidosRow(oreder._id,oreder.n_order,date_string,hours_string,client, pedido_titulo, pedido_descripcion, address_client, phone_client, delivery,oreder.state, total)
    
    if(delivery == drop_del_deliverys_search || drop_del_deliverys_search == 'ALL')
    {
      row.style.display = ''
      oreders_total += total
    }
    else
    {
      row.style.display = 'none'
    }


    tbody_pedidos.appendChild(row)
   
    pedido_titulo = ''
  })

  let porcentaje = oreders_total * 100 / oreders_general_total

  tfoot_oreder_Total = document.getElementById('total-oreders-price')
  tfoot_oreder_general_total = document.getElementById('oreders_general_total')
  tfoot_oreder_porcentaje = document.getElementById('oreders_porcentage')
  tfoot_oreder_porcentaje.innerHTML = '%'+porcentaje.toFixed(2); 
  tfoot_oreder_general_total.innerHTML =  ' $'+  oreders_general_total
  tfoot_oreder_Total.innerHTML = '$'+  oreders_total

}




function CreateCategoria() {
  let categoria = document.getElementById('inputfiled_categoria').value

 

  let _id_pizzeria = id_pizzeria
  let user_data =
  {
    _id_pizzeria, categoria
  }
  console.log(user_data)

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

      console.log(data.categoria)
    }).catch((error) => {
      console.log(error);
    })

}
function CreateDelivery()
{
  let name = document.getElementById('inputfiled_delivery_nombre').value
  let last_name = document.getElementById('inputfiled_delivery_apellido').value
  let matricula = document.getElementById('inputfiled_delivery_matricula').value
  let vehiculo = document.getElementById('inputfiled_delivery_vehiculo').value

  
   fetch('/delivery/create', {
    method: 'POST',
    body: JSON.stringify({name,last_name,matricula,vehiculo}),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(data => {

      if(data)
         GetALllDeliverys()

      console.log(data)
    }).catch((error) => {
      console.log(error);
    })

}

function GetALllDeliverys()
{
    
  fetch('/delivery', {
    method: 'GET',
  })
    .then(response => response.json())
    .then(data => {

    if(data)
    {
     let tbody = document.getElementById('tbody-deliverys')
     let search_deliverys_oreder = document.getElementById('dropdown-delivery-search')
     let pedidos = document.getElementById('Pedidos')
     tbody.innerHTML = ''

     let modal_delivery_oreder = new Modal('delivery_oreder')
  
     let drop_delivery = new DropDown('drop_del_pedidos')
     let drop_delivery_search = new DropDown('drop_del_deliverys_search')

     let button_delivery_oreder = document.createElement('button')
     button_delivery_oreder.type = 'submit'
     button_delivery_oreder.innerHTML = 'Agregar Delivery' 
     button_delivery_oreder.setAttribute("onclick", "AddDelivery()")

     let button_delivery_search = document.createElement('button')
     button_delivery_search.type = 'submit'
     button_delivery_search.innerHTML = 'Buscar' 

     button_delivery_search.setAttribute("onclick", "SearchDelivery()")

     drop_delivery_search.addOption('Todos los pedidos','ALL')
     drop_delivery_search.addOption('Sin delivery','sin delivery')
 
     data.deliverys.forEach(del=>
      {
        tbody.appendChild(CreateDeliveryRow(del._id,del._name,del.last_name,del.matricula,del.vehiculo))
        drop_delivery.addOption(del._name +' '+del.last_name,del._id)
        drop_delivery_search.addOption(del._name +' '+del.last_name,del._name +' '+del.last_name)
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

function SearchDelivery()
{


  let tpedidos = document.getElementById('tbody-pedidos').rows
  let delivery= document.getElementById('drop_del_deliverys_search').value
  let total_oreders_price = document.getElementById('total-oreders-price')
  console.log(delivery)

  let total = 0

 for (let index = 0; index < tpedidos.length; index++) {
    const row = tpedidos[index];
    search = row.cells[8].innerHTML
    
    if(search==delivery || delivery=='ALL')
    {
      row.style.display =''
      let total_oreder = parseFloat(row.cells[10].innerHTML.substring(1))
      total += total_oreder
    } 
    else
    {
      row.style.display ='none'  
    }

    
      console.log()
    
  }
  total_oreders_price.innerHTML = '$'+total
  
}
 

function CreateInputfiled(id, placeholder,type='text') {
  let inputfiled = document.createElement('input')
  inputfiled.placeholder = placeholder
  inputfiled.id = id
  inputfiled.type  = type
  return inputfiled

}


function CreateFileUpload(id, name) {
  let inputfiled = document.createElement('input')
  inputfiled.type = 'file'
  inputfiled.id = id
  inputfiled.name = name
  return inputfiled

}

function CreateCheckBox(id) {
  let inputfiled = document.createElement('input')
  inputfiled.type = "checkbox"
  inputfiled.id = id
  return inputfiled

}



function CreateLabel(id, text) {
  let label = document.createElement('label')
  label.id = id
  label.innerHTML = text.toString()
  return label

}
