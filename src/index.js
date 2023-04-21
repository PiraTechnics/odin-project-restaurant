import loadLanding from "./landing";
import loadMenu from "./menu";
import loadContact from "./contact";

//Menu Tabs
const navMenu = document.createElement('nav');

const landingTab = document.createElement('span');
landingTab.innerHTML = " Home /";
landingTab.addEventListener('click', () => {
    wipeTab();
    loadLanding();
});

const menuTab = document.createElement('span');
menuTab.innerHTML = " Menu /";
menuTab.addEventListener('click', () => {
    wipeTab();
    loadMenu();
});

const contactTab = document.createElement('span');
contactTab.innerHTML = " Contact /";
contactTab.addEventListener('click', () => {
    wipeTab();
    loadContact();
});

navMenu.append(landingTab, menuTab, contactTab);
document.body.prepend(navMenu);

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