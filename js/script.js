/*
var linkEnter = document.querySelector(".enter-link");
var popupEnter = document.querySelector(".modal-login");

var linkSearch = document.querySelector(".search-link");
var popupSearch = document.querySelector(".modal-search");

var linkBasketFull = document.querySelector(".basket-link");
var popupBasket = document.querySelector(".modal-cart");
*/


var linkFeedback = document.querySelector(".feedback-button");
var popupFeedback = document.querySelector(".modal-feedback");
var closeFeedback = document.querySelector(".modal-close");

var modalOverlay = document.querySelector(".modal-overlay");

var form = popupFeedback.querySelector("form");
var userName = popupFeedback.querySelector("[name=name]");
var feedbackEmail = popupFeedback.querySelector("[name=feedback-email]");
var commentField = popupFeedback.querySelector("[name=comment]");

var isStorageSupport = true;
var storage = "";

linkEnter.addEventListener("mouseover", function (evt) {
    evt.preventDefault();
    popupEnter.classList.toggle("modal-show");
  }
);
/*
linkSearch.addEventListener("mouseover", function (evt) {
    evt.preventDefault();
    popupSearch.classList.toggle("modal-show");
  }
);

if (popupBasket) {
    linkBasketFull.addEventListener("mouseover", function (evt) {
      evt.preventDefault();
      popupBasket.classList.toggle("modal-show");
    }
  );
}
*/
try {
  storage = localStorage.getItem("userName");
} catch (err) {
  isStorageSupport = false;
}

if (popupFeedback) {
  linkFeedback.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupFeedback.classList.add("modal-show");
    modalOverlay.classList.add("modal-show");

    if (storage) {
      userName.value = storage;
      feedbackEmail.focus();
    } else {
      userName.focus();
    }
  }
);}

closeFeedback.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupFeedback.classList.remove("modal-show");
  modalOverlay.classList.remove("modal-show");
  popupFeedback.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!userName.value || !feedbackEmail.value) {
    evt.preventDefault();
    popupFeedback.classList.remove("modal-error");
    popupFeedback.offsetWidth = popupFeedback.offsetWidth;
    popupFeedback.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("userName", userName.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupFeedback.classList.contains("modal-show")) {
      popupFeedback.classList.remove("modal-show");
      modalOverlay.classList.remove("modal-show");
      popupFeedback.classList.remove("modal-error");
    }
  }
});
