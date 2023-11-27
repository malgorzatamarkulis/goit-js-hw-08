import _ from 'lodash';

const document.querySelector('[name="email"]')
    .setAttribute('oninput', 'throttledFunction()');

function myFunc2() {
    let value = document.getElementById("myInput").value;
    localStorage.setItem('value', value);
    console.log(value);
}

const throttledFunction = _.throttle(myFunc2, 1000);