const tabuada = document.getElementById('tabuada')

tabuada.addEventListener('click', function(){
    let num = Number(document.getElementById('txtn').value)
    let tab = document.getElementById('seltab')
    let c = 1
    
    if (num == 0){
        alert('Digite um número!')
    } else {
         tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.innerHTML = `${num} x ${c} = ${num*c}`
            tab.appendChild(item)
            c++
        } {
    }

        
    }
})