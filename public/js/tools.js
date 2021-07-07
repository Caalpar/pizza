
let id = 0;

let id_cat = 0;

let data_temp = {
    precio: [],
    total: 0,
    pizzId:null,
    clientId:null
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


function $GetElement(id)
{
    return document.getElementById(id)
}


function $GetElementsByTagName(obj,tag)
{
    return obj.getElementsByTagName(tag)
}

