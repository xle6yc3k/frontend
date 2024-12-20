// Button references
const mainHeading = document.getElementById('mainHeading');
const scrollToTopButton = document.getElementById('scrollToTop');

// Show the scroll-to-top button on scroll
window.addEventListener('scroll', () => {
    scrollToTopButton.style.display = 
        (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) 
        ? 'block' 
        : 'none';
});

// Smooth scroll to top
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// --- Modals ---
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

// Open and close modal functions
const openModal = (modal) => modal.style.display = "block";
const closeModal = (modal) => modal.style.display = "none";

// Attach event listeners for modals
Object.entries(buttons).forEach(([key, button], index) => {
    button.addEventListener("click", () => openModal(modals[`modal${index + 1}`]));
});

Object.entries(closeButtons).forEach(([key, closeButton], index) => {
    closeButton.addEventListener("click", () => closeModal(modals[`modal${index + 1}`]));
});

// Close modal when clicking outside of it
Object.values(modals).forEach(modal => {
    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            closeModal(modal);
        }
    });
});

// --- Notifications ---
const notificationContainer = document.createElement('div');
Object.assign(notificationContainer.style, {
    position: 'fixed',
    top: '10px',
    right: '10px',
    backgroundColor: '#28a745',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '5px',
    fontSize: '18px',
    zIndex: '1000',
    display: 'none'
});
document.body.appendChild(notificationContainer);

const showNotification = (message) => {
    notificationContainer.textContent = message;
    notificationContainer.style.display = 'block';
    setTimeout(() => {
        notificationContainer.style.display = 'none';
    }, 3000);
};

// --- Form handling ---
const forms = {
    form1: document.getElementById("contactForm1"),
    form2: document.getElementById("contactForm2"),
    form3: document.getElementById("contactForm3")
};

const handleFormSubmit = (form, formNumber, formName) => {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        console.log(`Form ${formNumber} submitted!`);
        form.reset();
        closeModal(modals[`modal${formNumber}`]);
        showNotification(`Форма \"${formName}\" успешно отправлена!`);
    });
};

Object.entries(forms).forEach(([key, form], index) => {
    handleFormSubmit(form, index + 1, form.dataset.formName || `Form ${index + 1}`);
});

// --- Heading event handlers ---
const headingEventHandlers = {
    click: () => alert('Вы кликнули на заголовок!'),
    dblclick: () => alert('Вы дважды кликнули на заголовок!'),
    mouseover: () => mainHeading.style.color = 'blue',
    mouseout: () => mainHeading.style.color = 'black'
};

Object.entries(headingEventHandlers).forEach(([event, handler]) => {
    mainHeading.addEventListener(event, handler);
});

// --- Second semester practices ---
const practicesTable = document.querySelector('#practices table tbody');
const secondSemesterButton = document.createElement('button');
secondSemesterButton.textContent = 'Посмотреть практики второго семестра';
secondSemesterButton.classList.add('btn', 'btn-secondary', 'mt-3');
document.querySelector('#practices').appendChild(secondSemesterButton);

const secondSemesterPractices = [
    'Базовое бэкенд-приложение',
    'HTTP-запросы',
    'JSON и работа с ним',
    'HTTP-ответы',
    'Проектирование API',
    'Роутинг и его настройка',
    'NoSQL базы данных',
    'Обеспечение авторизации и доступа пользователей',
    'Работа сторонних сервисов уведомления и авторизации',
    'Основы ReactJS',
    'Работа с компонентами динамической DOM',
    'Использование хуков в React',
    'Основы микросервисной архитектуры',
    'Разработка классических модулей веб-приложений'
];

secondSemesterButton.addEventListener('click', () => {
    practicesTable.innerHTML = secondSemesterPractices.map((practice, index) => `
        <tr>
            <td>${index + 1}</td>
            <td>${practice}</td>
            <td><input type='checkbox'></td>
            <td><input type='checkbox'></td>
        </tr>
    `).join('');
});

// --- Student photo handlers ---
const studentPhoto = document.querySelector('.img-fluid');

const photoEventHandlers = {
    mouseover: () => {
        studentPhoto.style.transform = 'scale(1.1)';
        studentPhoto.style.transition = 'transform 0.3s ease';
    },
    mouseout: () => {
        studentPhoto.style.transform = 'scale(1)';
    },
    click: () => {
        studentPhoto.src = 'prepod.jpg'; // Replace with the favorite teacher's URL
    },
    dblclick: () => {
        alert('Не налегай, у меня не так много любимых преподавателей');
    }
};

Object.entries(photoEventHandlers).forEach(([event, handler]) => {
    studentPhoto.addEventListener(event, handler);
});
