let btn = document.querySelector('#contar')

let res = document.querySelector('#res')

btn.addEventListener('click', function  () {
    let inicio = Number(document.querySelector('#inicio').value)
    let fim = Number(document.querySelector('#fim').value)
    let passo = Number(document.querySelector('#passo').value)
    for (let c = inicio; c <= fim; c = c + passo) {
        res.innerHTML = c
        
    }
})