
const mainDiv = document.createElement('div');
const contactDiv = document.createElement('div');
const contactTitle = document.createElement('h2');
const contactText = document.createElement('p');
const addressDiv = document.createElement('div');
const addressTitle = document.createElement('h2');
const addressText = document.createElement('p');
const mailDiv = document.createElement('div');
const mailTitle = document.createElement('h2');
const mailText = document.createElement('p');

const appendElements = (main) => {
    contactDiv.appendChild(contactTitle);
    contactDiv.appendChild(contactText);
    addressDiv.appendChild(addressTitle);
    addressDiv.appendChild(addressText);
    mailDiv.appendChild(mailTitle);
    mailDiv.appendChild(mailText);
    mainDiv.appendChild(contactDiv);
    mainDiv.appendChild(addressDiv);
    mainDiv.appendChild(mailDiv);
    main.appendChild(mainDiv);
};



const setElementValues  = () => {

    mainDiv.id = 'contact-container';
    contactTitle.textContent = 'Phone';
    addressTitle.textContent = 'Address';

    contactText.textContent = '123-456789';
    addressText.textContent = '123 road the world';

    mailTitle.textContent = 'Mail Address';
    mailText.textContent = 'fake@gmal.com';
};

const loadFunc = function(main) {
    //addElementIds();
    appendElements(main);
    setElementValues();
    console.warn('Contact page successfully loaded');
};


export {loadFunc};