const btnSalvar = document.getElementById('salvar')
const lista = document.getElementById('lista')

btnSalvar.addEventListener('click', function(){

    const codigo = document.getElementById('codigo').value
    const material = document.getElementById('material').value
    const descricao = document.getElementById('descricao').value
   
    // cria a linha e as células
   const linha = document.createElement('tr')

   linha.innerHTML = `
        <td>${codigo}</td>
        <td>${material}</td>
        <td>${descricao}</td>`

    // adiciona no final da tabela
    lista.appendChild(linha)

    // limpa os inputs
    document.getElementById('codigo').value = ''
    document.getElementById('material').value = ''
    document.getElementById('descricao').value = ''
})
