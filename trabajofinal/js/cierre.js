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

    console.log(recogeDatos)

    recogeDatos.forEach(dato => {                
        console.log(dato);
        console.log(dato.nombre);
        console.log(dato.apellidos);
        console.log(dato.email);
        console.log(dato.direccion);

        let nombrescliente=dato.nombre+' '+dato.apellidos
        
        horario = fechayhoraactual()

        document.getElementById("cliente").innerHTML =  `<h3>${nombrescliente}</h2>`
        document.getElementById("direccion").innerHTML = `<h3>${dato.direccion}</h2>`
        document.getElementById("email").innerHTML =   `<h3>${dato.email}</h2>`        
        document.getElementById("hora").innerHTML =   `<h3>${horario}</h2>`        
    
    })};