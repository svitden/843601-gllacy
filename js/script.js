var linkEnter = document.querySelector(".enter-link");
var popupEnter = document.querySelector(".modal-login");

var linkSearch = document.querySelector(".search-link");
var popupSearch = document.querySelector(".modal-search");

var linkBasketFull = document.querySelector(".basket-full");
var popupBasket = document.querySelector(".modal-cart");

var linkFeedback = document.querySelector(".feedback-button");
var popupFeedback = document.querySelector(".modal-feedback");
var closeFeedback = document.querySelector(".modal-close");


linkEnter.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupEnter.classList.toggle("modal-show");
    email.focus();
  }
);

linkSearch.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupSearch.classList.toggle("modal-show");
  }
);

linkBasketFull.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupBasket.classList.toggle("modal-show");
  }
);

linkFeedback.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupFeedback.classList.add("modal-show");
  }
);

closeFeedback.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupFeedback.classList.remove("modal-show");
  }
);
