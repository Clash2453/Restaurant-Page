import {navigation} from './navigationBar';

const content = document.createElement('div');
content.id = 'content';
const nav = navigation();
content.appendChild(nav);

document.body.appendChild(content)