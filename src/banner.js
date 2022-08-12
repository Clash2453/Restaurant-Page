const createBanner = () =>{
    const mainBanner = document.createElement('div');
    mainBanner.id = 'banner';
    mainBanner.appendChild(createHeading());
    return mainBanner;
};

const createHeading = () =>{
    const heading = document.createElement('h1');
    heading.id = 'main-header';
    heading.textContent = 'Gourmet restaurant meals';
    return heading;
}

export {createBanner};