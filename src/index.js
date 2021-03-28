/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

import {registrarImagen} from './lazy.js'

const maximum = 122;
const minimum = 1; 
const random = ()=>  Math.floor(Math.random() * (maximum-minimum)+ minimum);
    


const createImageNode = ()=>{
    const container = document.createElement('div');
    container.className = "p-4";

    const imagen = document.createElement('img');
    imagen.className = "mx-auto";
    imagen.width = "320";
    /**
     *    1. forma
      Si no queremos que una imagen cargue tenemos que eliminar
      la parte que la carga ya que esta linea trae la url de la imagen
      por lo tanto la hara cargar siempre.

      Pasaremos este trabajo de cargar la imagen al lazy loading

      2.forma

      La informacion de la url se la dejaremos a la imagen pero 
      utilizaremos el dataset  que es una propiedad de html

      Dataset se utiliza mucho para comunicar informacion entre html
      y js, es muy comun tener diferentes data-? para comunicar la info
    
     */
    imagen.dataset.src = `https://randomfox.ca/images/${random()}.jpg`;

    container.appendChild(imagen);
    return container;  
}



const mountNode = document.getElementById("images");
const addButton = document.querySelector('button');
const addImage = ()=> {
    const newImage = createImageNode();
    mountNode.append(newImage);
    registrarImagen(newImage);
}

addButton.addEventListener('click', addImage);
