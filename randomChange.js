let body = document.querySelector('body');
let button = document.querySelector('button');
let para = document.querySelector('p')
function randomNum(){
    return Math.floor( Math.random() * 256)
}


function randomChange() {
    body.style.backgroundColor = `rgb(${randomNum()},${randomNum()},${randomNum()})`
    para.textContent = 'Changed...'
}

