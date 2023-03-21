//Expresión para verificar si un valor es un objeto 
let objAverificar=undefined;
typeof objAverificar==="object" && objAverificar!=null
//devuelve false 
//utiliza el operador typeof para verificar si el tipo de objAverificar es igual a "object".
//Es importante tener en cuenta que typeof null devuelve "object", pero null no es técnicamente
// un objeto. Por lo tanto, la siguiente parte de la expresión && objAverificar!=null se utiliza 
//para asegurarse de que la variable no sea null.
//En resumen, esta expresión verifica si la variable objAverificar es un objeto válido (y no null) 
//antes de continuar con alguna operación que requiera que la variable sea un objeto.
