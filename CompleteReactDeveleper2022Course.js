/* 
=================================================================================================================
COMPLETE REACT DEVELOPER IN 2022 (w/ REDUX, HOOKS, GRAPHQL) course by Andrei Neagoie and Yihia Zhang (39 hours)
=================================================================================================================

===============
REACT CONCEPTS
===============
1. Don't touch the DOM, I will do it. DOM is Document Object Model, its what browser uses to display website and web app. JavaScript is manipulating the DOM. Directly changing individual parts of our app in response to user interactions is called IMPERATIVE APPROACH. Problem with Imperative approach makes it difficult to see relationship between actions and changes that are happening. DECLARATIVE approach, lets React to change small parts of whole page, because manipulating whole DOM is very expensive. We DECLARE how something on our page should look like. That way React will know what to update, and what to do.

2. Build websites like lego blocks. React is designed around the concept of reusable components. Put together small components to make a big component. So people can build these components, like Material UI components, or Bootstrap components or Blueprint. People can now share these components across different web sites. We have a state of our app, then components are created based on that data simply as functions. Components are JS functions which recieve some attributes which we call props and in return they return an HTML look like code but in JavaScript (JSX). React developer tools allows us to see components and that they are built from HTML elements. Each of our components work together to have the whole app.

3. Unidirectional data flow - Data flows in single direction, so its easier to debug our code. Virtual DOM giver React a BLUEPRINT on how it should update the REAL DOM. Each time we want to change something on our page, a state must change, the data needs to change. As soon as state changed, React says, the state changed, combine the new state and the components we have and update the DOM.

4. I am just the UI, the rest is up to you. React doesnt make assumptions about what technology stack we use. It only focusses on the UI, so it allows us to have React Native, React 360 for VR apps, which uses React blueprint but the library can focus on it, Electron and React Desktop allows us to build applications for desktop, and they interact with Windows, macOS and Linux operating System. It allows us to use the same idea for building a lot of diferent cross-platform applications. That is why we import React and React DOM. 

REACT KEYWORDS: Declarative, JSX, Components, State, Props, VirtualDOM. React is a declarative paradigm, instead of telling our apps what to do we simply give it some state, some components build by JSX, that sometimes have properties, called props, and based on that it creates VirtualDOM that is used to update the DOM.

The job of a React Developer:
1. Decide on Components - what is a component, how much do we want to break down a component, how to build reusable components and how to break down an app into different components.
2. Decide the State and where it lives - state can be in multiple locations in our app.
3. What changes when state changes - what to rerender on changes because it has the huge effect on performance.

=============
REACT BASICS
=============

NVM - Node version manager

NPM vs NPX - npx lives inside npm. npx allows us that we dont have to install -g globally a create-react-app for example, with npx we always use latest version without having to install it.
npm list - to see globally installed list of packages

Babel takes all JavaScript code and transpiles it to code that browsers can understand (old versions of JavaScript).
Webpack makes our code more efficient. It pulls our JS code, splits it in chunks so that user gets the code related to the page he wants to visit. 

robots.txt helps web crawlers how to scrape our web app.

JSX is SYNTAX EXTENSION of Javascript. It extends JavaScript. It looks like HTML but its not HTML.

Object.assign({}, objtemplate) allows us to create a different object using an another object as a template

State update in CLASS components will use SHALLOW MERGE, it will look for same key value that we set in setState and update it, everything else it keeps and doesnt change or remove as in functional components state changes.

In componentDidMount we fetch data if we want to display that data when we open our app.

Promises - .then can be called only on a resolved value. 
const myPromise = new Promise((resolve, reject) => {
  if(sucsess) {
  resolve("Success")
  } else {
    reject("Fail")
  }
})

myPromise
    .then(value => value + "!")
    .then(newValue => console.log(newValue))
    .catch(rejectValue => console.log(rejectValue))



PURE FUNCTION RETURNS SAME THING no matter how many times is called when given the SAME ARGUMENTS. PURE FUNCTION SHOULD NOT PRODUCE SIDE EFFECTS.
const pureFunc = (a, b) => {
  return a + b
}

IMPURE FUNCTION - depends from external value, here in example its value c. 
let c = 3;
funcA = (a, b) => {
  return a + b + c
}

In funcB changing value of c is considered SIDE EFFECT. In REACT we write IMPURE Functions when writing Functional components and when the render and rerender.
funcB = (a, b) => {
  c = a + b
  return a * b;
}

VIRTUAL DOM is a copy of REAL DOM made in JavaScript. JS is significantly quicker to create and reflect changes, so the REFLOW is easy to be done in JavaScript but very expensive in REAL DOM. When changes are made React makes a snapshot of Virtual Dom, then makes another of Virtual Dom in which setState is being called and two Virtual DOMs are being compared, then the diferences in components reflect what should be changed in REAL DOM.

REACT and REACT DOM Libraries allows us to use syntactic sugar they provide to us. Under the hood, this is what happens:

const Person = props => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.occupation)
  ])
};

const App = () => {
  return React.createElement("div", {props, class, etc... in key value pairs}, [
    React.createElement("h1", {class: "title"}, "React is rendered"),
    React.createElement(Person, {name: "Slobodan", occupation: "React developer"}, null),
    React.createElement(Person, {name: "Andrei", occupation: "Lead instructor"}, null),
  ])
}
ReactDOM.render(React.createElement(App), document.getElementById("root"))

//in order that our code works in React 18, we need to delete upper row and put these three rows
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));

CRUD represents different ways that we can operate on STORED DATA that usually lives in Database. 
C - create the datea
R - read the data = getting data
U - update the data
D - delete the data
We send CRUD request to our Firebase server with Auth Token, then Firebase verifies if we have the rights for that CRUD request then if we have executes it.

ASYNC AWAIT is a way to write functions that contain promise oriented or asynchronous code that looks synchronous.

Buttons are BY DEFAULT of type SUBMIT IF THEY ARE INSIDE A FORM. So we must consider that if we have several buttons and we dont want that each one be of type submit, for example we can put it type="button"

EMPTY OBJECT is still going to evaluate as TRUE - so when we set currentUser: null, in our context default state it will be evaluated as true.

Instead of placing anonymous functions inside element onClick={()=>{somecode}} its better because future optimisations and changes to put them in separate handlers, for example const addItemHandler = () => addItemToCart(cartItem);

SEQUAL DATABASE - we can see the structure of what the data is housed inside individual collection. They all must have the same shape of data. 

NO-SEQUAL DATABASE - They dont have to have the same shape of data. We get a lot of flexibility to save whatever we want where we want. But it is very unpredictable and hard to work with a lot of different data.

When publishing sites on netlify we neet to add _redirects file to our home page so that refreshing while on some of the categories pages would not give us error. File will contain:       /* /index.html 200     
/* means to match whatever path after /, to /index.html and send response code 200

REDUCERS ONLY STORE READABLE VALUES! For example, they store isCartOpen:false, cartItems: [], cartCount: 0, cartTotal: 0,

There are TWO MAIN Differences inside between Reducer and Redux ant it has to do with the accessibility of the data as well as the flow of data.
ACCESSIBILITY - With CONTEXT we are able to wrap the appropriate portions of our application and isolate the accessibility to only the children of where it is that we have wrapped our providers. Redux will always wrap the whole application.
DATA FLOW - In Context we can pass one reducer data to component while in Redux we will have different reducers that combine together into one Root Reducer and then pass whole state to every component that uses any of the Redux Reducers. With Context, each use reducer gives us a new dispatch that goes specifically to the respective useReducer hook. With Redux we have ONE REDUX ACTION and all reducers recieve that action, who then need to determine in the corresponding reducer what to update. 
Because of this in REDUX as DEFAULT all reducers need to return state, because they all recieve an action, while in CONTEXT we throw an error because we know that Context must recieve and ACTION THAT IS MEANT FOR THAT SPECIFIC CONTEXT.

npm install redux - Redux library allows us to interact with the reducers that produce the root reducer which produce the store.
npm install react-redux - React Redux library gives us all the React bindings so that we can dispatch and pull store values off of Redux.
npm install redux-logger - Redux Logger helps us understand how actions are firing and what is happening with our state.

MIDLLEWARES - whenever we dispatch an action, before that action hits the reducer it hits the MIDDLEWARE first.

npm i redux-persist - Library that will allow us to persist our reducer values in local storage

REDUX SAGA allows us to perform very complex coordination of asynchronous side-effects inside redux. SAGA is different from other middleware, because with SAGA actions will hit the reducers first before moving on to the saga, which is not the case with other middleware where actions hit the middleware first and then go to the reducers. If there are other middleware, action will go to all other middlewares then to the reducer, then they will finally hit the sagas. Sagas will respond to these actions, perform certain bussines logic, certain asynchronous requests, etc. From here maybe new actions be generated and fired upon middleware and then to the reducers. And they can flow through the saga also again! Actions fired by sagas can triger other sagas!

GENERATOR FUNCTION is a function that reasembles async await, async await is built on top of generators. Execution inside async function is pause when it sees execution on await keyword, in generator functions that keyword is yield. They are declared as function* 
function* gen(i) {
  yield i;
  yield i + 10;
  return 25
}

const g = gen(5)
g.next() // {value: 5, done: false}
g.next() // {value: 15, done: false}
g.next() // {value: undefined, done: true}

SAGAS Work on YIELD BASED FORMAT because they need to know and give us control when we want to continue with execution with block of code we written or we want to do something with it first.


export function* categoriesSaga() {
  yield all() //all - run everything inside and only complete when everything is done, its a pause essentially, all code bellow it wont run until everything in this line of code is finished. If we give ALL the array of different functions we are calling and it will wait until all of them complete before completing
}


TypeScript: Objects => type and interface.

INTERFACES golder rule > interfaces are exendable, very similar to class components. All Interfaces start with an I > ISearchBoxProps

TYPES are usually used with functional programming style, while interfaces if we prefer object oriented style we use interfaces.


With GRAPHQL and Apollo we actually REPLACE REDUX. Apollo CACHES the QUERY, not the actual items themselves.
Application that uses Apollo doesnt need redux.
Setting up GraphQL backend is complicated.

Improving the performance of our code or optimizing our code should be done ONLY WHEN WE SEE A PERFORMANCE BOTTLENECK. If there are not any slowdowns in our code, there is no reason to start optimizing ahead of time. Reason for this is because those optimizations have a COST. They are tradeoffs. We trade off in begining so that we get much more optimized calls later on if certain optimized code is being called multiple times.

useCallback - React is not memoizing the output of the function, it memoizes the function itself. Because it memoizes the function the React doesnt have to reinitialize this function on a render or rerender.

useMemo - Memoizes the value inside the function, the output of the function. useMemo is primarely when we have expensive functions that need to recompute and they depend on these values inside our functional component. If we dont want those expensive functions to rerun during a rerender cycle we will use this hook.
*/
