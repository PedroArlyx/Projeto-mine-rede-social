const verificarUsuario = (event) => {

    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("password").value.trim();
    const verificarEmail = email.includes('@') && email.includes('.');
    if (!email || !senha) {
        alert("Por favor, preencha todos os campos de login");

    }
    if( senha >=8){
        alert("os campos tem q ter no minimo 3 é 8 caracteres");
        return;
    }
    
    if (!verificarEmail) {
        alert("Por favor, insira um email válido com @ e .");
        return;
    }
    
    const usuario = JSON.parse(localStorage.getItem('Usuario'));
    if (usuario && usuario.email === email && usuario.senha === senha) {
        alert("Login feito com sucesso");
        window.location.href = "home.html";

    } else {
        alert("Email ou senha incorretos");
    }


}