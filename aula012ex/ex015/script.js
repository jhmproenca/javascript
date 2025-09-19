const data = new Date()
const ano = data.getFullYear()
const btn = document.querySelector('#verificar')
const res = document.querySelector('#res')

btn.addEventListener('click', function() {
    const nascimento = Number(document.querySelector('#txtano').value)
    const sexo = document.getElementsByName('radsex')
    let genero = ''   // corrigido: agora é let
    const idade = ano - nascimento
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (nascimento <= 0 || nascimento > ano) {
        res.innerHTML = 'Por favor, digite um ano de nascimento válido.'
        return
    }

    if (sexo[0].checked) {
        genero = 'Homem'
        if (idade >= 0 && idade < 10){
            //criança
            img.setAttribute('src', 'foto-bebe-m.png')
        } else if (idade < 21){
            img.setAttribute('src', 'foto-jovem-m.png')
        }else if (idade < 50){
            img.setAttribute('src', 'foto-adulto-m.png')
        } else {
            img.setAttribute('src', 'foto-idoso-m.png')
        }

    } else if (sexo[1].checked) {
        genero = 'Mulher'
        if (idade >= 0 && idade < 10){
            //criança
            img.setAttribute('src', 'foto-bebe-m.png')
        } else if (idade < 21){
            img.setAttribute('src', 'foto-jovem-m.png')
        }else if (idade < 50){
            img.setAttribute('src', 'foto-adulto-m.png')
        } else {
            img.setAttribute('src', 'foto-idoso-m.png')
        }
    }

    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
})