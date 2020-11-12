

import {loadFunc } from './homeLoad';
import {loadFunc as contactLoad} from './contactLoad';
import {loadFunc as menuLoad} from './menuLoad';




(() => {

    loadFunc();
    const tabArr = Array.from(document.querySelectorAll('.tab'));
    const main = document.querySelector('main');

    // set home page as active
    tabArr[0].classList.remove('.tab');
    tabArr[0].classList.add('tab-selected');


    const clearMainSection = () => {
        while(main.lastChild){
            main.removeChild(main.lastChild);
        }
    };

    // header click toggle events
    tabArr.forEach(element => {
        element.addEventListener('click', e => {
            if(e.target.id === 'Home' && !e.target.classList.contains('tab-selected')){
                clearMainSection();
                loadFunc();
            }
            else if(e.target.id === 'Menu' && !e.target.classList.contains('tab-selected')){
                clearMainSection();
                menuLoad(main);
            }
            else if(e.target.id === 'Contact' && !e.target.classList.contains('tab-selected')){
                clearMainSection();
                contactLoad(main);
            }
            
            tabArr.forEach(el => {
                if(el.classList.contains('tab-selected')){
                    el.classList.remove('tab-selected');
                    el.classList.add('tab');
                }
            });

            e.target.classList.remove('tab');
            e.target.classList.add('tab-selected');

        
        });
    });


})();