document.getElementById("language-btn").addEventListener("click", function () {
  document.querySelector(".language-selector").classList.toggle("active");
});

document.querySelectorAll(".lang-option").forEach(function (item) {
  item.addEventListener("click", function (event) {
    const selectedLang = event.target.getAttribute("data-lang");
    const button = document.getElementById("language-btn");

    // Оновлюємо текст на кнопці на обрану мову
    if (selectedLang === "en") {
      button.textContent = "EN";
    } else if (selectedLang === "uk") {
      button.textContent = "UA";
    } else if (selectedLang === "ru") {
      button.textContent = "RU";
    }

    // Тут можна додати логику для зміни мови на сайті
    // Наприклад, перенаправлення на відповідну версію сторінки:
    // window.location.href = selectedLang + "-version.html";

    // Закриваємо випадаючий список
    document.querySelector(".language-selector").classList.remove("active");
  });
});

// Закриття списку при кліку поза межами
window.addEventListener("click", function (event) {
  if (!event.target.closest(".language-selector")) {
    document.querySelector(".language-selector").classList.remove("active");
  }
});
