import './style.css';
const navigation = () =>{
    const navigation = document.createElement('nav');
    navigation.id = 'navigation';
    const ul = document.createElement('ul');
    navigation.appendChild(ul);
    ul.appendChild(generateLink('Home'));
    ul.appendChild(generateLink('About us'));
    ul.appendChild(generateLink('Contacts'));
    return navigation
};

const generateLink = (textContent) => {
    const home = document.createElement('li');
    const homeLink = document.createElement('a');
    homeLink.textContent = textContent;
    home.appendChild(homeLink);
    return home
};
export {navigation};