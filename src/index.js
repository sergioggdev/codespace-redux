import Reveal from 'reveal';

import 'reveal/index.css';
import 'reveal/theme/default.css';

import welcome from './img/welcome.jpg';
import theIssue from './img/domar-js.jpeg';
import lego from './img/lego.jpg';
import facebook from './img/facebook.jpg';
import what from './img/what.gif';
import redux from './img/redux-cover.png';

document.querySelector('#welcome').setAttribute('data-background-image', welcome);
document.querySelector('#issue-home').setAttribute('data-background-image', theIssue);
document.querySelector('#issue-end').setAttribute('data-background-image', lego);
document.querySelector('#flux-home').setAttribute('data-background-image', facebook);
document.querySelector('#flux-what').setAttribute('data-background-image', what);
document.querySelector('#redux-home').setAttribute('data-background-image', redux);

Reveal.initialize({
  history: true,
});
