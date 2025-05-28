const burgerButton = document.querySelector('.header__burger-button');
const menuDialog = document.querySelector('.mobile-overlay');
const closeButton = document.querySelector('.mobile-overlay__close-button');

// Открытие диалога
burgerButton.addEventListener('click', () => {
    menuDialog.showModal();
});
  
  // Закрытие диалога
closeButton.addEventListener('click', () => {
    menuDialog.close();
});
  
  // Закрытие при клике вне меню
menuDialog.addEventListener('click', (e) => {
    if (e.target === menuDialog) {
        menuDialog.close();
    }
});

// Слайдер

const slider = document.getElementById("slider");
const slides = document.querySelectorAll(".slider-image");
const paginationContainer = document.getElementById("paginationContainer");

let currentSlideIndex = 0;
const paginationCircles = [];
const sliderHeight = slider.clientHeight;

function createPaginationCircle() {
    const div = document.createElement("div");
    div.className = "pagination-circle";
    div.classList.add("pagination--non-active")
    paginationContainer.appendChild(div);
    paginationCircles.push(div);
}

function addPagination() {
    slides.forEach(createPaginationCircle);
    paginationCircles[0].classList.add("active");
    paginationCircles.forEach((circle, index) => {
        circle.addEventListener("click", () => changeSlide(index));
    });
}

function addActiveClass() {
    paginationCircles[currentSlideIndex].classList.add("active");
    paginationCircles[currentSlideIndex].classList.remove("pagination--non-active");
}

function removeActiveClass() {
    paginationCircles[currentSlideIndex].classList.remove("active");
    paginationCircles[currentSlideIndex].classList.add("pagination--non-active");
}

function showSlide() {
    slider.style.transform = `translateY(-${currentSlideIndex * sliderHeight}px)`;
}

function changeSlide(slideIndex) {
    removeActiveClass();
    currentSlideIndex = slideIndex;
    addActiveClass();
    showSlide();
}

function nextSlide() {
    let newSlideIndex = currentSlideIndex + 1;
    if(newSlideIndex > slides.length - 1) {
        newSlideIndex = 0;
    }
    changeSlide(newSlideIndex);
}

function previousSlide() {
    let newSlideIndex = currentSlideIndex - 1;
    if(newSlideIndex < 0) {
        newSlideIndex = slides.length - 1;
    }
    changeSlide(newSlideIndex);
}

// Отключение стандартного поведения с формы subscribe

const formElement = document.querySelector('#subscribeForm');

formElement.addEventListener('submit', (event) =>{
    event.preventDefault()
});

addPagination();