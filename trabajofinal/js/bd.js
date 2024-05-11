const bdProductos=[
    {"id":1,"titulo":"La Clasica","precio":"15.00","descripcion":"Rica Hamburguesa de Carne seleccionada con papas al hilo/ papas fritas, ensalada y todas las cremas","imagen":"./assets/img/hamb-1.png"},
    {"id":2,"titulo":"La Royal","precio":"22.00","descripcion":"Rica Hamburguesa de Carne seleccionada con queso derretido, huevo frito, con papas al hilo/ papas fritas, ensalada y todas las cremas","imagen":"./assets/img/hamb-2.png"},
    {"id":3,"titulo":"La Mexicana","precio":"22.00","descripcion":"Rica Hamburguesa de Carne seleccionada con frijoles, huevo frito, con papas al hilo/ papas fritas, ensalada y todas las cremas","imagen":"./assets/img/hamb-3.png"},
    {"id":4,"titulo":"Guacamole","precio":"25.90","descripcion":"Hamburguesa grande a la parrilla con tomates, lechuga, pepinillos, aros de cebolla y salsa","imagen":"./assets/img/hamb-4.png"},
    {"id":5,"titulo":"Tejana","precio":"24.90","descripcion":"Hamburguesa grande a la parrilla con queso, tocino, tomates, lechuga, mayonesa, salsa BBQ, pepinillos y aros de cebolla","imagen":"./assets/img/hamb-5.png"},
    {"id":6,"titulo":"Crispy","precio":"23.90","descripcion":"Hamburguesa grande a la parrilla con queso, cebollitas crujientes, salsa BBQ, tomate, lechuga y mayonesa","imagen":"./assets/img/hamb-6.png"},
    {"id":7,"titulo":"Doble con Queso","precio":"27.90","descripcion":"Hamburguesa regular de doble carne a la parrilla con doble queso, mostaza, ketchup y pepinillos","imagen":"./assets/img/hamb-7.png"},
    {"id":8,"titulo":"Whooper Clasica","precio":"21.90","descripcion":"Hamburguesa grande a la parrilla con tomates, lechuga, mayonesa, ketchup, pepinillos y aros de cebolla.","imagen":"./assets/img/hamb-8.png"},
    {"id":9,"titulo":"Whopper Vegetal","precio":"23.90","descripcion":"Hamburguesa grande hecha a base de plantas grande a la parrilla con tomates, lechuga, mayonesa, ketchup, pepinillos y aros de cebolla.","imagen":"./assets/img/hamb-9.png"},
    {"id":10,"titulo":"Mega BK STACKER® Cuádruple","precio":"40.90","descripcion":" Disfruta de cuádruple hamburguesa 100% carne de res a la parrilla, queso, tocino y nuestra exclusiva salsa BK STACKER","imagen":"./assets/img/hamb-10.png"},
    {"id":11,"titulo":"Chicken Duo ","precio":"22.90","descripcion":"2 chicken cheese y 2 papas jr.","imagen":"./assets/img/hamb-11.png"},
    {"id":12,"titulo":"10 Nuggets","precio":"17.90","descripcion":"10 Nuggets de pollo con papas fritas y gaseosa helada.","imagen":"./assets/img/hamb-12.png"}]


const bdNegocio=[
    {"id":1,"titulo":"RED BURGUER","direccion":"Av. Arequipa 1590 Lince / Mega Plaza piso 1 - tienda 1150 al costado de Saga","horario":"Lunes a Domingo 11am - 11pm","imagen":""}]



// export {bdProductos as bdp, bdNegocio as bdn}


// for (let i=0; i < bd.length; i++){
//     console.log(bd[i].id, bd[i].first_name, bd[i].last_name, bd[i].email, bd[i].gender, bd[i].ip_address)
// }

// bd.forEach(element => {
//     console.log(element.id, element.first_name, element.last_name, element.email, element.gender, element.ip_address)
// });

// for (let key of bd){
//     console.log(key.id, key.first_name, key.last_name, key.email, key.gender, key.ip_address)
// }

// for (let key in bdProductos){
//     console.log(key, bdProductos[key].id, bdProductos[key].titulo, bdProductos[key].precio, bdProductos[key].descripcion);
// };


// for (let key in bdNegocio){
//     console.log(key, bdNegocio[key].id, bdNegocio[key].titulo, bdNegocio[key].direccion, bdNegocio[key].horario);
// };


ActualizaInformacionNegocio();
CardsHTML();



function CardsHTML() {
    let rowx = ""
    nItems = 0

    const contenedorCard = document.querySelector('.contenido');
    document.querySelector(".contenido").innerHTML=""

    console.log("Ver Cards de la web")

    bdProductos.forEach(product => {        
        let rowx = document.createElement('div');
        rowx.classList.add('card')
        rowx.innerHTML = `
                <div class="card-presentacion">
                    <div class="card-img">
                        <img src=${product.imagen} alt="">
                    </div>                                                                

                    <div class="card-texto">
                        <h4 class="card-texto-titulo">${product.titulo}</h4>
                        <p>${product.descripcion}</p>

                        <br>                            
                        <div class="card-datos"> 
                            <div class="card-precio">             
                                <span>S/.</span>
                                <p>${product.precio}</p>
                            </div>

                            <div class="card-compras">
                                <button class="card-compras-botonagregar">
                                    <img src="./assets/img/anadir-al-carrito.png" alt="">                                             
                                </button>
                                
                            </div>
                        </div>
                    </div>                                       
                </div>`;
                

        nItems = nItems + 1;

        contenedorCard.appendChild(rowx); 
        console.log(rowx)
    });
};


function ActualizaInformacionNegocio() 
{    
    
    bdNegocio.forEach(item => {   

        const ctitulo    = item.titulo
        const cdireccion = item.direccion
        const chorario   = item.horario

        console.log(ctitulo)
        console.log(cdireccion)
        console.log(chorario)        
        document.querySelector(".container-icono-titulo > h2").innerHTML =  `<h4>${ctitulo}</h4>`  
        document.querySelector(".container-icono-titulo > h4").innerHTML =  `<h4>${cdireccion}</h4>`    
        document.querySelector(".container-icono-titulo-horario").innerHTML =  `<h4>${chorario}</h4>`
    });    
}
