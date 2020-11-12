
const contentContainer = document.querySelector('#content');
const main = document.createElement('main');
const footer = document.createElement('footer');
const footerDiv = document.createElement('div');
const footerText = document.createElement('p');
const h1 = document.createElement('h1');
const h2 = document.createElement('h2');
const imageContainer = document.createElement('div');
const image = document.createElement('img');
const text = document.createElement('p');

const addElementIds = ()=> {
    main.id = 'main-content';
    footer.id = 'footer';
    footerDiv.id = 'footer-container';
    footerText.id = 'info';
    h1.id = 'restaurant-name';
    h2.id = 'text-title';
    imageContainer.id = 'image-container';
    text.id = 'text';
};

const setElementValues = () => {
    h1.textContent = 'Restaurant';
    image.src = '../images/restaurant.jpg';
    h2.textContent = 'Lorem Ipsum';
    text.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lobortis eros sed turpis eleifend, eget vulputate nunc aliquam. Maecenas at laoreet nisi, ut vehicula neque. Vivamus pharetra dolor in neque dapibus cursus. Maecenas vehicula venenatis augue nec ornare. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut elementum nibh sit amet pulvinar porta. Donec sodales quis neque sed aliquam. Sed euismod sed neque ac porta. Sed at diam sed dolor blandit tristique vel vel lectus. Curabitur molestie augue et nulla consequat interdum. Aliquam erat volutpat. Cras dui leo, sodales ac imperdiet ac, iaculis id velit. Interdum et malesuada fames ac ante ipsum primis in faucibus. ";
    footerText.textContent = 'fake@gmal.com | 123 road';
};

const appendElements = () => {
    main.appendChild(h1);
    main.appendChild(imageContainer);
    imageContainer.appendChild(image);
    main.appendChild(h2);
    main.appendChild(text);
    contentContainer.appendChild(main);
    footer.appendChild(footerDiv);
    footerDiv.appendChild(footerText);
    contentContainer.appendChild(footer);
};

const loadFunc = function() {
    addElementIds();
    appendElements();
    setElementValues();
    console.warn('Page successfully loaded')
}

export {loadFunc};