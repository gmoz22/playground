/**
 * Created by soziel on 2/12/14.
 */

var to = 3000;

window.onload = function () {
    console.log('window.load, waiting ' + (to / 1000) + ' seconds...');
    setTimeout(function () {
        console.log('done waiting');
        var h1 = document.getElementsByTagName('h1');
        h1[0].innerHTML = 'Playground!';
    }, to);
};