// Create a new <div> element
const newDiv = document.createElement('div');

// You can also set attributes for the new element if needed
newDiv.setAttribute('id', 'newDivId');
newDiv.setAttribute('class', 'newDivClass');

// Set the content of the new element (optional)
newDiv.textContent = 'This is a new div element';

// Append the new element to an existing element in the DOM
document.body.appendChild(newDiv);

//----------------------------------------------------------------------

// difference between text content and innerHTML

// innerText
const div = document.getElementById("myDiv")
console.log(div.innerText); // // Output: This is bold text.

// innerHTML
const div2 = document.getElementById("myDiv");
console.log(div2.innerHTML); // Output: This is <strong>bold</strong> text.

//-------------------------------------------------------------------------------

// setattribute and remove attribute

// setAttribute
const div = document.getElementById("att");
div.setAttribute("class", "newatt");

// removeAttribute
const div2 = document.getElementById("remove");
div2.removeAttribute('id');

//-------------------------------------------------------------------------------

// add and remove eventListener

const button = document.getElementById('myButton');

function handleClick(event) {
    console.log('Button clicked!');
}

button.addEventListener('click', handleClick);

// Later, remove the event listener
button.removeEventListener('click', handleClick);

//-------------------------------------------------------------------------------
