

let Clients = {}

let content_users = null




window.addEventListener('load',(event)=>{
   
    setTimeout(() => {
        GetAllClientes()
        content_users = document.getElementById('content-users-new-order')


    }, 3000);

})

function GetAllClientes()
{
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

            data.users.forEach((user,index) => {
                let div_user = document.createElement('div')

                div_user.id = user._id
                if(index%2==0)
                    div_user.style.backgroundColor = '#f2f2f2'

                if(index==0)
                    div_user.style.borderTop = '1px solid #f2f2f2'

                if(index==data.users.length-1)
                    div_user.style.borderBottom = '1px solid #f2f2f2'

                

                div_user.style.padding = '25px'
                div_user.style.borderLeft = '1px solid #f2f2f2'
                div_user.style.borderRight = '1px solid #f2f2f2'
                div_user.style.cursor = 'pointer'

                
                
                div_user.innerHTML = user.first_name +' '+user.last_name


                div_user.setAttribute('ondblclick','SelectClient(this)')

                content_users.appendChild(div_user)
            });

          // on_overlay(data.msg)
          //  window.location.href = '/' + data.link + data.user_name + '&' + data.token
          console.log(data)
          
    
        }).catch((error) => {
          console.log(error);
        })
}

function SelectClient(client)
{
   label_client = document.getElementById('client-label-new-oreder')
   label_client.innerHTML =  'Cliente: '+ client.innerHTML
   console.log(client.id)
   Clients.selected_to_new_order = client.id
   document.getElementById('close_modal_client-new-order').click() 
}


function SearchClient(word)
{
   let w = word.value.toUpperCase();
   let users = content_users.getElementsByTagName('div')
    
    for (let index = 0; index < users.length; index++) {
        const user = users[index].innerHTML.toUpperCase();
        if(user.indexOf(w)>-1)
        {
            users[index].style.display = ''
        }
        else
        {
            users[index].style.display = 'none'
        }
    }
    
 
}

