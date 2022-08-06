import './style.css';
const navigation = () =>{
    const navigation = document.createElement('nav');
    navigation.id = 'navigation';
    const ul = document.createElement('ul');
    navigation.appendChild(ul);
    const home = document.createElement('li');
    const homeLink = document.createElement('a');
    homeLink.textContent = 'Restaurant Page';
    home.appendChild(homeLink);
    return navigation
}
export {navigation};