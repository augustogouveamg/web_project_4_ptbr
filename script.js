// fechar popup
function fecharPopup(){
    let popup = document.querySelector(".popup");
    popup.classList.remove("popup_opened");
}
let botaoFechar = document.querySelector(".popup__closeIcon");
botaoFechar.addEventListener("click",fecharPopup);
// abrir popup
let botaoEditarPerfil = document.querySelector(".profile__editButton");
botaoEditarPerfil.addEventListener("click",function(){
    let popup = document.querySelector(".popup");
    popup.classList.add("popup_opened");
})
//Nome e Sobre ja preenchidos no popup
let campoNome = document.querySelector(".popup__inputNome");
campoNome.value = document.querySelector(".profile__name").innerText;
let campoSobre = document.querySelector(".popup__inputSobre");
campoSobre.value = document.querySelector(".profile__about").innerText;

//alterar o nome e o sobre
let formElement = document.querySelector(".popup__container")
function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    let nameInput = document.querySelector(".popup__inputNome").value;
    let jobInput = document.querySelector(".popup__inputSobre").value;
    let campoNome = document.querySelector(".profile__name");
    let campoSobre = document.querySelector(".profile__about");
    campoNome.innerText = nameInput;
    campoSobre.innerText = jobInput;
    fecharPopup();
}
formElement.addEventListener('submit', handleProfileFormSubmit);

//Botao curtir
function curtir(botao){
    console.log("teste");
    console.log(botao)
    let card = botao.closest('.card__nameLike');
    console.log(card)
    let botaoLike = card.querySelector("img");
    console.log(botaoLike.src);
    console.log(botaoLike.src.includes("Vector"));
    if(botaoLike.src.includes("coracao")){
        botaoLike.src = "./images/like.svg";
    }
    else botaoLike.src = "./images/coracao.svg";
}

