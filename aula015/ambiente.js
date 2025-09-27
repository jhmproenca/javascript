let num  = [5, 8, 2, 3]
num[4] = 6
num.push(7)


console.log(`Nosso vetor é o ${num} e seu tamanho é ${num.length} e sua ordem crescente é ${num.sort()}`)
/* 
for(let pos = 0; pos < num.length; pos++ ){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
 */

//Jeito SImplificado
for(let pos in num){
    console.log(`Na posição ${pos} o valor é ${num[pos]}`)
}

let pesq = num.indexOf(8)

if (pesq == -1){
    console.log(`Valor não encontrado`)
} else {
    console.log(`O valor 8 está na posição ${pesq}`)
}