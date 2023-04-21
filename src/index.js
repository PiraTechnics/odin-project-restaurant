import loadLanding from "./landing";
import loadMenu from "./menu";
import loadContact from "./contact";
import './style.css';

//Bootstrap CSS import
import './scss/styles.scss';

//Menu Tab Listeners
document.querySelector('#homeTab').addEventListener('click', function() {
    wipeTab();
    loadLanding();
});

document.querySelector('#menuTab').addEventListener('click', function() {
    wipeTab();
    loadMenu();
});

document.querySelector('#contactTab').addEventListener('click', function() {
    wipeTab();
    loadContact();
});

//Landing page is set by default
loadLanding();

function wipeTab() {
    const container = document.querySelector('#content');

    while(container.firstChild) { 
        //delete so long as it has children
        //lastChild is faster to loop on (afaik)
        container.removeChild(container.lastChild);
    }
}