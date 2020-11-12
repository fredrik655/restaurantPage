


const appendElements = (main, mainDiv) => {
    main.appendChild(mainDiv);
    for(let i = 0; i < 5; i++){
        let cardDiv = document.createElement('div');
        let cardImage = document.createElement('img');
        let cardText = document.createElement('p');
        cardDiv.appendChild(cardImage);
        cardDiv.appendChild(cardText);
        mainDiv.appendChild(cardDiv);
        cardImage.src= '../images/food.jpg';
        cardText.textContent = `Food : number ${i+1} | $${random(30)}`;
    }
    
};

const random = a => {
    return Math.floor(Math.random() * a + 1);
};



const setElementValues  = (mainDiv) => {
    const mainDivNodes = Array.from(mainDiv.childNodes);
    mainDivNodes.forEach(element => {
        element.classList.add('menu-card');
    });
};


const addElementIds = (mainDiv)=> {
    mainDiv.id = 'menu-container';

};

const loadFunc = function(main) {
    const mainDiv = document.createElement('div');
    console.log(mainDiv.lastChild);
    if(mainDiv.lastChild === null){
        addElementIds(mainDiv);
        appendElements(main, mainDiv);
        setElementValues(mainDiv);
        console.warn('Menu page successfully loaded');
    }
    
};


export {loadFunc};