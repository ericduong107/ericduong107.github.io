import { fullApi } from "../utils/constant";

const apiUrl = fullApi;

function getPortfolioDataApi() {
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
      alert(data);
      // Xử lý dữ liệu ở đây, ví dụ: log ra console
      console.log(data);
    })
    .catch((error) => {
      // Xử lý các lỗi xảy ra trong quá trình lấy dữ liệu
      console.error("There was a problem with the fetch operation:", error);
    });
}

export default getPortfolioDataApi;
