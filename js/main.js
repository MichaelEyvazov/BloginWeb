function init() {
    // checkMediaSize(); // Call listener function at run time   
}

function toggleMenu() {
    document.body.classList.toggle('open');
    document.querySelector('ul').classList.toggle('flex');
    var elMenuButton = document.querySelector('.mobile-menu-button');
    elMenuButton.textContent === '☰' ? elMenuButton.innerHTML = '&times;' : elMenuButton.innerHTML = '☰';
}

function toggleModal() {
    document.querySelector('.modal').classList.toggle('show');
}

function closeModal() {
    document.querySelector('.modal').classList.remove('show');
}

// function dropdownToggle() {
//     var elDropDown = document.querySelector('.dropdown-content');
//     elDropDown.style.display = ((elDropDown.style.display === 'block') ? 'none' : 'block');
//     // document.querySelector('.dropdown-content').style.display('flex');
// }

// function checkMediaSize() {
//     var x = window.matchMedia('(max-width:1024px)');
//     elFlex = document.querySelector('ul');
//     x.matches ? elFlex.classList.remove('flex') : elFlex.classList.add('flex');// If media query matches
// }