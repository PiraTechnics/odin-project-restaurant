import img from './10-barrel-brewing.jpg';

export default function loadLanding() {

    const container = document.querySelector('#content');

    const header = document.createElement('header');
    const headerText = document.createElement('h1');
    headerText.innerText = '10 Barrel Brewing';
    
    const headerImg = new Image(500); //constructs new image with a 500px width
    headerImg.src = img;

    header.append(headerText, headerImg);
    container.appendChild(header);
    
    const testimonials = document.createElement('article');
    
    const test1 = document.createElement('section');
    const quote1 = document.createElement('h3');
    quote1.innerText = 'The Best Restaurant in town!';
    const person1 = document.createTextNode('- Some Dude');
    test1.append(quote1, person1);
    
    
    const test2 = document.createElement('section');
    const quote2 = document.createElement('h3');
    quote2.innerText = 'Was very enjoyable';
    const person2 = document.createTextNode('- This lady I work with');
    test2.append(quote2, person2);
    
    const test3 = document.createElement('section');
    const quote3 = document.createElement('h3');
    quote3.innerText = 'The oysters could use a bit more sauce';
    const person3 = document.createTextNode('- A sentient piece of wood being used as decoration');
    test3.append(quote3, person3);
    
    //Add all testimonials to the article
    testimonials.append(test1, test2, test3);
    container.appendChild(testimonials);

}