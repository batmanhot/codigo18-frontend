const guardadatosenvio = document.querySelector('#boton-envio')
guardadatosenvio.addEventListener('submit', SaveStorageDatosEnvioxx);

document.addEventListener("DOMContentLoaded", load, false);


// Cargar valores iniciales

function load(){            
    document.getElementById('lanzar_modal').click();    
    RestoreStorageDatosTotal()
}


function SaveStorageDatosEnvioxx(){     
    const vnombres =  document.querySelector("#first_name").value;
    const vapellidos =  document.querySelector("#last_name").value;
    const vdireccion =  document.querySelector("#direccion").value;
    const vphone =  document.querySelector("#phone").value;
    const vreferencia =  document.querySelector("#referencia").value;
    const vemail =  document.querySelector("#email").value;

    datosenvio=[{
        "nombre": vnombres,
        "apellidos": vapellidos,
        "direccion":vdireccion,
        "phone ":vphone,
        "referencia ":vreferencia,
        "email":vemail
    }]
    console.log("Nombres", vnombres)
    console.log("Apellidos", vapellidos)
    console.log("Direccion", vdireccion)
    console.log("Phone", vphone)    

    var jsonDatos = JSON.stringify(datosenvio);

    let result = window.localStorage.setItem('DatosCliente', jsonDatos);
    let recoge = JSON.parse(window.localStorage.getItem('DatosCliente'));    
}

function RestoreStorageDatosTotal(){         
    
    // let TotalPedido=[{
    //     "totalpedido": vtotal,
    //     "fechayhora": vfechayhora,
    //     "totalitems": vtotalitems
    // }]

    let recogeInfo = JSON.parse(localStorage.TotalPedido);

    console.log(recogeInfo)

    recogeInfo.forEach(dato => {                
        console.log(dato.totalpedido);
        console.log(dato.fechayhora);
        console.log(dato.totalitems);       
        
        document.getElementById("datosenvio-totalpedido").innerHTML =  `<h1>TOTAL PEDIDO S/. ${(dato.totalpedido).toFixed(2)}</h1>`
        
    
    })};