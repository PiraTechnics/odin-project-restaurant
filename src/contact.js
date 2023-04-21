export default function loadContact() {
    const container = document.querySelector('#content');

    //Contact US
    const contact = document.createElement('div');
    contact.innerHTML = '<h2>Contact Us</h2>';
    
    //Phone Number
    const phone = document.createElement('div');
    phone.innerHTML = '<h3>Phone</h3>';
    const phoneNum = document.createTextNode('1-800-867-5309');
    phone.appendChild(phoneNum);

    //Address
    const location = document.createElement('div');
    location.innerHTML = '<h3>Location</h3>';
    const address = document.createTextNode('6969 Nowhere Road');
    location.appendChild(address);

    //Hours
    const times = document.createElement('div');
    times.innerHTML = '<h3>Hours</h3>';
    const hours = document.createTextNode('5 - Midnight -- Every Day');
    times.appendChild(hours);

    container.append(contact, phone, location, times);
}