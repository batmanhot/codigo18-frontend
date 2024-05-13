document.addEventListener("DOMContentLoaded", load, false);


// Cargar valores iniciales


function load(){
    RestoreStorageDatosEnvio()
 }

function addZero(i) {
    if (i < 10) {i = "0" + i}
    return i;
  }


function fechayhoraactual(){      
    let date = new Date();
    let now  = String(date.getDate()).padStart(2, '0') + '/' +
    String(date.getMonth() + 1).padStart(2, '0') + '/' + date.getFullYear();
    
    const d = new Date();
    let h = addZero(d.getHours());
    let m = addZero(d.getMinutes());
    let s = addZero(d.getSeconds());
    let time = h + ":" + m + ":" + s;

    let horario= now+' '+time
    return horario;
}


function RestoreStorageDatosEnvio(){         
    let recogeDatos = JSON.parse(localStorage.DatosCliente);
    debugger

    console.log(recogeDatos)

    recogeDatos.forEach(dato => {                
        
        // console.log(dato.nombre);
        // console.log(dato.apellidos);
        // console.log(dato.email);
        // console.log(dato.direccion);

        let nombrescliente=dato.nombre+' '+dato.apellidos
        let vdireccion = dato.direccion
        let vemail = dato.email
        
        horario = fechayhoraactual()        
        document.getElementById("cliente").innerHTML   =  `<h3>${nombrescliente}</h3>`
        document.getElementById("hora").innerHTML      =  `<h3>${horario}</h3>`        
        // a = document.querySelector("#direccion").innerHTML =  `<h3>${vdireccion}</h3>`
        // a = document.getElementById("direccion").innerHTML =  `<h3>${vdireccion}</h3>`
        // b = document.getElementById("email").innerHTML     =  `<h3>${vemail}</h3>`

                
    
    })};