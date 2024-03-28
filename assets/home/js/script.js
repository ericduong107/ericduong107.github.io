// ===toggle icon navbar===
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// ===scroll sections avtive link===
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  // ===scroll sections avtive link===
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  // ===remove toggle icon and navbar when click navbar link (scroll)===
  // menuIcon.classList.toggle("bx-x");
  // navbar.classList.toggle("active");
};

// ===scroll reveal===
ScrollReveal({
  // reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .portfolio-box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

// ===toggle theme===
const toggleThemeBtn = document.querySelector("#toggle-theme");
const darkClass = "dark-theme";
const bodyTag = document.querySelector("body");
const iconDarkTheme = "bxs-sun";
const iconLightTheme = "bxs-moon";

if (
  "true" === localStorage.isDark ||
  (undefined === localStorage.isDark &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  bodyTag.classList.add(darkClass);
  // document.documentElement.classList.add(darkClass);
  localStorage.isDark = true;
}

function toggleTheme() {
  bodyTag.classList.toggle(darkClass);
  // document.documentElement.classList.toggle(darkClass);
  localStorage.isDark = "true" !== localStorage.isDark;
}

function changeIconTheme() {
  if (
    "true" === localStorage.isDark ||
    (undefined === localStorage.isDark &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    toggleThemeBtn.classList.toggle(iconDarkTheme);
    toggleThemeBtn.classList.add(iconLightTheme);
  } else {
    toggleThemeBtn.classList.toggle(iconLightTheme);
    toggleThemeBtn.classList.add(iconDarkTheme);
  }
}

toggleThemeBtn.addEventListener("click", function () {
  toggleTheme();
  changeIconTheme();
});

// ===typed js===
const typed = new Typed(".multiple-text", {
  strings: [
    "Frontend Developer",
    "Flutter Developer",
    // "Graphic Designer",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

// ===home and about avatar===
const homeAbout = document.getElementById("avatar-home");
const aboutAvatar = document.getElementById("avatar-about");

if (window.screen.width > 768) {
  homeAbout.style.clipPath =
    "polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%) !important";
  aboutAvatar.src =
    "/assets/common/imgs/avatars/personal/about_section/img-1_1-transparent.png";
} else {
  homeAbout.style.clipPath = none;
  aboutAvatar.src =
    "/assets/common/imgs/avatars/personal/about_section/img-1_1.png";
}

// ----Send Form Mail----
function submitForm() {
  // Lấy giá trị từ các trường nhập liệu
  var name = document.getElementById("fullName").value;
  var email = document.getElementById("email").value;
  var mobileNumber = document.getElementById("mobileNumber").value;
  var emailSubject = document.getElementById("emailSubject").value;
  var yourMessage = document.getElementById("yourMessage").value;

  // Tạo một đối tượng XMLHttpRequest để gửi dữ liệu đến máy chủ
  var xhr = new XMLHttpRequest();
  var url = "http://localhost/ericduong107_github/first.php"; // Đặt đường dẫn tới script xử lý email ở đây
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  // Xử lý sự kiện khi truy vấn hoàn tất
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // Xử lý phản hồi từ máy chủ (nếu cần)
      console.log(xhr.responseText);
    }
  };

  // Chuẩn bị dữ liệu để gửi lên máy chủ
  var data =
    "name=" +
    name +
    "&email=" +
    email +
    "&mobileNumber=" +
    mobileNumber +
    "&emailSubject=" +
    emailSubject +
    "&yourMessage=" +
    yourMessage;

  // Gửi truy vấn đến máy chủ
  xhr.send(data);
}

function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) {
            elmnt.innerHTML = this.responseText;
          }
          if (this.status == 404) {
            elmnt.innerHTML = "Page not found.";
          }
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      };
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}
