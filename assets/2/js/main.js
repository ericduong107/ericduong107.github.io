// import { getData } from "./data/get_data";

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
