import { content } from "./main";
const createAboutPage = () => {
    const aboutHeader = document.createElement('h1');
    aboutHeader.id = 'about-header'
    const aboutContainer = document.createElement('div');
    const card = document.createElement('div');
    const aboutUsText = document.createElement('p');
    aboutUsText.classList.add('info');
    aboutUsText.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In pellentesque massa placerat duis ultricies lacus sed turpis. Metus vulputate eu scelerisque felis imperdiet proin. Eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Vitae sapien pellentesque habitant morbi tristique senectus et. Sed nisi lacus sed viverra tellus in hac habitasse platea. Aliquet lectus proin nibh nisl. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Magnis dis parturient montes nascetur ridiculus. Varius sit amet mattis vulputate. Vehicula ipsum a arcu cursus. Vitae elementum curabitur vitae nunc sed. Mollis nunc sed id semper risus in. Mattis molestie a iaculis at erat pellentesque adipiscing commodo elit. Cursus turpis massa tincidunt dui ut ornare lectus sit. Nibh praesent tristique magna sit amet purus. Purus gravida quis blandit turpis cursus. Nisl tincidunt eget nullam non nisi est sit amet facilisis. Eu non diam phasellus vestibulum lorem sed risus ultricies tristique.';
    card.appendChild(aboutUsText);
    card.classList.add('card');
    aboutHeader.textContent = 'About us';
    aboutContainer.appendChild(aboutHeader);
    aboutContainer.id = 'about-container';
    aboutContainer.appendChild(card);
    content.appendChild(aboutContainer);
}

export default createAboutPage;