document.addEventListener("DOMContentLoaded", function () {
    const carouselInner = document.getElementById("carousel-inner");
    const prevButton = document.getElementById("prev-button");
    const nextButton = document.getElementById("next-button");

    const games = [
        {
            id: 1,
            title: "The Witcher 3: Wild Hunt",
            platform: "PlayStation 4",
            image: "images/game1.jpg",
        },
        {
            id: 2,
            title: "Red Dead Redemption 2",
            platform: "Xbox One",
            image: "images/game2.jpg",
        },
        {
            id: 3,
            title: "Super Mario Odyssey",
            platform: "Nintendo Switch",
            image: "images/game3.jpg",
        },
        {
            id: 4,
            title: "Assassin's Creed Valhalla",
            platform: "PC",
            image: "images/game4.jpg",
        },
        {
            id: 5,
            title: "FIFA 21",
            platform: "PlayStation 5",
            image: "images/game5.jpg",
        },
    ];

    let currentSlide = 0;
    const totalSlides = games.length;

    carouselInner.style.setProperty("--total-slides", totalSlides);

    function renderGameCarousel() {
        games.forEach(function (game, index) {
            const carouselItem = document.createElement("div");
            carouselItem.classList.add("carousel-item");

            const img = document.createElement("img");
            img.src = game.image;
            img.alt = game.title;
            carouselItem.appendChild(img);

            carouselInner.appendChild(carouselItem);
        });

        updateCarousel();
        setInterval(nextSlide, 3000); // Troca de slide a cada 3 segundos
    }

    function nextSlide() {
        currentSlide++;
        if (currentSlide >= totalSlides) {
            currentSlide = 0;
        }
        updateCarousel();
    }

    function prevSlide() {
        currentSlide--;
        if (currentSlide < 0) {
            currentSlide = totalSlides - 1;
        }
        updateCarousel();
    }

    function updateCarousel() {
        const carouselItems = document.querySelectorAll(".carousel-item");

        carouselItems.forEach(function (item, index) {
            if (index === currentSlide) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    }

    prevButton.addEventListener("click", prevSlide);
    nextButton.addEventListener("click", nextSlide);

    renderGameCarousel();
});

const loginLink = document.querySelector('.login a');

loginLink.addEventListener('click', () => {
    window.location.href = 'login.html';
});