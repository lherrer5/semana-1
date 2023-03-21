const humana= {
    id: 1531,
    nombre: "Lina",
    apellido: "Herrera",
    nacionalidad: "Colombiana",
    chocolateLover: true,
}

//Expresión para verificar si un valor es un array 
let arrayAverificar=[1,2,3];
typeof arrayAverificar==="object" && arrayAverificar.constructor === Array
//se utiliza el operador typeof para verificar si el tipo de arrayAverificar es igual a "object".
//Es importante tener en cuenta que typeof null devuelve "object", pero null no es un objeto de JavaScript. 
//Por lo tanto, se utiliza la segunda parte de la expresión && arrayAverificar.constructor === Array para asegurarse 
//de que la variable sea un objeto de la clase Array. El método constructor devuelve la función constructora para 
//el objeto, por lo que se puede verificar si arrayAverificar fue creado mediante la función constructora Array().
//En resumen, esta expresión verifica si la variable arrayAverificar es un array válido antes de continuar con
//alguna operación que requiera que la variable sea un array.