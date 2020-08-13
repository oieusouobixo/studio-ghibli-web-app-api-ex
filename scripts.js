const APP = document.querySelector('#root');

const LOGO = document.createElement('img');
LOGO.src = 'logo.png';

const CONTAINER = document.createElement('div');
CONTAINER.setAttribute('class', 'container');

APP.appendChild(LOGO);
APP.appendChild(CONTAINER);

let request = new XMLHttpRequest();

request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

request.onload = function () {
    let data = JSON.parse(this.response);
    
    if (request.status >= 200 && request.status < 400) {
        data.forEach((movie) => {
            const CARD = document.createElement('div');
            CARD.setAttribute('class', 'card');

            const H1 = document.createElement('h1');
            H1.textContent = movie.title;

            const P = document.createElement('p');
            movie.description = movie.description.substring(0, 300);
            P.textContent = `${movie.description}...`;

            CONTAINER.appendChild(CARD);

            CARD.appendChild(H1);
            CARD.appendChild(P);
        });
    } else {
        const ERRORMESSAGE = document.createElement('h1');
        ERRORMESSAGE.textContent = `Gah, it's not working!`;
        APP.appendChild(ERRORMESSAGE);
    };
};

request.send();