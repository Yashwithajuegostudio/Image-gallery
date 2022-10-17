const images = document.querySelectorAll(".image-row img");

const mainImage = document.getElementById('mainimg');



for (items of images) {
    items.addEventListener('click', (e) => {
        images.forEach(element => {
            element.classList.remove("active");

        });
        mainImage.src = e.target.src;
        e.target.classList.add("active");

    });
}

