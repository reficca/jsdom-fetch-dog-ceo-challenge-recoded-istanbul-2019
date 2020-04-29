console.log('%c HI', 'color: firebrick');

window.addEventListener("DOMContentLoaded", (event) => {
    fetchImages();
    fetchBreeds();
});

function fetchImages() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    fetch(imgUrl)
        .then(res => res.json())
        .then(resJson => resJson["message"])
        .then(imgArr => {
            let dogImgContainer = document.getElementById("dog-image-container");
            imgArr.forEach(element => {
                let imgEl = document.createElement("img");
                imgEl.setAttribute("src", element);
                imgEl.style.width = "25%";
                dogImgContainer.appendChild(imgEl);
            });
        });
};

function fetchBreeds() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all';
    fetch(breedUrl)
        .then(res => res.json())
        .then(resJson => resJson["message"])
        .then(breeds => {
            let breedList = document.getElementById("dog-breeds");
            Object.keys(breeds).forEach(element => {
                let breedLi = document.createElement("li");
                breedLi.innerText = element;
                breedList.appendChild(breedLi);
            });
            changeColor();
            filterBreeds();
        });

};

function changeColor() {
    let liElements = document.querySelectorAll("#dog-breeds li");
    liElements.forEach(element => {
        element.addEventListener("click", (event) => {
            element.style.color = "orange";
        });
    });
};

function filterBreeds() {
    let dropDown = document.getElementById("breed-dropdown");
    let liElements = document.querySelectorAll("#dog-breeds li");
    dropDown.addEventListener("change", (event) => {
        liElements.forEach(element => {
            if (element.innerText.charAt(0) === dropDown.value) {
                element.style.display = "block";
            } else {
                element.style.display = "none";
            }
        });
    });
}