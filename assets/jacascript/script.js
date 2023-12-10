let menu = document.getElementById('menu');
let menuIcon = document.getElementById('menu-icon');

function displayMenu(event) {
    let menuSelections = ['Rules', 'Highscores', 'Contact'];
    let menuBox = document.createElement('ul');

    for (i=0; i < menuSelections.length; i++) {
        let selections = document.createElement('li');
        selections.innerHTML = menuSelections[i];
        menuBox.appendChild(selections); 
    }   

    menu.removeChild(menuIcon);
    menu.appendChild(menuBox);
    menu.setAttribute('id', 'menu-selections')
}

menu.addEventListener('click', displayMenu);
