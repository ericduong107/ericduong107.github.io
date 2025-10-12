const modal = document.querySelector(".js-modal");
const modalContainer = document.querySelector(".js-modal-container");
const buyBtns = document.querySelectorAll(".js-buy-tickets");
const modalCloseBtn = document.querySelector(".js-modal-close");

function showBuyTickets() {
  modal.classList.add("open");
}

function hideBuyTickets() {
  modal.classList.remove("open");
}

for (const buyBtn of buyBtns) {
  buyBtn.addEventListener("click", showBuyTickets);
}

modalCloseBtn.addEventListener("click", hideBuyTickets);

modal.addEventListener("click", hideBuyTickets);

/**
 * README: Đây là phương thức khi click vào khoảng mờ sẽ ẩn modal,
 * còn khi ấn vào form mua vé thì sẽ không bị ẩn
 * */
modalContainer.addEventListener("click", function (event) {
  event.stopPropagation(); // Ngừng nổ bọt
});
