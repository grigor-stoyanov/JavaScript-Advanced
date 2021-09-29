// DOM - document object model accessing objects of html document
// Browser API - socket for modifying browser behaviour
// browser objects - window,screen,navigator,history,location, document... 
console.dir(window)
/*DOM - document object model accessing objects of html document
Browser API - socket for modifying browser behaviour
browser objects - window,screen,navigator,history,location, document... 
console.dir(window)
global object in the browser is window
global scope is basically a mapping of all global objects
a function in global scope has the context of the window this points to the window
DOM is an html interpratation of objects that can be connected with
we can checks structure and content modify style,properties or read user input/react to events
using innerhtml interperetes string as a html tag and can change document structure
while modifying the element will not interpret it as such
adding js files to scrip tags is possible to src
static elements have textContent properties and dynamic like user input tags have value attribute to access content
targeting elements in DOM Tree
document.getElementByID() - most common searching an element with specific id
getElementsByClass(), getElementsByTag - multiples elements because they are not unique like id returns collection!
html collection doesent contain text nodes (textContent) and always live
query selector (jquery) CSS selector querySelector() querySelectorAll(
css selectors - #main (id = main) document.querySelector(#main) document(#content div) - all elements of id=content with div tag
.not,.alert all elements with class note or alert,input[name='login'] <input> with name login ect....
they can be chained together
jquery all returns nodeList collection (can contain whitespace) and can be static or live(rarely)
nodes has foreach and forof but no map
html collection has no foreach or map but forof
to convert them to js array wwe use Array.from(nodes)
[...elements] does the same!
*/
