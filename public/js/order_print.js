function PrintElem()
{




    if(temp.select_oreder){
        let oreder_to_print  = document.getElementById(temp.select_oreder.id)

        console.log(oreder_to_print)
        let a = window.open('', '', 'height=500, width=500');
        a.document.write('<html>');
        a.document.write('<body > <h1>Div contents are <br>');
        a.document.write('<div>Hola</div>');
        a.document.write('</body></html>');
        a.document.close();
        a.print();
    }
    else
    {
        console.log('seleccione un pedido para imprimir')
    }
  //  var divContents = document.getElementById("GFG").innerHTML;

}