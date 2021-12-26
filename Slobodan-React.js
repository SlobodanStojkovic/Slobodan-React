/* REACT is a JavaScript library for BUILDING USER INTERFACES.

React is a client-side library, that means its a JS code that run on clients browsers. We use JS in the browser to manipulate web pages in the browser. React is all about building modern, reactive user interfaces for the web. It has declarative, component-focused approach. React can be used to control parts of HTML pages or entire pages. React can also be used to control the entire frontend of a web application. 

Alternatives to React are Angular and Vue. 
React.js is a lean and focused component-based UI library. Certain features (e.g. routing) are added via community packages.
Angular is a complete component-based UI framework, packed with features. Uses TypeScript. Can be overkill for smaller projects.
Vue.js is complete component-base UI framework, includes most core features. A bit less popular than React & Angular. Has more features than React and less than Angular.

HOW TO GET STARTED WITH REACT
npx create-react-app my-app-name    - create starting project
cd my-app-name                      - change directory
npm start                           - starts the developlment server


COMPONENTS are reusable building blocks in your user interface. Custom components built by us ALWAYS start with CAPITAL LETTER.

Components are REUSABLE and provide SEPARATION OF CONCERNS.

React allows you to create re-usable and reactive components consisting of HTML, CSS and JavaScript.

To run the npx create-react app ... you will need to install Node.JS from nodejs.org.

Index.js is the first code file that will be executed whenever React page is loaded. This code is executed initially.

REACT and REACT.DOM form REACT LIBRARY.

Index.html is the single html file that will be loaded in browser.

JSX code is HTML code inside JavaScript. JSX stands for JavaScript XML. It can be said that HTML in the end is XML.

IMPERATIVE APPROACH IS:
const paragraph = document.createElement("p");
paragraph.textContent = "This is a paragraph";
document.getElementById("root").append(paragraph);


DECLARATIVE APPROACH is used in React.
<p>This is a paragraph</p>


React knows that custom components made by user start with first Upper character, while built-in HTML elements start with lowercase character.


If we want to make a custom component that will hold some other of our custom components, for example CARD Component, we must put props in function and then {props.children} between the divs which we want to use as a wrapper. If we want to use classes with our custom components we will use this:



function Card(props) {
    const classes = "card " + props.className;
    return <div className={classes}>{props.children}</div>
}

after writting this code we can then use this:
<Card className ="card" />




USER INTERACTION AND STATE

useState is a function provided by a React library. All REACT HOOKS start with USE... They must be called inside REACT Component function.


WHENEVER WE UPDATE STATE AND WE DEPEND ON THE PREVIOUS STATE, WE SHOULD CALL setSomething() and pass in a function to that function. setSomething((prevState)=>{
    return {...prevState, propertyWeWantToChange: event.target.value }
})

We do this because REACT schedules state updates, doesnt do them instantly. With above function we will always have the latest state snapshot.

LIFTING A STATE UP is moving a state from a child component to some parent component to either use it there or to pass it down to some other child component.


KEY Values are adding when we map array so that React knows where to place each item, and not to loop over array each time a new item is added. We should assign them in most cases key={item.id}


*/

/* REACT HOOKS */

/* 
HOOKS always start with the prefix USE. Hooks work only on top level components. They dont work inside functions.

useState purpose is to handle react data > when data changes re-render the UI. 
useEffect will run when component is mounted and when state changes. Second argument is array of dependencies. Its main purpose is to manage side effects.

useContext > share data without passing props. Consume value form nearest parent provider

useRef > mutable value does NOT re-render UI. Used to grab native HTML elements from JSX. When we need to grab element from the DOM.

useReducer > returns two values, state and dispatch.

useImperativeHandle > modify the exposed ref 

useLayoutEffect

useDebugValue

useMemo: Returns and stores the calculated value of a function in a variable
useCallBack: Returns and stores the actual function itself in a variable

*/
