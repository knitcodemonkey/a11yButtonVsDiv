
function toggleDiv(e) {
    document.getElementById('showme').classList.toggle('show');
}

/**
 * A div requires that you create event listeners so you can capture 
 * additional info like keypresses, and e.preventDefault to keep it from 
 * triggering on page load
 **/

['click', 'keypress'].forEach(function(evt) {
    document.getElementsByClassName('clickableDiv')[0].addEventListener(evt, handleEvent);
});

function handleEvent(event) {
    if (event.type === "click" 
    || (event.type === "keypress" && ["Enter", " "].includes(event.key))) {
        event.preventDefault();
        toggleDiv(event);
    }
}

