const botaoFechar = document.querySelector(".popup__closeIcon");
const botaoEditarPerfil = document.querySelector(".profile__editButton");
const campoNome = document.querySelector(".popup__inputNome");
const campoSobre = document.querySelector(".popup__inputSobre");
const formElement = document.querySelector(".popup__container")
const initialCards = [
    {
      name: "Vale de Yosemite",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg"
    },
    {
      name: "Lago Louise",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg"
    },
    {
      name: "Montanhas Carecas",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg"
    },
    {
      name: "Latemar",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg"
    },
    {
      name: "Parque Nacional da Vanoise ",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg"
    },
    {
      name: "Lago di Braies",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg"
    }
  ]; 
// fechar popup
function fecharPopup(element){
    console.log(element);
    let popup = document.querySelector(element);
    console.log(element);
    popup.classList.remove("popup_opened");
}
botaoFechar.addEventListener("click",()=>{
    fecharPopup(".popup");
});
// abrir popup
botaoEditarPerfil.addEventListener("click",function(){
    let popup = document.querySelector(".popup");
    popup.classList.add("popup_opened");
})
//Nome e Sobre ja preenchidos no popup
campoNome.value = document.querySelector(".profile__name").innerText;
campoSobre.value = document.querySelector(".profile__about").innerText;

//alterar o nome e o sobre
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

//Adicionar card
function addCard(name, link){
    const cardTemplate = document.querySelector("#card").content;
    const cards = document.querySelector('.cards');
    const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
    cardElement.querySelector(".card__image").src = link;
    cardElement.querySelector(".card__imageName").textContent = name;
    console.log(cardElement);
    cards.append(cardElement);
}
//Adiciona os cards iniciais
initialCards.forEach(inicialCard =>{
    addCard(inicialCard.name, inicialCard.link)
})

//Abrir popup para adicionar novo item
const buttonAddCard = document.querySelector(".profile__addButton");
buttonAddCard.addEventListener("click", ()=>{
    let popup = document.querySelector(".popupNewItem");
    console.log(popup);
    popup.classList.add("popup_opened");
})

//Fechar popup para adicionar novo intem
const buttonCloseNewItem = document.querySelector(".closeIconNewItem");
console.log(buttonCloseNewItem)
buttonCloseNewItem.addEventListener("click", function(){
    fecharPopup(".popupNewItem")
})