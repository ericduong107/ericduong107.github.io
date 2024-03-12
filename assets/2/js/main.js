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

// ---------------------------------
/*
// Đường dẫn đến API bạn muốn lấy dữ liệu
const apiUrl = "https://ericduong107.github.io/api/home/projects.json";

function getData() {
  // Sử dụng fetch để gửi yêu cầu GET đến API
  fetch(apiUrl)
    .then((response) => {
      // Kiểm tra xem có lỗi không
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      // Nếu không có lỗi, giải mã dữ liệu JSON
      return response.json();
    })
    .then((data) => {
      // Xử lý dữ liệu ở đây, ví dụ: log ra console
      console.log(data);
      return data;
    })
    .catch((error) => {
      // Xử lý các lỗi xảy ra trong quá trình lấy dữ liệu
      console.error("There was a problem with the fetch operation:", error);
    });
}

var data = getData();

var isCheck = alert(data.toString());
*/
