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

// show list flags
const listFlags = document.querySelector('#list-flags');
flags.emoji.forEach((el, index) => {
  // what i want
  //
  // <li>
  //   <h1>flag</h1>
  //   flag_name
  // </li>

  const _li = document.createElement('li');
  const _h1 = document.createElement('h1');
  const _p = document.createElement('p');

  _h1.innerText = el;
  _p.innerText = flags.name.id[index];

  _li.appendChild(_h1);
  _li.appendChild(_p);

  listFlags.appendChild(_li);
});

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