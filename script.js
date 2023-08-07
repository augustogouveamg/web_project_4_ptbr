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
    let popup = document.querySelector(element);
    popup.classList.remove("popup_opened");
}
// abrir popup
function openPopup(element){
  let popup = document.querySelector(element);
  popup.classList.add("popup_opened");
}
botaoFechar.addEventListener("click",()=>{
    fecharPopup(".popup");
});
// abrir popup
botaoEditarPerfil.addEventListener("click",()=>{
  openPopup(".popup");
})
//Nome e Sobre ja preenchidos no popup
campoNome.value = document.querySelector(".profile__name").innerText;
campoSobre.value = document.querySelector(".profile__about").innerText;

//alterar o nome e o sobre
function handleProfileFormSubmit(evt) {
    console.log("evento:"+evt);
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
    let card = botao.closest('.card__nameLike');
    let botaoLike = card.querySelector("img");
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
    cards.prepend(cardElement);
}
//Adiciona os cards iniciais
initialCards.forEach(inicialCard =>{
    addCard(inicialCard.name, inicialCard.link)
})

//Abrir popup para adicionar novo item
const buttonAddCard = document.querySelector(".profile__addButton");
buttonAddCard.addEventListener("click", ()=>{
  openPopup(".popupNewItem")
})

//Fechar popup para adicionar novo intem
const buttonCloseNewItem = document.querySelector(".closeIconNewItem");
buttonCloseNewItem.addEventListener("click", function(){
    fecharPopup(".popupNewItem")
})

//Adicionar um cartão inserido pelo usuário
const formElementNewItem = document.querySelector(".popupNewItem__container");
function cardFormSubmit(evt){
  evt.preventDefault();
  let title = document.querySelector(".popupNewItem__title").value;
  let link = document.querySelector(".popupNewItemUrl").value;
  addCard(title,link);
  fecharPopup(".popupNewItem")
}
formElementNewItem.addEventListener('submit',cardFormSubmit);

//excluir card
const buttonDelet = document.querySelectorAll(".card__delet");
buttonDelet.forEach((button)=>{
  button.addEventListener("click",cardDelet)
})
function cardDelet (evt) {
  console.log(evt);
  const card  = evt.target.closest(".card");
  console.log(card);
  card.remove();
}

//abrir imagem
const images = document.querySelectorAll(".card__image");
images.forEach((image)=>{
  image.addEventListener("click",imageZoom);
})

function imageZoom(evt){
  console.log(evt);
  const popupImage = document.querySelector(".popup__image")
  const card  = evt.target.closest(".card__image");
  
  console.log(popupImage);
  console.log(evt.target.closest(".card__image"))
  popupImage.src = card.src;
  console.log(card)
  const namePopup= document.querySelector(".popup__nameCard")
  const nameFoto = document.querySelector(".card__imageName");
  console.log(evt.target.closest(".card__imageName"));
  console.log(namePopup,"--",nameFoto)
  namePopup.textContent = nameFoto.textContent
  openPopup(".popup__zoom")
  
}

//fechar imagem
const closeImage = document.querySelector(".popup__closeImage")
closeImage.addEventListener("click",()=>{
  fecharPopup(".popup__zoom");
})