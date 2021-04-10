let boxes = document.querySelectorAll('#contenedor div');
let btnReset = document.querySelector('#btn-reset');

boxes.forEach(box => {
    box.addEventListener('click', Hidde)
})

function Hidde() {
    this.style.opacity = '0';

}

btnReset.addEventListener('click', Reset);

function Reset() {
    location.reload();
}