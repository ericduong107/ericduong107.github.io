// === Header menu mobile ===
const header = document.getElementById("header");
const mobileMenu = document.getElementById("mobile-menu");
const headerHeight = header.clientHeight;

// Show/Hide mobile menu
mobileMenu.onclick = function (event) {
  var isClosed = header.clientHeight === headerHeight;
  if (isClosed) {
    header.style.height = "auto";
  } else {
    header.style.height = null;
  }
};

// === Auto hide when click menu ===
const menuItems = document.querySelectorAll("#nav li a[href*='#']");
// for (var i = 0 ; i<menuItems.length; i++) {
//   var menuItem = menuItems[i];
// }
for (var menuItem of menuItems) {
  menuItem.addEventListener("click", function (event) {
    // nextElementSibling là anh chị em tiếp theo liền kề
    var isParentMenu =
      this.nextElementSibling &&
      this.nextElementSibling.classList.contains("subnav");

    if (isParentMenu) {
      event.preventDefault();
    } else {
      header.style.height = null;
    }
  });
}

// === Modal ===
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

// Open Modal
// C1:
// buyBtns.forEach((btnItem) => {
//   btnItem.onclick = showBuyTickets;
// });

// C2:
for (const buyBtn of buyBtns) {
  buyBtn.addEventListener("click", showBuyTickets);
}
// End Open Modal

// C1
// modalCloseBtn.onclick = hideBuyTickets;

// C2
modalCloseBtn.addEventListener("click", hideBuyTickets);

modal.addEventListener("click", hideBuyTickets);

/**
 * README: Đây là phương thức khi click vào khoảng mờ sẽ ẩn modal,
 * còn khi ấn vào form mua vé thì sẽ không bị ẩn
 * */
modalContainer.addEventListener("click", function (event) {
  event.stopPropagation(); // Ngừng nổ bọt
});
