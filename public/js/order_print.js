function PrintElem()
{

    if(temp.select_oreder){
        let oreder_to_print  = document.getElementById(temp.select_oreder.id).getElementsByTagName('td')

        console.log(oreder_to_print)

        let text = `
        <div style="float:left;">Fecha: ${oreder_to_print[1].innerHTML}</div>
        <div style="float:right;">Hora: ${oreder_to_print[2].innerHTML}</div>   
        <div style=" font-size: 1.3em; text-align: center; margin-top:50px;">Nº:${oreder_to_print[0].innerHTML}</div>
        <div><hr/></div>
        <div style=" font-size: 1.3em;">Pedido</div>
        <div>${oreder_to_print[4].innerHTML}</div>
        <div><hr/></div>
        <div>Observación: ${oreder_to_print[5].innerHTML}</div>
        <div><hr/></div>
        <div>Cliente: ${oreder_to_print[3].innerHTML}</div>
        <div>Dirección: ${oreder_to_print[6].innerHTML}</div>
        <div>Teléfono: ${oreder_to_print[7].innerHTML}</div>
        <div><hr/></div>
        <div style=" font-size: 1.3em; text-align: center;">Importe: ${oreder_to_print[10].innerHTML}</div>`

        let a = window.open('', '', 'height=500, width=500');
        a.document.write('<html>');
        a.document.write(`<body><br>`);
        a.document.write(text);
        a.document.write('</body>');
        a.document.write('</html>');
        a.document.close();
        a.print();
    }
    else
    {
        console.log('seleccione un pedido para imprimir')
    }
  //  var divContents = document.getElementById("GFG").innerHTML;

}