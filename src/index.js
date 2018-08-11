import _ from 'lodash';
import './style.css';
import './variables.scss';
import Icon from '../public/tenor.gif';

function component() {
 let element = document.createElement('div');
  // Lodash, currently included via a script, is required for this line to work
 element.innerHTML = _.join(['Hello', "world"], ' ');
 element.classList.add('hello');

  // Add the image to our existing div.
  var myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());