import {navigation} from './navigationBar';
import { createBanner } from './banner';

const content = document.createElement('div');
content.id = 'content';
const nav = navigation();
content.appendChild(nav);
content.appendChild(createBanner());

document.body.appendChild(content);
