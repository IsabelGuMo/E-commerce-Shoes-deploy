 const carouselContainer = document.querySelector("#carouselContainer");

products.forEach((product) => {
    const {image, name, description} = product;
    
    carouselContainer.innerHTML += `
    <div class="carousel-item">
    <img class="image card-img frame" src="./assets/imagenes/photo-frame/frame-skull.png" alt="frame">
        <img src="${image}" class="d-block w-100" alt="${name}">
        <div class="carousel-caption d-none d-md-block">
            <h5 class="font-gothic bg-secondary bg-opacity-25 rounded">${name}</h5>
            <p class="bg-secondary bg-opacity-25 rounded">${description}</p>
        </div>
    </div>
    `; 
});
 


