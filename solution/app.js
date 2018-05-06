
function toggleDiv() {
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

function handleEvent(e) {
    console.log(e.target);
    e.preventDefault();
    if (e.type === "click" 
    || (e.type === "keypress" && ["Enter", " "].includes(e.key))) {
       
        // Notice that these are using strings, not booleans
        if (e.target.getAttribute("aria-pressed") === "false") {
            e.target.setAttribute("aria-pressed", "true");
        } else {
            e.target.setAttribute("aria-pressed", "false");
        }
        toggleDiv();
    }
}