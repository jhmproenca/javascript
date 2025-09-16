// Função para salvar o nome no localStorage
function salvarNome() {
    const nome = document.getElementById('nome').value
    if (nome.trim() === "") {
        alert("Por favor, digite um nome válido.")
        return
    }
    localStorage.setItem("nomeUsuario", nome)
    mostrarNome()
}

// Função para mostrar o nome salvo em qualquer página
function mostrarNome() {
    const nomeSalvo = localStorage.getItem("nomeUsuario")
    const res = document.getElementById("res")
    if (res && nomeSalvo) {
        res.innerText = "Olá, " + nomeSalvo + "!"
    }
}

// Executa automaticamente ao abrir a página
document.addEventListener("DOMContentLoaded", mostrarNome)