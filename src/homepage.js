const page = document.querySelector('#content')

const homepage_init = (() => {
    init()

    function init() {
        title();
        menu();
        image();
        review();
    }

    function title() {
        const h1title = document.createElement('h1');
        h1title.textContent = "Mamma mia!";
        page.appendChild(h1title);
        const h2title = document.createElement('h2');
        h2title.textContent = "Italian Restaurant";
        page.appendChild(h2title);
    }

    function menu() {
        const navbar = document.createElement('div');
        navbar.setAttribute('id', 'navbar');
        page.appendChild(navbar);
        for (let i=0; i < 4; i++) {
            let navtab = document.createElement('a')
            switch (i) {
                case 0:
                    navtab.setAttribute('href', '#home');
                    navtab.setAttribute('class', 'active');
                    navtab.textContent = "Home";
                case 1:
                    navtab.setAttribute('href', '#menu');
                    navtab.textContent = "Menue";
                case 2:
                    navtab.setAttribute('href', '#aboutus');
                    navtab.textContent = "About us";
                case 3:
                    navtab.setAttribute('href', '#contat');
                    navtab.textContent = "Contact";
            }
            navbar.appendChild(navtab);
        }
    }

    function image() {

    }
    function review() {

    }
})();

