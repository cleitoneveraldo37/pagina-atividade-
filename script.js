// Efeito do botão "Voltar ao Topo"
function topo() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
}

// Validação de Login
function login() {
    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;

    if (usuario === "admin" && senha === "123456") {
        window.location.href = "index.html";
    } else {
        alert("Acesso não liberado. Palmeiras o melhor time do mundo!!!");
    }
}

// Alerta no botão "Cadastrar"
function cadastro() {
    alert("Cadastro realizado com sucesso!");
}
