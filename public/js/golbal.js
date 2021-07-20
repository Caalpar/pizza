
let id = localStorage.getItem("_id")
let token = localStorage.getItem("token")
let id_pizzeria = localStorage.getItem("_id_pizzeria")
let pizz = null
let temp = {}


function CreateColum(data, img = false) {
    let td = document.createElement('td')
    if (img) {
      let imge = document.createElement('img')
      imge.src = '/imge/' + data
      imge.style.width = '100%'
      imge.style.height = 'auto'
      imge.style.maxWidth = '120px'
      td.appendChild(imge)
    } else {
      td.innerHTML = data
    }
    return td
  }


  
function Select(ele,id){
    tbody = document.getElementById(id).getElementsByTagName('tr')
 
    for (let index = 0; index < tbody.length; index++) {
      const tr = tbody[index];
      if(index % 2 == 0)
      { 
        tr.style.backgroundColor = '#f2f2f2'
      }
      else
      {
        tr.style.backgroundColor = 'white'
      }
  
    }
    ele.style.backgroundColor = '#ddd'
  
    switch (id) {
        case 'tbody-pedidos':
            temp.select_oreder = ele
            break;
        case 'tbody-menu':
            temp.select_oreder_menu = ele
            break;
            temp.select = ele
        default:

            break;
    }
}
  