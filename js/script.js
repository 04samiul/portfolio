// Asking Name 
// window.onload = function () {
//     const visitorName = prompt('What is your name?', '');
//     if (visitorName) {
//         document.getElementById('visitorName').innerHTML = visitorName;
//         alert(`Hello! ${visitorName} welcome to my website. Hope you Will enjoy this journey.`);
//     }

// }
// Menu Icon Toggle 
// let menu = document.querySelector(`.menuIcon`);

// menu.onclick = () => {
//     menu.classList.toggle(`move`);
// }




// window.onload= function() {
//     const eduFirstsection= document.getElementById('hsc');
//     eduFirstsection.open=true;
// }

function myFunction() {
    let change = document.getElementById("menu");
    change.classList.toggle("change");
    let nav=document.getElementById("nav");
    nav.classList.toggle("navShow");
}
