
var res = document.getElementById('res')
var enviar = document.getElementById('enviar')


enviar.addEventListener("click", function(){
    var nome = document.getElementById('nome').value
    var idade = document.getElementById('idade').value
    res.innerHTML = `Olá, ${nome}. Você tem ${idade} anos de idade`
})