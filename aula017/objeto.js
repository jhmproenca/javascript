let amigo = { // declarando objeto
    nome:'José', 
    peso: 85.4,
    engordar(p=0){ //transforma elemento em função
        console.log('Engordou')
        this.peso += p //adiciona p em peso
    }
}

amigo.engordar(2) //engordou 2kg
console.log(`${amigo.nome} pesa ${amigo.peso}`)