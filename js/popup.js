var link = document.querySelector(".feedback-link");
var footerLink = document.querySelector(".feedback-footer-link");
var popup = document.querySelector(".modal-feedback");
var close = document.querySelector(".modal-close");
var overlay = document.querySelector(".modal-overlay");
var form = popup.querySelector("form");
var name = popup.querySelector("[name=name]");
var phone = popup.querySelector("[name=phone]");
var storage = "";
var isStorageSupport = true;

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  popup.classList.add("modal-animation-show");
  overlay.classList.add("modal-show");
  if (storage) {
    name.value = storage;
    phone.focus();
  } else {
    name.focus();
  }
});

footerLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  popup.classList.add("modal-animation-show");
  overlay.classList.add("modal-show");
  if (storage) {
    name.value = storage;
    phone.focus();
  } else {
    name.focus();
  }
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-animation-show");
  overlay.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

overlay.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-animation-show");
  overlay.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(evt) {
  if (!name.value || !phone.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", name.value);
    }
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      evt.preventDefault();
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-animation-show");
      overlay.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});