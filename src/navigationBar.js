import './style.css';
import { home, clearContent} from "./main.js";
import createAboutPage from './aboutUs';
import createContactsPage from './contacts';
const navigation = () =>{
    const navigation = document.createElement('nav');
    navigation.id = 'navigation';
    const ul = document.createElement('ul');
    navigation.appendChild(ul);
    const homeLink = generateLink('Home');
    const aboutLink = generateLink('About us'); 
    const contactsLink = generateLink('Contacts');
    homeLink.addEventListener('click', () => {
        home();
    });
    aboutLink.addEventListener('click', () => {
        clearContent();
        createAboutPage();
    });
    contactsLink.addEventListener('click', () => {
        clearContent();
        createContactsPage();
    })
    ul.appendChild(homeLink);
    ul.appendChild(aboutLink);
    ul.appendChild(contactsLink);
    return navigation;
};

const generateLink = (textContent) => {
    const home = document.createElement('li');
    const homeLink = document.createElement('a');
    homeLink.textContent = textContent;
    home.appendChild(homeLink);
    return home
};
export {navigation};