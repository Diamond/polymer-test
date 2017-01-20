import './components/base.html';
import './components/hello-world-list.html';
//import './app.css';

const render = (element, target) => {
  document
    .querySelector(target)
    .appendChild(
      document.createElement(element)
    );
};

render('hello-world-list', '#App');
