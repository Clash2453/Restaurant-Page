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

function emptyContent() {
    while(content.firstChild){
        content.removeChild(content.childNodes[0])
    }
}

const home = () =>{
    
    content.appendChild(createBanner());

content.appendChild(createSection(meat,'#596F89', "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."));

content.appendChild(createReverseSection(delivery, '#6D8C9F',"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."));

content.appendChild(createSection(dessert, '#596F89',"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."));    
}
home();