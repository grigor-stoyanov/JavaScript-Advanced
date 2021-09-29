// creating htmlelements
// document.createElement() Factory pattern
// variables holding the html elements are live
let p = document.createElement("li")
p.textContent = 'third'
const ul = document.querySelector('ul')
ul.appendChild(p)
p.textContent += ' edited'
const myElement = ul.children[2]
if (p === myElement) {
    p.textContent += ' true'
}
let c = document.createElement('li')
c.textContent = 'before first'
ul.prepend(c)
//ul.removeChild(p)
// the element is deleted from the tree but remains in memory
//ul.remove(c)
// moving reference from 1 list to the other
li = document.querySelector('ul').children[1]
// li.remove()
// document.querySelectorAll('ul')[1].appendChild(li)
// we can just attach it without removing it because it is the same reference
// its children are also moved with the element
document.querySelectorAll('ul')[1].appendChild(li)
// this allows us to sort the lists using only appendChild
// events are user interactions with the browser
// when events are fired/triggered browser checks for listeners
// and communicates with them trough an event object
// the event object gives us the type,element,coordinates of the event
function logEventData(event) {
    console.log(event);
}
// click event properties: target:button(reference to element),buttons:0(left button of mouse),altkey: false...
// events are registere with a callback function,Html attributes,or dom properties
document.getElementById('btn').onlclick =logEventData
// the best way is Dom Event handler
const btn = document.getElementById('btn')
btn.addEventListener('click',logEventData)
// using event.target property we can add functionality to any button
// in event handlers this refers to target unless its in a lambda function
// Event propagation is a nice way to save creating multiple functions
// for example the click event applies both to window and the button
// capture - the click goes trough all elements until it reaches the firing trigger
// bubbling is the oposite
// usecapture = true the 3rd parameter of the event listener uses capture
// if its false it uses bubbling
// we can check if the event reached a certain level
// and apply the function to it
// saves memory and uses less code but more cpu load!
// stopPropagation prevents ffurthere propagation of event
// stopImediatePropagation stops also from current event firing
// preventDefault stops browwsor ffrom defafult behaviour i.e <a> navigating new page opening right click menu
