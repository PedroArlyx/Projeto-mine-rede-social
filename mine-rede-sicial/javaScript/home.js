const publicar = () => {
    
    const titulo = document.querySelector("#titulo").value;
    const comentario = document.querySelector("#comentario").value;
    const arquivo = document.querySelector("#arquivo").files[0];
    const usuario = JSON.parse(localStorage.getItem('Usuario'));

    if (!titulo || !comentario || !arquivo) {
        alert("Preencha todos os campos e selecione uma imagem.");
        return;
    }

    const imagemURL = URL.createObjectURL(arquivo);
    const form = document.getElementById("form-images");

    const postWrapper = document.createElement('div');
    postWrapper.classList.add("post-wrapper");

    const imagemDiv = document.createElement('div');
    imagemDiv.classList.add("custom-image");
    imagemDiv.style.backgroundImage = `url('${imagemURL}')`;

    const overlay = document.createElement('div');
    overlay.classList.add("corpo_public");
    overlay.innerHTML = `
        <div class="post-title">
            <h3>Usuário: ${usuario.nome}</h3>
            <h4>Titulo: ${titulo}</h4>
            <p>Comentario: ${comentario}</p>
        </div>
        `;

    imagemDiv.appendChild(overlay);
    postWrapper.appendChild(imagemDiv);
    form.appendChild(postWrapper);

};
const sair = () => {
    window.location.href = "login.html";
};

function mostrarNomeUsuario() {
    const usuario = JSON.parse(localStorage.getItem('Usuario'));

    if (usuario && usuario.nome) {
        const elemento = document.getElementById('usuario-logado');
        elemento.textContent = `Nome: ${usuario.nome}!`;
    } else {
        console.warn('Usuário não encontrado no localStorage.');
    }
};

