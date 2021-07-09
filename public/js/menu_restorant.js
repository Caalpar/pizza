function GetPizzerias(){

    fetch('/pizzeria/pizzrias', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => {

            let menus_list = document.getElementById('menus')

            data_temp.open = data.hours_data.open 

            let hours_day = data.pizz[0].hours_days
            let days = hours_day.days
            let hours = hours_day.hours

            let day_text_ele = document.getElementById('days')
            let hours_text_ele = document.getElementById('hours')

            let hours_text = ''
            
            //let day_text =

            // a definir texto del horario

            if(hours.morning.close==hours.late.open)            
                hours_text = 'abre:'+hours.morning.open +' cierra:' +hours.late.close
            else            
                hours_text = 'abre:'+hours.morning.open +' cierra:' +hours.morning.close +'  /  abre:'+hours.late.open +'  cierra:' +hours.late.close
            

            hours_text_ele.innerHTML = hours_text
            day_text_ele.innerHTML = data.hours_data.text_days

            let categoria = data.pizz[0].menus
            data_temp.pizzId = data.pizz[0]._id            
            categoria.forEach(menus => {
                let new_cat = new Categoria(menus._id, menus.categoria)
                menus.menu.forEach(m=>{
                    let new_menu = new Menu(m._id,menus._id, './imge/'+m.img,m.titulo,m.precio,m.descripcion,m.disponibilidad,data.hours_data.open)
                    new_cat.add_menu(new_menu)
                })
                menus_list.innerHTML += new_cat.get_categoria()
            });

        }).catch((error) => {
            console.log(error);
        })

}



window.addEventListener('load',function(event){
    GetPizzerias()

    setInterval(() => {
        


    }, 10000);

})


function UpdateMenu()
{


}

function openAcordion(acordion) {
    acordion.classList.toggle("active");
    let panel = acordion.nextElementSibling;
    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
    } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
    }
}

function addorder(oreder) {
    let see = oreder.classList.toggle("order")
    let id = oreder.id.split('_')
    let new_id = id[1] +'?'+ id[2]
    if (see) {


        let menu = oreder.getElementsByTagName("div")[1].innerHTML.split('<')
        let menu_title = menu[2].split('>')[1]
        let menu_price = parseInt(menu[4].split('>')[1].substring(1))
        let tbody = document.getElementById('ord')
        let reslut = new ListPedido(new_id, 1, menu_title, menu_price)

        data_temp.precio.push({
            price: menu_price,
            id_pedido: new_id,
            id_menu: oreder.id
        })
        data_temp.total += menu_price


        tbody.innerHTML += reslut.get_pedido()

        updateTotal()
    }
    else {
        let menu = document.getElementById('menu_' + new_id)
        let price = parseInt(menu.getElementsByTagName('div')[3].innerHTML.substring(1))
        data_temp.total -= price
        updateTotal()
        menu.remove()
    }

}


