const temp = {
  success: {
    title: "Success",
    message: "Your changes are saved successfully",
    type: "success",
    duration: 5000,
    animationDuration: 1000,
  },
  info: {
    title: "Info",
    message: "New settings available on your account.",
    type: "info",
    duration: 1000,
    animationDuration: 1000,
  },
  error: {
    title: "Error",
    message: "Error has occured while saving changes.",
    type: "error",
    duration: 4000,
    animationDuration: 1000,
  },
  warning: {
    title: "Warning",
    message: "Username you have entered is invalid.",
    type: "warning",
    duration: 3000,
    animationDuration: 1000,
  },
};

function toast({
  title = "",
  message = "",
  type = "info",
  duration = 3000,
  animationDuration = 1000,
}) {
  const toastId = document.getElementById("toast");
  if (toastId) {
    const toastItem = document.createElement("div");

    // Auto remove toast
    const autoRemoveId = setTimeout(function () {
      toastId.removeChild(toastItem);
    }, duration + animationDuration);

    // Remove toast when clicked
    toastItem.onclick = (e) => {
      if (e.target.closest(".toast__close")) {
        toastId.removeChild(toastItem);
        clearTimeout(autoRemoveId);
      }
    };

    var icons = {
      success: "fas fa-check-circle",
      info: "fa-solid fa-circle-info",
      error: "fa-solid fa-circle-xmark",
      warning: "fa-solid fa-circle-exclamation",
    };

    var delay = (duration / 1000).toFixed(2);
    var animationDelay = (animationDuration / 1000).toFixed(2);
    toastItem.style.animation = `slideInLeft ease-in-out 0.4s, fadeOut linear ${animationDelay}s ${delay}s forwards`;

    toastItem.classList.add("toast", `toast--${type}`);
    toastItem.innerHTML = `
        <div class="toast__icon">
            <i class="${icons[type]}"></i>
        </div>
        <div class="toast__body">
            <h3 class="toast__title">${title}</h3>
            <p class="toast__msg">${message}</p>
        </div>
        <div class="toast__close">
            <i class="fas fa-times"></i>
        </div>
    `;
    toastId.appendChild(toastItem);
  }
}

const successBtn = document.querySelector(".btn--success");
successBtn.addEventListener("click", () => {
  toast(temp.success);
});

const infoBtn = document.querySelector(".btn--info");
infoBtn.addEventListener("click", () => {
  toast(temp.info);
});

const errorBtn = document.querySelector(".btn--error");
errorBtn.addEventListener("click", () => {
  toast(temp.error);
});

const warningBtn = document.querySelector(".btn--warn");
warningBtn.addEventListener("click", () => {
  toast(temp.warning);
});

// toast(temp.success);
