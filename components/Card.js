export default class Card {
  constructor({ name, link }, cardSelector) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
    this._element = this._getElement;
  }

  _setEventListeners() {
    //"#heart-image"
    const likeButton = this._cardElement
      .querySelector("#heart-image")
      .addEventListener("click", () => {
        this._handleLikeIcon();
      });
    //"#trash-image"
    const deleteButton = this._cardElement
      .querySelector("#trash-image")
      .addEventListener("click", () => {
        this._handleDeleteCard();
      });
    const handlePreviewImage = this._cardElement
      .querySelector("#cardPreviewModal")
      .addEventListener("click", () => open(cardPreviewModal));
  }

  _handleDeleteCard() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  _handleLikeIcon = () => {
    this._cardElement
      .querySelector("#heart-image")
      .classList.toggle("heart_active");
  };

  _getElement() {
    return document
      .querySelector(this._cardSelector)

      .content.querySelector(".cards__card")

      .cloneNode(true);

    const template = document.querySelector("#card-template");
    const element = template.content.cloneNode(true);

    return element;
  }

  updateContents(data) {
    const cardTitle = this._cardElement.querySelector(".card__title");
    const cardDescription =
      this._cardElement.querySelector(".card__description");

    cardTitle.textContent = data.title;
    cardDescription.textContent = data.description;
  }

  getView() {
    this._cardElement = this._getElement()
      .querySelector(this._cardSelector)
      .content.querySelector(".cards__card")
      .cloneNode(true);
    cardPreviewImage.src = cardData.link;
    cardPreviewImage.alt = cardData.name;
    cardCaption.textContent = cardData.name;

    this._setEventListeners();
    return this._cardElement;
  }
}
