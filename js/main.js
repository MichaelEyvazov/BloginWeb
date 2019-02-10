function init() {
    checkMediaSize(); // Call listener function at run time   
}

function toggleMenu() {
    document.body.classList.toggle('open');
    document.querySelector('ul').classList.toggle('flex');
    checkMediaSize();
}

function checkMediaSize() {
    var x = window.matchMedia('(max-width:1024px)');
    elFlex = document.querySelector('ul');
    x.matches ? elFlex.classList.remove('flex') : elFlex.classList.add('flex');// If media query matches
}