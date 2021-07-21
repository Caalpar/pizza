
let menu_edit = document.getElementById('Menus')
let menu_edit_modal = new Modal('edit_menu')

window.addEventListener('load', (event) => {
    CreateModalEditMenu()
})

function ShowModalMenuEdit() {
    let modal = document.getElementById('modal_edit_menu')
    if (temp.select_oreder_menu) {
        let data_ele = temp.select_oreder_menu.getElementsByTagName('td')

        let categoria = data_ele[0].innerHTML
        let title = data_ele[1].innerHTML
        let description = data_ele[2].innerHTML
        let price = parseFloat(data_ele[3].innerHTML.substring(1))
        let disponibilidad = false
        if(data_ele[4].innerHTML == 'si')
            disponibilidad = true


        document.getElementById('inputfiled_menu_edit_precio').value = price
        document.getElementById('inputfiled_menu_edit_titulo').value = title
        document.getElementById('inputfiled_menu_edit_descripcion').value = description
        document.getElementById('checkbox_menu_edit_disponivilidad').checked = disponibilidad
        document.getElementById('label_edit_cat').innerHTML = 'Categoria: '+ categoria
       
        
    
    }

    modal.style.display = 'block'

}


function CreateModalEditMenu() {
    let h1_menu_edit = document.createElement('h1')
    h1_menu_edit.innerHTML = 'Editar Menu'

    let inputfiled_menu_edit_precio = CreateInputfiled('inputfiled_menu_edit_precio', 'precio', 'number')
    let inputfiled_menu_edit_titulo = CreateInputfiled('inputfiled_menu_edit_titulo', 'titulo')
    let inputfiled_menu_edit_descripcion = CreateInputfiled('inputfiled_menu_edit_descripcion', 'descripcion')
    let label_edit_dis = CreateLabel('label_edit_disponibilidad', 'disponibilidad')
    let CheckBox_menu_edit_disponibilidad = CreateCheckBox('checkbox_menu_edit_disponivilidad')
    let label_edit_cat = CreateLabel('label_edit_cat', 'categoria')
    let UploadFile_edit = CreateFileUpload('upload_edit_file', 'image')

    let button_edit_menu = document.createElement('button')
    button_edit_menu.type = 'submit'
    button_edit_menu.innerHTML = 'Editar'
    button_edit_menu.setAttribute("onclick", "EditMenu()")

    menu_edit_modal.setModalContent(h1_menu_edit)
    menu_edit_modal.setModalContent(inputfiled_menu_edit_precio)
    menu_edit_modal.setModalContent(inputfiled_menu_edit_titulo)
    menu_edit_modal.setModalContent(inputfiled_menu_edit_descripcion)
    menu_edit_modal.setModalContent(label_edit_dis)
    menu_edit_modal.setModalContent(CheckBox_menu_edit_disponibilidad)
    menu_edit_modal.setModalContent(label_edit_cat)
    menu_edit_modal.setModalContent(UploadFile_edit)
    menu_edit_modal.setModalContent(button_edit_menu)

    menu_edit.appendChild(menu_edit_modal.getModal())

}

function ShowModalEditCat(){
    document.getElementById('modal_cat_edit').style.display = 'block'
}   

function EditCategoria(){
    //document.getElementById('modal_cat_edit')
}


