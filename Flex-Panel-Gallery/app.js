const panels = document.querySelectorAll('.panel'); // Select a node list of panel inside

function toggleOpen(){
  this.classList.toggle('open');
}

function toggleActive(e){
  if (e.propertyName.includes('flex')){ // To cover any name that has 'flex' word
    this.classList.toggle('open-active');
  }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen)); // Reference to the function: toggleOpen
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive)); // Reference to the function: toggleOpen
