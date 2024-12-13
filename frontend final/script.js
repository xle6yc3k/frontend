// Получаем кнопку
const scrollToTopButton = document.getElementById('scrollToTop');

// Показываем кнопку при прокрутке вниз
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
};

// Прокручиваем страницу вверх при клике на кнопку
scrollToTopButton.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Плавная прокрутка
    });
};

// --- Модальные окна ---
const modals = {
    modal1: document.getElementById("modal1"),
    modal2: document.getElementById("modal2"),
    modal3: document.getElementById("modal3")
};

const buttons = {
    btn1: document.getElementById("openModal1"),
    btn2: document.getElementById("openModal2"),
    btn3: document.getElementById("openModal3")
};

const closeButtons = {
    close1: modals.modal1.querySelector(".close"),
    close2: modals.modal2.querySelector(".close"),
    close3: modals.modal3.querySelector(".close")
};

// Открытие и закрытие модальных окон
function openModal(modal) {
    modal.style.display = "block";
}

function closeModal(modal) {
    modal.style.display = "none";
}

// События для открытия модальных окон
buttons.btn1.addEventListener("click", () => openModal(modals.modal1));
buttons.btn2.addEventListener("click", () => openModal(modals.modal2));
buttons.btn3.addEventListener("click", () => openModal(modals.modal3));

// События для закрытия модальных окон
closeButtons.close1.addEventListener("click", () => closeModal(modals.modal1));
closeButtons.close2.addEventListener("click", () => closeModal(modals.modal2));
closeButtons.close3.addEventListener("click", () => closeModal(modals.modal3));

// Закрытие модального окна при клике вне него
Object.values(modals).forEach(modal => {
    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            closeModal(modal);
        }
    });
});

// --- Уведомления ---
const notificationContainer = document.createElement('div');
notificationContainer.style.position = 'fixed';
notificationContainer.style.top = '10px';
notificationContainer.style.right = '10px';
notificationContainer.style.backgroundColor = '#28a745';
notificationContainer.style.color = 'white';
notificationContainer.style.padding = '10px 20px';
notificationContainer.style.borderRadius = '5px';
notificationContainer.style.fontSize = '18px';
notificationContainer.style.zIndex = '1000';
notificationContainer.style.display = 'none';
document.body.appendChild(notificationContainer);

function showNotification(message) {
    notificationContainer.textContent = message;
    notificationContainer.style.display = 'block';
    setTimeout(() => {
        notificationContainer.style.display = 'none';
    }, 3000); 
}

// --- Обработка форм ---
const forms = {
    form1: document.getElementById("contactForm1"),
    form2: document.getElementById("contactForm2"),
    form3: document.getElementById("contactForm3")
};

function handleFormSubmit(form, formNumber, formName) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        console.log(`Form ${formNumber} submitted!`);
        form.reset();
        closeModal(modals[`modal${formNumber}`]);
        showNotification(`Форма "${formName}" успешно отправлена!`);
    });
}

handleFormSubmit(forms.form1, 1, "Сайт-визитка");
handleFormSubmit(forms.form2, 2, "Корпоративный сайт");
handleFormSubmit(forms.form3, 3, "Интернет-магазин");