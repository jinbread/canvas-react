import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

window._dottedNested = function (key, value) {
    return key.split('.').concat(value).reduceRight((acc, val) => { return { [val]: acc }});
  }

ReactDOM.render(<App type="svg" />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
