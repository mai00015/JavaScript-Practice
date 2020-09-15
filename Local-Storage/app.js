const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');

// Before loading the page, it will get value from the local Storage and output to the screen it it has
const items = JSON.parse(localStorage.getItem('items')) || [];


function addItem(e){
  e.preventDefault(); // To prevent the page refresh
  const text = (this.querySelector('[name=item')).value; // Get value when user inputs and return value
  const item = {
    text, // ES6: Use the same name to get value
    done: false
  }
  items.push(item);
  populateList(items, itemsList);
  // Local Storage on the browser to store value into local to keep the value there
  // Open application tag on the Inspect on the browser
  // If stores normally, it will automatically converts into strings (it only stores strings) - output error
  // Before storing, it needs to convert to JSON to store in the local storage
  localStorage.setItem('items', JSON.stringify(items));
  this.reset(); // Reset value that user inputs 
}

// Loading value from Local Storage
// To avoid empty list (plates = [])
function populateList(plates = [], platesList){
  platesList.innerHTML = plates.map((plate, i) => {
    return `
      <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
        <label for="item${i}">${plate.text}</label>
      </li>
    `;
  }).join(''); // The purpose here is to add to a huge String instead of lots of Strings
}

function toggleDone(e){
  if(!e.target.matches('input')) return; // Skip this unless it's an input
  const el = e.target;
  const index = el.dataset.index; // Get index from each checkbox
  items[index].done = !items[index].done; // Flip flop true and false
  localStorage.setItem('items', JSON.stringify(items)); // Update Local Storage
  populateList(items, itemsList);

}
// Submit to listen when users click enter or press a button
addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);



// Output values on screen when loading if it has in Local Storage
populateList(items, itemsList);
