const createBanner = () =>{
    const mainBanner = document.createElement('div');
    mainBanner.id = 'banner';
    mainBanner.appendChild(createHeading());
    return mainBanner;
};

const createHeading = () =>{
    const heading = document.createElement('h1');
    heading.id = 'home-main-header';
    heading.textContent = 'Gourmet restaurant meals';
    return heading;
}

export {createBanner};