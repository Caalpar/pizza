
let id = 0;

let id_cat = 0;

let data_temp = {
    precio: [],
    total: 0,
    pizzId:null,
    clientId:null,
    categoria:null,
    open:true
}


function updateTotal()
{
    total = document.getElementById('total')
    total.innerHTML = 'Total: $'+data_temp.total
}


function on_overlay(msg) {
    let overlay =  document.getElementById("overlay");
    overlay.style.display = "block"
    overlay.getElementsByTagName('div')[0].innerHTML = msg
}

function off_overlay() {
    document.getElementById("overlay").style.display = "none";
  }

function SnackBar(message) {
    var x = $GetElement("snackbar");
    x.innerHTML = message
    x.className = "show-snackbar";
    setTimeout(function(){ x.className = x.className.replace("show-snackbar", ""); }, 3000);
}

function CerateMainMenu(open){
  
    let categoria = data_temp.categoria

    if(categoria!=null)
    {
        console.log(categoria)
        let menus_list = document.getElementById('menus')
        menus_list.innerHTML = ''
        categoria.forEach(menus => {
            let new_cat = new Categoria(menus._id, menus.categoria)
            menus.menu.forEach(m=>{
                let new_menu = new Menu(m._id,menus._id, './imge/'+m.img,m.titulo,m.precio,m.descripcion,m.disponibilidad,open)
                new_cat.add_menu(new_menu)
            })
            menus_list.innerHTML += new_cat.get_categoria()
        });
    }

}


function $GetElement(id)
{
    return document.getElementById(id)
}


function $GetElementsByTagName(obj,tag)
{
    return obj.getElementsByTagName(tag)
}

