const salvarElementos = (event) => {

    event.preventDefault();
  
    const usuario ={
        email :document.querySelector('#email').value,
        nome : document.querySelector('#nome').value,
        senha : document.querySelector('#password').value
    };
    
    const verificarEmail = usuario.email.includes('@') && usuario.email.includes('.');

    if(!verificarEmail){
        alert("Por favor, insira um email válido com @ e .");
        return;
    }
    if( usuario.nome >3 || usuario.senha >= 8){
        alert("os campos tem q ter no minimo 3 é 8 caracteres");
        return;
    }

    if(!usuario.email || !usuario.nome || !usuario.senha){
        alert("Preencha todos os campos!");
        return;
    }
    
    localStorage.setItem('Usuario',JSON.stringify(usuario));
    
   if(usuario.email && usuario.nome && usuario.senha){
    alert("cadtastro feito com sucesso");
    window.location.href = "home.html";
   }

}

