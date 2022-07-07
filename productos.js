const productos = require('Productos');
let productosJson = [
    {
        id: 1,
        name: "Producto 1",
        price: "100",
        description: "Descripcion del producto 1",
        image: "https://picsum.photos/200/300"
    },
];




function renderizarCatalogo() {
$(".milista").append(
    `<div class="col-md-4">
        <div class="card mb-4 shadow-sm">
            <img src="${productosJson[i].image}" alt="${productosJson[i].name}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${productosJson[i].name}</h5>
                <p class="card-text">${productosJson[i].description}</p>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary">Ver</button>
                        <button type="button" class="btn btn-sm btn-outline-secondary">Comprar</button>
                    </div>
                    <small class="text-muted">${productosJson[i].price}</small>
                </div>
            </div>
        </div>
    </div>`
);

}
        $(".btncatalogo").click(function beneficios() {
        
            Swal.fire(
                'Todos los servicios disponibles en la veterinaria',
               'Bartolomé Mitre 1913',
                'success'
        
            
              )
             
        });
        

renderizarCatalogo();


const obtenerJsonCatalogo = () => {
    //GETJSON
    const URLJSON = "./productos.json";
    $.getJSON(URLJSON, function(respuesta, estado) {
        if (estado == "success") {
            productosJson = respuesta;
    
            renderizarCatalogo();
            console.table(productosJson)
        }
    });
    
}
obtenerJsonCatalogo();