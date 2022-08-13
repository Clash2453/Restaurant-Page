const createSection = (imagePath, background, text) => {
    const section = document.createElement('div');
    const picture = document.createElement('img');
    const promoText = document.createElement('p');

    section.classList.add('promo-section');
    section.style.backgroundColor = background;
    picture.classList.add('promo-img');
    promoText.classList.add('promo-text');
    picture.src = imagePath;
    promoText.textContent = text;

    section.appendChild(picture);
    section.appendChild(promoText);

    return section;
}

const createReverseSection = (imagePath, background, text) => {
    const section = document.createElement('div');
    const picture = document.createElement('img');
    const promoText = document.createElement('p');

    section.classList.add('promo-section');
    section.style.backgroundColor = background;
    picture.classList.add('promo-img');
    promoText.classList.add('promo-text');
    picture.src = imagePath;
    promoText.textContent = text;

    section.appendChild(promoText);
    section.appendChild(picture);

    return section;
}

export {createSection, createReverseSection};
