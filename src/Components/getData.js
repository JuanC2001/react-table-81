export const getData = async() => {

    // encodeURI: esta función de JavaScript se encarga de reemplazar los espacios por un porcentaje veinte (%20)
    const url = `http://scratchya.com.ar/react/datos.php`
    const resp = await fetch(url); 
    const  inofr  = await resp.json();
    
    // const info = inofr.map(fila => {
    //     return {
    //         "0": fila.id
    //         // codigo : fila.codigo,
    //         // nombre: fila.nombre,
    //         // descripcion: fila.descripcion, 
    //         // dos: fila.dos, 
    //         // precio: fila.precio

    //     }
    // });
  
    return inofr;
}