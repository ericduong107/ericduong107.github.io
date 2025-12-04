// Hàm này sẽ dùng thư viện (đã load qua HTML) để tìm ngày Mùng 1 Tết Âm lịch
// của năm tới (năm hiện tại + 1), vì code countdown thường đếm ngược đến Tết tiếp theo.
function getNextLunarNewYearTimestamp() {
    const today = new Date();
    let targetYear = today.getFullYear();
    
    // Giả sử: Lịch Âm Tết năm nay đã qua, thì đếm ngược đến Tết năm sau
    // (Đây là logic cần thiết, giả định thư viện trả về đối tượng Date)
    let lunarNewYearDate = LunarCalendar.getLunarNewYearDate(targetYear);

    // Nếu ngày Tết Âm lịch năm nay đã qua, ta chuyển sang tính Tết của năm sau
    if (today.getTime() > lunarNewYearDate.getTime()) {
        targetYear++;
        lunarNewYearDate = LunarCalendar.getLunarNewYearDate(targetYear);
    }

    // Đảm bảo thời gian bắt đầu là 00:00:00 của ngày đó
    lunarNewYearDate.setHours(0, 0, 0, 0); 
    
    return lunarNewYearDate.getTime();
}

// const endDate = new Date("Jan 29, 2025 00:00:00").getTime();
const endDate = getNextLunarNewYearTimestamp();

const dayEl = document.getElementById("days");
const hourEl = document.getElementById("hours");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");

const countDown = setInterval(function() {
    let now = new Date().getTime();
    let distance = endDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let minutes = Math.floor(distance % (1000 * 60 * 60)/(1000 * 60));
    let seconds = Math.floor(distance % (1000 * 60) / 1000);

    dayEl.innerHTML = days;
    hourEl.innerHTML = hours;
    minuteEl.innerHTML = minutes;
    secondEl.innerHTML = seconds;
}, 1000);
