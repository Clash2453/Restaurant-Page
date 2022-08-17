import { content } from "./main";

const createContactsPage = () => {
    const contactsContainer = document.createElement('div');
    const card = document.createElement('div');
    const contactsHeader = document.createElement('h1')
    contactsHeader.id = 'main-header';
    contactsHeader.textContent = 'Contacts'
    contactsContainer.appendChild(contactsHeader);
    card.classList.add('contacts-card');
    contactsContainer.id = 'contacts-container';
    contactsContainer.appendChild(card);
    const email = document.createElement('h1');
    const phoneNumber = document.createElement('h1');
    email.classList.add('contacts-info');
    phoneNumber.classList.add('contacts-info')
    email.textContent = 'Email: johnDoe@example.com';
    phoneNumber.textContent = 'Telephone for contacts: 0123456789';
    card.appendChild(email);
    card.appendChild(phoneNumber);

    content.appendChild(contactsContainer);
}

export default createContactsPage