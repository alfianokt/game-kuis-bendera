// init router : https://github.com/lukeed/navaid
let router = navaid();

// link routes
const routes = {
  _el: (name) => document.querySelectorAll(`button[data-link="${name}"]`),
  get home() {
    return this._el('home');
  },
  get start() {
    return this._el('start');
  },
  get learn() {
    return this._el('learn');
  },
  get about() {
    return this._el('about');
  },
};

// section list
const sections = {
  _el: (name) => document.querySelector(`section[id="${name}"]`),
  get home() {
    return this._el('home');
  },
  get start() {
    return this._el('start');
  },
  get learn() {
    return this._el('learn');
  },
  get about() {
    return this._el('about');
  },
};

const showPage = (name) => {
  Object.keys(sections).filter(el => el != '_el').forEach(el => {
    if (el == name) {
      sections[el].classList.remove('dn');
      sections[el].classList.add('db');
    } else {
      sections[el].classList.remove('db');
      sections[el].classList.add('dn');
    }
  });
};

router
  .on('/', () => {
    showPage('home');
  })
  .on('/start', () => {
    showPage('start');
  })
  .on('/learn', () => {
    showPage('learn');
  })
  .on('/about', () => {
    showPage('about');
  })
  .on('/*', () => {
    router.route('/', true);
  });

Object.keys(routes).filter(el => el != '_el').forEach(el => {
  routes[el].forEach(el2 => {
    el2.addEventListener('click', () => {
      router.route('/' + el, true);
    });
  });
});

router.listen();