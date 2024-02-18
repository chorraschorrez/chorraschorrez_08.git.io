let productos = [
    {nombre:"Leche", cantidad:3, precio:1.5, lactosa:true},
    {nombre:"Pan", cantidad:2, precio:1, lactosa:false}, 
    {nombre:"Arroz", cantidad:4, precio:2, lactosa:false},
    {nombre:"Yogur", cantidad:3, precio:1.5, lactosa:true}
]; 

function libreLactosa(producto){
    if (producto.lactosa==false){
        return true;
    }
}

let productosSinLactosa = [];

productos.forEach(producto => {
    if (libreLactosa(producto)) {
        productosSinLactosa.push(producto);
    }
});


// USANDO FILTER
let productosSinLactosaFilter= productos.filter(libreLactosa);

console.log(productosSinLactosaFilter);


