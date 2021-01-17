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

// show section by name or id
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

/* start learn page */

// show list flags on learn page
const el_list_flags = document.querySelector('#list-flags');

// count flags
document.querySelector('#count-flags').innerText = flags.emoji.length;

flags.list.forEach(el => {
  // what i want
  //
  // <li>
  //   <h1>flag</h1>
  //   flag_name
  // </li>

  const _li = document.createElement('li');
  const _h1 = document.createElement('h1');
  const _p = document.createElement('p');

  _h1.innerText = el.emoji;
  _p.innerText = el.name.id;

  _li.appendChild(_h1);
  _li.appendChild(_p);

  el_list_flags.appendChild(_li);
});

/* end learn page */


/* start router */

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

/* end router */


/* start game page */

// get random
// Math.floor(Math.random()*flags.emoji.length);

const btn_game_start = document.querySelector('#game-start');
const el_game_time_left = document.querySelector('#game-time-left');
const el_game_select = document.querySelector('#game-select');
const el_game_title = document.querySelector('#game-title');
const el_game_title_result = document.querySelector('#game-title-result');
const el_game_title_played = document.querySelector('#game-title-played');
const el_game_quest_title = document.querySelector('#game-quest-title');
const el_game_total_answer = document.querySelector('#game-total-answer');
const el_game_total_correct = document.querySelector('#game-total-correct');
const el_game_to_start = document.querySelector('#game-to-start');

let data_game = {
  answered: {
    // id: bool
  },
  now: {
    id: null,
    key: null,
  },
};


// shuffle array
Array.prototype.shuffle = function () {
  return this.sort(() => Math.random() - 0.5);
};
// create question
const createQuest = ()=>{
  const flag_list = flags.list.filter(el => data_game.answered[el.id] == undefined || data_game.answered[el.id] == false);
  const quest_length = 4;
  const quest_list = flag_list.shuffle().slice(0, quest_length);
  const key = Math.floor(Math.random() * quest_length);
  console.log(key);

  [data_game.now.id, data_game.now.key] = [quest_list[key].id, key];


  // set quest title
  el_game_select.innerText = quest_list[key].name.id;

  // what i want
  //
  // <ul>
  //  <li type="select" data-index="index">
  //    <h1>flag</h1>
  //  </li>
  // </ul>
  const _ul = document.createElement('ul');
  quest_list.forEach((el, i) => {
    const _li = document.createElement('li');
    const _h1 = document.createElement('h1');

    _h1.innerText = el.emoji;
    _h1.dataset.index = i;

    _li.dataset.index = i;
    _li.type = 'select';
    _li.append(_h1);
    _ul.appendChild(_li);
  });

  el_game_select.append(_ul);

  // create listener
  const el_selector = document.querySelectorAll('#game-select > ul > li');
  const eventHandler = ev => {
    const user_feed = ev.target.dataset.index;
    const user_feed_result = data_game.now.key == user_feed;

    data_game.answered[data_game.now.id] = user_feed_result;

    // if correct
    if (user_feed_result) {
      document.querySelector(`li[data-index="${user_feed}"]`).className = 's-1';
    } else {
      document.querySelector(`li[data-index="${user_feed}"]`).className = 's-0';
      document.querySelector(`li[data-index="${data_game.now.key}"]`).className = 's-1';
    }

    // remove event
    el_selector.forEach(el => {
      el.removeEventListener('click', eventHandler);
    });

    setTimeout(() => {
      // recursive
      createQuest();
    }, 500);
  };

  // add event listener
  el_selector.forEach(el => {
    el.addEventListener('click', eventHandler);
  });
}
// game start
btn_game_start.addEventListener('click', ()=>{
  // hide game start title
  el_game_title.classList.remove('db');
  el_game_title.classList.add('dn');

  // show game played title
  el_game_title_played.classList.remove('dn');
  el_game_title_played.classList.add('db');

  let i = 60; // 60 second

  // on game end
  const gameEnd = ()=>{
    const answered = data_game.answered;
    el_game_total_answer.innerText = Object.keys(answered).length
    el_game_total_correct.innerText = Object.keys(answered).filter(el => answered[el]).length;

    // show el
    el_game_title.classList.remove('db');
    el_game_title.classList.add('dn');

    el_game_title_played.classList.remove('db');
    el_game_title_played.classList.add('dn');

    el_game_title_result.classList.remove('dn');
    el_game_title_result.classList.add('db');
  };

  // start game
  const gameStart = ()=>{
    el_game_time_left.innerText = i;
    i--;

    setTimeout(()=>{
      // if < 0 end the game
      // else recursive (call game start again)
      i < 0 ? gameEnd() : gameStart();
    }, 1000);
  };

  // call start game
  createQuest();
  gameStart();
});

el_game_to_start.addEventListener('click', ()=>{
  el_game_title.classList.remove('dn');
  el_game_title.classList.add('db');

  el_game_title_played.classList.remove('db');
  el_game_title_played.classList.add('dn');

  el_game_title_result.classList.remove('db');
  el_game_title_result.classList.add('dn');
});

/* end game page */