//aplicando intersection observer

const isIntersecting = (entry)=>{
    return entry.isIntersecting; // Devulve true if dentro de la pantalla
}

const loadImage = (entry)=>{
    console.log("Holis");
    
    /*obtenemos la imagen a partir del contenedor y podremos acceder 
      a dataset.src y obtener la url   
    
    */

    //const imagen = container.querySelector('img');

    //otra forma es obteniendo el hijo con las propiedades firstChil o lastChild
    // que en este caso serian las imagenes que son los hijos de nuestro contenedor
    const container = entry.target; //DIV
    const imagen = container.firstChild;
    const url = imagen.dataset.src;

    
    imagen.src = url;
    //desregistra o dejar de escuchar la imagen
    observer.unobserve(container);
}

const observer = new IntersectionObserver((entries)=>{
    entries.filter(isIntersecting).forEach(loadImage);

});

export const registrarImagen = (imagen)=>{
    observer.observe(imagen)
}