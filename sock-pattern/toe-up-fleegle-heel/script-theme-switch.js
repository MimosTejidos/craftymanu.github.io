window.onload = initiation()

function initiation() {
    // Dark light themes:
    const darkLightModeSwitch = document.querySelector('.switch');
    const darkLightCheckbox = document.getElementById("light-dark-checkbox");
    darkLightModeSwitch.addEventListener('change', darkLightMode);

    // light/dark theme local storage:
    if (localStorage.theme) {
        console.log('saved theme: ' + localStorage.theme);
        if (localStorage.theme == "light-mode dark-mode") {
            
            var darkCheckbox = '<input type="checkbox" id="light-dark-checkbox" checked>'; //it can be anything
            if(darkLightCheckbox.outerHTML) { //if outerHTML is supported
            darkLightCheckbox.outerHTML = darkCheckbox; ///it's simple replacement of whole element with contents of str var
            }
            // console.log('checked')
            darkLightMode();
        }
    } else {
        const theme = darkLightCheckbox.value;
        localStorage.theme = theme;
        console.log('Theme: ' + localStorage.theme);
    }
} //END of init function

// light/dark mode toggle:

function darkLightMode() {
    console.log('darkLightMode function EXECUTED');
    var element = document.body;
    
        element.classList.toggle('dark-mode');
        var elements = document.getElementsByClassName('light-mode');
        for (let i = 0; i < elements.length; i++) {
            elements[i].classList.toggle('dark-mode');
        }
        var element = document.querySelector('footer');
        if (localStorage.theme == "light-mode") {
            element.classList.toggle('dark-mode');
        }
    
        var lightSwitch = document.querySelector('#light');
        var darkSwitch = document.querySelector('#dark');
    
        darkSwitch.classList.toggle('dark-selected');
        lightSwitch.classList.toggle('light-selected');
        storeDarkLightTheme()
    
    
  } //end of darkLightMode funtion

  //saving dark-light theme user preference:
   function storeDarkLightTheme() {
         const theme = document.getElementById("mainDiv").className;
         localStorage.theme = theme;
         console.log('Theme: ' + localStorage.theme);
   } //end of saving dark-light theme user preference



