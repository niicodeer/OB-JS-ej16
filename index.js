const parrafos = document.querySelectorAll(".parrafo")
const secciones = document.querySelectorAll(".seccion")

parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart" , e =>{
        parrafo.classList.add("dragging");
        e.dataTransfer.setData("id", parrafo.id);

        const elemento_fantasma = document.querySelector(".imagen-fantasma")
        e.dataTransfer.setDragImage(elemento_fantasma, 0, 0)
    })

    parrafo.addEventListener("dragend", e => {
        parrafo.classList.remove("dragging")
    })
})

secciones.forEach(seccion => {
    seccion.addEventListener("dragover", e=> {
        e.preventDefault();

    })

    seccion.addEventListener("drop", e =>{
        const id_parrafo = e.dataTransfer.getData("id");
        const add_parrafo = document.getElementById(id_parrafo);
        seccion.appendChild(add_parrafo) 
    })
})

const papelera = document.querySelector(".papelera")

papelera.addEventListener("dragover", event => {
    event.preventDefault()
    event.dataTransfer.dropEffect = "copy"
})

papelera.addEventListener("drop", event => {
    const id_parrafo = event.dataTransfer.getData("id")
    document.getElementById(id_parrafo).remove()

})