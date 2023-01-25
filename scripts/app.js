let header =document.querySelector('header');
let images = [
    'background: url(assets/headerbkg1.png);',
    'background: url(assets/headerbkg2.png);',
    'background: url(assets/headerbkg3.png);',
    'background: url(assets/headerbkg4.png);',
    'background: url(assets/headerbkg5.png);',
    'background: url(assets/headerbkg.png);',
]

header.setAttribute(
    'style',images[Math.floor((Math.random() * images.length))]);




//this is footer year//
let date = new Date();
let curyear = date.getFullYear();
let yearSpan = document.querySelector('#yearSpan');

yearSpan.innerHTML =  curyear;  

//input product//
