import { content } from "./main";
const createAboutPage = () => {
    const aboutHeader = document.createElement('h1');
    aboutHeader.id = 'about-header'
    const aboutContainer = document.createElement('div');
    const card = document.createElement('div');
    const email = document.createElement('h1');
    const phoneNumber = document.createElement('h1');
    email.classList.add('info');
    phoneNumber.classList.add('info')
    email.textContent = 'Email: johnDoe@example.com';
    phoneNumber.textContent = 'Telephone for contacts: 0123456789';
    card.classList.add('card');
    card.appendChild(email);
    card.appendChild(phoneNumber)
    aboutHeader.textContent = 'About us';
    aboutContainer.appendChild(aboutHeader);
    aboutContainer.id = 'about-container';
    aboutContainer.appendChild(card);
    content.appendChild(aboutContainer);
}

export default createAboutPage;