function EditMenu() {
    if (temp.select_oreder_menu) {
        

      let _id  = temp.select_oreder_menu.id
      let precio = document.getElementById('inputfiled_menu_edit_precio').value 
      let titulo = document.getElementById('inputfiled_menu_edit_titulo').value 
      let descripcion = document.getElementById('inputfiled_menu_edit_descripcion').value 
      let disponibilidad = document.getElementById('checkbox_menu_edit_disponivilidad').checked 
      let categoria = document.getElementById('label_edit_cat').innerHTML.split(':')[1].substring(1)

      let _id_pizzeria = localStorage.getItem('_id_pizzeria')

      let files = document.getElementById('upload_edit_file').files

      form = new FormData()
      let img = ''

     console.log(files.length)

      if(files.length>0)
      {
        let file = files[0]
        img = file.name.replace(/ /g, '')
        form.append('imge', file, img)
      }
 

      let menu = {
        _id,
        precio,
        descripcion,
        titulo,
        img,
        disponibilidad
        }

    let data_send = {menu,_id_pizzeria,categoria}
    form.append('data_send', JSON.stringify(data_send))
    
    

    fetch('/pizzeria/editmenu', {
        method: 'POST',
        body: form
      })
        .then(response => response.json())
        .then(data => {        
          console.log(data)

        }).catch((error) => {
          console.log(error);
        })


    }
}


function CreateMenu() {

    let disponibilidad = document.getElementById('checkbox_menu_disponivilidad').checked
    let precio = document.getElementById('inputfiled_menu_precio').value
    let descripcion = document.getElementById('inputfiled_menu_descripcion').value
    let titulo = document.getElementById('inputfiled_menu_titulo').value
    let file = document.getElementById('upload_file').files[0]
    form = new FormData()
  
    let img = file.name.replace(/ /g, '')
    form.append('imge', file, img)
  
    console.log(file.name)
  
    let menu = { disponibilidad, precio, titulo, descripcion, img }
  
  
  
    let categoria = document.getElementById('drop_cat_menu').value
    let _id_pizzeria = id_pizzeria
  
    let user_data =
    {
      _id_pizzeria, categoria, menu
    }
  
    form.append('user_data', JSON.stringify(user_data))
  
  
  
  
    fetch('/pizzeria/addmenu', {
      method: 'POST',
      body: form
    })
      .then(response => response.json())
      .then(data => {
  
        console.log(data)
        if (data.pizz)
          ShowMenusLists(data.pizz)
  
  
      }).catch((error) => {
        console.log(error);
      })
  }

  function ShowMenusLists(p) {
    let tbody = document.getElementById('tbody-menu')
    setTimeout(() => {
      let tbody_new_oreder = document.getElementById('tbody-new-order')
      let menu = document.getElementById('Menus')
      let drop_cat_edit = new DropDown('drop_cat_edit')
      let modal_cat_edit = new Modal('cat_edit')
      tbody.innerHTML = ''
      tbody_new_oreder.innerHTML = ''
    
      p.menus.forEach(me => {
  
        drop_cat_edit.addOption(me.categoria)
        if (me.menu.length > 0) {
          me.menu.forEach(m => {
            let tr = CreateMenuRow(m._id, me.categoria, m.titulo, m.descripcion, m.precio, m.disponibilidad, m.img)
            let tr_new_order = CreateNewOrderRow(m._id, me.categoria, m.titulo,m.precio, m.disponibilidad)
            
            tbody.appendChild(tr)
  
            tbody_new_oreder.appendChild(tr_new_order)
          });
        }
      });


      let h1_menu_edit = document.createElement('h1')
      h1_menu_edit.innerHTML = 'Editar Categoria'

      modal_cat_edit.setModalContent(h1_menu_edit)


      modal_cat_edit.setModalContent(drop_cat_edit.getDrop())

      let inputfiled_cat_edit = CreateInputfiled('inputfiled_cat_edit', 'nueva categoria')
      modal_cat_edit.setModalContent(inputfiled_cat_edit)

      let button_cat_edit = document.createElement('button')
      button_cat_edit.type = 'submit'
      button_cat_edit.innerHTML = 'Editar'
      button_cat_edit.setAttribute("onclick", "EditCat()")

      modal_cat_edit.setModalContent(button_cat_edit)

  
      menu.appendChild(modal_cat_edit.getModal())
  
  
    }, 2000);
  
  }

function EditCat(){

  let new_cat = document.getElementById('inputfiled_cat_edit').value
  let curent_cat = document.getElementById('drop_cat_edit').value


  console.log (new_cat,':',curent_cat)
}




