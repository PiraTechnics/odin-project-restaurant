export default function loadMenu() {
    const container = document.querySelector('#content');

    //Menu Header
    const header = document.createElement('div');
    header.classList.add('menu-header');
    header.innerHTML = "<h2>Menu</h2>";
    container.appendChild(header);

    //Menu Item 1
    const item1 = createMenuItem('house-beer.jpg', 'House Beer', 'A smooth, refreshing basic beer for when you just want something simple');
    
    //Menu Item 2
    const item2 = createMenuItem('craft-beer.jpg', 'Craft Beer', 'A fancier beer for you fancy-pants high fallutin drinkers');

    //Menu Item 3
    const item3 = createMenuItem('green-beer.jpg', 'Green Beer', 'It\'s made with food dye, sam I am. You might just like Green Beer & Ham');

    container.append(item1, item2, item3);
}


//Helper factory function (sort-of) for menu-items
function createMenuItem(imgPath, title, desc) {

    const item = document.createElement('div');
    item.classList.add('menu-item');
    
    const beerImg = document.createElement('img');
    beerImg.setAttribute('src', imgPath);
    beerImg.setAttribute('width', '300px');

    const itemTitle = document.createElement('h3');
    itemTitle.innerText = title;

    const itemDesc = document.createTextNode(desc);

    item.append(beerImg, itemTitle, itemDesc)
    
    return item;
}