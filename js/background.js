const images = [
    "pexels-benhur-emmanuel-11539114.jpg",
    "pexels-micaela-alejandro-10757870.jpg",
    "pexels-phil-desforges-12576276.jpg",
];

const chosenImage = images[Math.floor(Math.random()* images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);