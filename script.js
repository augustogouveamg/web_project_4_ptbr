const closeButton = document.querySelector(".popup__closeIcon");
const buttonEditProfile = document.querySelector(".profile__editButton");
const fieldName = document.querySelector(".popup__inputName");
const fieldAbout = document.querySelector(".popup__inputAbout");
const formElement = document.querySelector(".popup__container");
const initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    name: "Montanhas Carecas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    name: "Parque Nacional da Vanoise ",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
];
// fechar popup
function closePopup(element) {
  const popup = document.querySelector(element);
  popup.classList.remove("popup_opened");
}
// abrir popup
function openPopup(element) {
  const popup = document.querySelector(element);
  popup.classList.add("popup_opened");
}
closeButton.addEventListener("click", () => {
  closePopup(".popup");
});
// abrir popup
buttonEditProfile.addEventListener("click", () => {
  openPopup(".popup");
});
//Nome e Sobre ja preenchidos no popup
fieldName.value = document.querySelector(".profile__name").innerText;
fieldAbout.value = document.querySelector(".profile__about").innerText;

//alterar o nome e o sobre
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  const nameInput = document.querySelector(".popup__inputName").value;
  const jobInput = document.querySelector(".popup__inputAbout").value;
  const fieldName = document.querySelector(".profile__name");
  const fieldAbout = document.querySelector(".profile__about");
  fieldName.innerText = nameInput;
  fieldAbout.innerText = jobInput;
  closePopup();
}
formElement.addEventListener("submit", handleProfileFormSubmit);

//Botao curtir
function like(button) {
  const card = button.target.closest(".card__likeButton");
  const buttonLike = card.querySelector("img");
  if (buttonLike.src.includes("heart")) {
    buttonLike.src = "./images/like.svg";
  } else buttonLike.src = "./images/heart.svg";
}

//Adicionar card
function addCard(name, link) {
  const cardTemplate = document.querySelector("#card").content;
  const cards = document.querySelector(".cards");
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  cardElement.querySelector(".card__image").src = link;
  cardElement.querySelector(".card__imageName").textContent = name;
  cardElement.querySelector(".card__image").alt = name;
  const remove = cardElement.querySelectorAll(".card__delete");
  remove.forEach((button) => {
    button.addEventListener("click", cardDelete);
  });
  cards.prepend(cardElement);
  const buttonLike = document.querySelectorAll(".card__likeButton");
  buttonLike.forEach((buttonLike) => {
    buttonLike.addEventListener("click", like);
  });
}
//Adiciona os cards iniciais
initialCards.forEach((initialCards) => {
  addCard(initialCards.name, initialCards.link);
});

//Abrir popup para adicionar novo item
const buttonAddCard = document.querySelector(".profile__addButton");
buttonAddCard.addEventListener("click", () => {
  openPopup(".popupNewItem");
});

//Fechar popup para adicionar novo intem
const buttonCloseNewItem = document.querySelector(".closeIconNewItem");
buttonCloseNewItem.addEventListener("click", function () {
  closePopup(".popupNewItem");
});

//Adicionar um cartão inserido pelo usuário
const formElementNewItem = document.querySelector(".popupNewItem__container");
function cardFormSubmit(evt) {
  evt.preventDefault();
  const title = document.querySelector(".popupNewItem__title").value;
  const link = document.querySelector(".popupNewItemUrl").value;
  addCard(title, link);
  const remove = document.querySelectorAll(".card__delete");
  remove.addEventListener("click", cardDelete);
  closePopup(".popupNewItem");
}
formElementNewItem.addEventListener("submit", cardFormSubmit);

//excluir card
const buttonDelete = document.querySelectorAll(".card__delete");
buttonDelete.forEach((button) => {
  button.addEventListener("click", cardDelete);
});
function cardDelete(evt) {
  const card = evt.target.closest(".card");
  card.remove();
}

//abrir imagem
const images = document.querySelectorAll(".card__image");
images.forEach((image) => {
  image.addEventListener("click", function (evt) {
    const popupImage = document.querySelector(".popup__image");
    const card = evt.target.closest(".card__image");
    const nameCard = evt.target
      .closest(".card")
      .querySelector(".card__imageName").innerText;
    const namePopup = document.querySelector(".popup__nameCard");
    popupImage.src = card.src;
    namePopup.textContent = nameCard;
    openPopup(".popup_zoom");
  });
});

//fechar imagem
const closeImage = document.querySelector(".popup__closeImage");
closeImage.addEventListener("click", () => {
  closePopup(".popup_zoom");
});
