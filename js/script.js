//toggle
const navbarNav = document.querySelector(".navbar-nav");

//

document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//jika di klik di luar sidebar

const hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

//form

let usernameInput = document.getElementById("usernameInput");
let emailInput = document.getElementById("emailInput");
let handphoneInput = document.getElementById("handphoneInput");
let subjectInput = document.getElementById("subjectInput");

function onLogin() {
  console.log(usernameInput.value);
  console.log(emailInput.value);
  console.log(handphoneInput.value);
  console.log(subjectInput.value);

  if (
    usernameInput.value == "" &&
    emailInput.value == "" &&
    handphoneInput.value == "" &&
    subjectInput.value == ""
  ) {
    alert("Tidak Boleh Kosong");
  } else {
    alert("Terima Kasih Pesan Anda Sedang Di Kirim ke Admin");
  }
}

let pesanButton = document.getElementById("pesanButton");

function Pesan() {
  console.log(pesanButton.value);
  if (pesanButton.value == "") {
    alert("Terima Kasih Telah Belanja di Tempat kami");
  }
}

// carousell
window.onload = function () {
  var slider1 = new Slider({
    images: ".slider-1 img",
    btnPrev: ".slider-1 .buttons .prev",
    btnNext: ".slider-1 .buttons .next",
    auto: true,
  });

  var slider2 = new Slider({
    images: ".slider-2 img",
    btnPrev: ".slider-2 .buttons .prev",
    btnNext: ".slider-2 .buttons .next",
    auto: false,
    rate: 2500,
  });
};

function Slider(obj) {
  this.images = document.querySelectorAll(obj.images);
  this.auto = obj.auto;
  this.btnPrev = obj.btnPrev;
  this.btnNext = obj.btnNext;
  this.rate = obj.rate || 2500;

  var i = 0;
  var slider = this;

  this.prev = function () {
    slider.images[i].classList.remove("shown");
    i--;

    if (i < 0) {
      i = slider.images.length - 1;
    }

    slider.images[i].classList.add("shown");
  };

  this.next = function () {
    slider.images[i].classList.remove("shown");
    i++;

    if (i >= slider.images.length) {
      i = 0;
    }

    slider.images[i].classList.add("shown");
  };

  document.querySelector(slider.btnPrev).onclick = slider.prev;
  document.querySelector(slider.btnNext).onclick = slider.next;

  if (slider.auto) {
    setInterval(slider.next, slider.rate);
  }
}
