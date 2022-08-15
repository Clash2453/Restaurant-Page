import { content } from "./main";
const createAboutPage = () => {
    const aboutHeader = document.createElement('h1');
    const aboutContainer = document.createElement('div');
    const card = document.createElement('div');
    card.classList.add('card');
    aboutHeader.textContent = 'About us';
    aboutContainer.appendChild(aboutHeader);
    aboutContainer.id = 'about-container';
    content.appendChild(aboutContainer);
}

export default createAboutPage;