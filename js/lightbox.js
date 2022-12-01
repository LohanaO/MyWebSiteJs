const imagenes= document.querySelectorAll('.img-galeria');
const imagenesLight= document.querySelector('.agregar-imagen')
const contenedorLight= document.querySelector('.img-ligth')
const hamburguer1= document.querySelector('.hamburg');

console.log(imagenes)
console.log(imagenesLight)
console.log(contenedorLight)

imagenes.forEach(imagen=>{
    imagen.addEventListener('click',()=>{
    aparecer(imagen.getAttribute('src'))
        
        
    })
})

contenedorLight.addEventListener('click',(e)=>{
    if(e.target !== imagenesLight){
    contenedorLight.classList.toggle('show')
    imagenesLight.classList.toggle('showImage')
    hamburguer1.style.opacity='1'

    }
})

const aparecer=(imagen)=>{

    imagenesLight.src=imagen;
    contenedorLight.classList.toggle('show')
    imagenesLight.classList.toggle('showImage')
    hamburguer1.style.opacity='0'


}