

let Clients = {}

let content_users = null
let tbody_clients = null//document.getElementById('tbody-new-order')



window.addEventListener('load', (event) => {

    let clients = document.getElementById('Clientes')

    let modal_add_clients = new Modal('add_clients')

    let form = document.createElement('form')
    let h1_title_new_client = document.createElement('h1')
    h1_title_new_client.innerHTML="Crear Cliente"
    let inputfiled_user = CreateInputfiled('inputfiled_user', 'usuario')
    let inputfiled_password = CreateInputfiled('inputfiled_password', 'contraseña', 'password')
    let inputfiled_first_name = CreateInputfiled('inputfiled_first_name', 'nombre')
    let inputfiled_first_last = CreateInputfiled('inputfiled_first_last', 'apellido')
    let inputfiled_email = CreateInputfiled('inputfiled_email', 'email')
    let inputfiled_phone = CreateInputfiled('inputfiled_phone', 'telefono')
    let inputfiled_address = CreateInputfiled('inputfiled_address', 'direccion')
    let inputfiled_reference = CreateInputfiled('inputfiled_reference', 'Referencia')
    let inputfiled_neighborhood = CreateInputfiled('inputfiled_neighborhood', 'barrio')
    let inputfiled_corner = CreateInputfiled('inputfiled_corener', 'esquina')

    inputfiled_user.required = true
    inputfiled_password.required = true
    inputfiled_first_name.required = true
    inputfiled_first_last.required = true
    inputfiled_email.required = true
    inputfiled_phone.required = true
    inputfiled_address.required = true
    inputfiled_reference.required = true
    inputfiled_neighborhood.required = true
    inputfiled_corner.required = true

    let button_add_cli = document.createElement('button')
    button_add_cli.type = 'submit'
    button_add_cli.innerHTML = 'Crear'
    button_add_cli.setAttribute("onclick", "CreateUser()")

    form.appendChild(h1_title_new_client)
    form.appendChild(inputfiled_user)
    form.appendChild(inputfiled_password)
    form.appendChild(inputfiled_first_name)
    form.appendChild(inputfiled_first_last)
    form.appendChild(inputfiled_email)
    form.appendChild(inputfiled_phone)
    form.appendChild(inputfiled_address)
    form.appendChild(inputfiled_reference)
    form.appendChild(inputfiled_neighborhood)
    form.appendChild(inputfiled_corner)
    form.appendChild(button_add_cli)

    modal_add_clients.setModalContent(form)

    console.log(clients)

    clients.appendChild(modal_add_clients.getModal())

    setTimeout(() => {
        tbody_clients = document.getElementById('table-clientes')
        content_users = document.getElementById('content-users-new-order')


        GetAllClientes()



    }, 3000);

})

function GetAllClientes() {
    fetch('/user/all', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => {

            Clients.data = data

            content_users.innerHTML = ''

            data.users.forEach((user, index) => {
                let div_user = document.createElement('div')

                div_user.id = user._id
                if (index % 2 == 0)
                    div_user.style.backgroundColor = '#f2f2f2'

                if (index == 0)
                    div_user.style.borderTop = '1px solid #f2f2f2'

                if (index == data.users.length - 1)
                    div_user.style.borderBottom = '1px solid #f2f2f2'




                div_user.style.padding = '25px'
                div_user.style.borderLeft = '1px solid #f2f2f2'
                div_user.style.borderRight = '1px solid #f2f2f2'
                div_user.style.cursor = 'pointer'

                tbody_clients.appendChild(CreateClientRow(user._id,
                    user.user_name,
                    user.first_name,
                    user.last_name,
                    user.email,
                    user.phone,
                    user.address,
                    user.neighborhood,
                    user.reference,
                    user.corner))

                div_user.innerHTML = user.first_name + ' ' + user.last_name


                div_user.setAttribute('ondblclick', 'SelectClient(this)')

                content_users.appendChild(div_user)
            });

            // on_overlay(data.msg)
            //  window.location.href = '/' + data.link + data.user_name + '&' + data.token
            console.log(data)


        }).catch((error) => {
            console.log(error);
        })
}

function SelectClient(client) {
    label_client = document.getElementById('client-label-new-oreder')
    label_client.innerHTML = 'Cliente: ' + client.innerHTML
    console.log(client.id)
    Clients.selected_to_new_order = client.id
    document.getElementById('close_modal_client-new-order').click()
}


function SearchClient(word) {
    let w = word.value.toUpperCase();
    let users = content_users.getElementsByTagName('div')

    for (let index = 0; index < users.length; index++) {
        const user = users[index].innerHTML.toUpperCase();
        if (user.indexOf(w) > -1) {
            users[index].style.display = ''
        }
        else {
            users[index].style.display = 'none'
        }
    }


}


function CreateClientRow(_id, usuario, nombre, apellido, email, phone, direccion, referencia, barrio, esquina) {

    let tr = document.createElement('tr')
    tr.id = _id
    let td_usuario = CreateColum(usuario)
    let td_nombre = CreateColum(nombre)
    let td_apellido = CreateColum(apellido)
    let td_email = CreateColum(email)
    let td_phone = CreateColum(phone)
    let td_direccion = CreateColum(direccion)
    let td_referencia = CreateColum(referencia)
    let td_barrio = CreateColum(barrio)
    let td_esquina = CreateColum(esquina)

    tr.appendChild(td_usuario)
    tr.appendChild(td_nombre)
    tr.appendChild(td_apellido)
    tr.appendChild(td_email)
    tr.appendChild(td_phone)
    tr.appendChild(td_direccion)
    tr.appendChild(td_referencia)
    tr.appendChild(td_barrio)
    tr.appendChild(td_esquina)

    return tr

}


function ModaAddClients() {
    document.getElementById("modal_add_clients").style.display = 'block';
}


function CreateUser() {
    let client = true
    let user_name = document.getElementById('inputfiled_user').value
    let first_name = document.getElementById("inputfiled_first_name").value
    let last_name = document.getElementById("inputfiled_first_last").value
    let email = document.getElementById("inputfiled_email").value
    let phone = document.getElementById("inputfiled_phone").value
    let address = document.getElementById("inputfiled_address").value
    let neighborhood = document.getElementById("inputfiled_neighborhood").value
    let reference = document.getElementById("inputfiled_reference").value
    let corner = document.getElementById("inputfiled_corener").value
    let password = document.getElementById("inputfiled_password").value

    if (
        user_name &&
        first_name &&
        last_name &&
        email &&
        phone &&
        address &&
        neighborhood &&
        reference &&
        corner &&
        password
    ) {
        let user_data =
        {
            user_name,
            first_name,
            last_name,
            email,
            phone,
            address,
            password,
            neighborhood,
            reference,
            corner,
            client
        }

        fetch('/user/create', {
            method: 'POST',
            body: JSON.stringify(user_data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                /*OpenMenuSesion(null,'singin','100')
                on_overlay(data.msg)*/
                location.reload();
                console.log(data)
            }).catch((error) => {
                console.log(error);
            })
    }
}

