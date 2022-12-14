import {navigation} from './navigationBar';
import { createBanner } from './banner';
import { createSection, createReverseSection } from './promoSection';
import dessert from './resources/dessert.jpg';
import delivery from './resources/delivery.jpg';
import meat from './resources/steaks.jpg';

const content = document.createElement('div');
content.id = 'content';
const nav = navigation();
document.body.appendChild(nav);

document.body.appendChild(content);

const clearContent = () => {
    while(content.firstChild){
        content.removeChild(content.childNodes[0]);
    }
}

const home = () =>{
    clearContent();
    content.appendChild(createBanner());

content.appendChild(createSection(meat,'#131315', "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."));

content.appendChild(createReverseSection(delivery, '#4d5e74',"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."));

content.appendChild(createSection(dessert, '#131315',"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."));    
}

home();

export {home, clearContent, content};