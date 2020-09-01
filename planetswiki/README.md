# React Workshop

Welcome all to the React Workshop, we will be building a `Planetary Wiki` using the `Nasa Image and Video Library API` as a resource to feed into our app.
We will be learning the basics of a React application, and explore the following.

- What is React
- What is JSX
- ES6 features will be using
- Creating components in React
- Creating component state
- Component props
- Component lifecycles methods
- Conditional Rendering
- Adding styles

## Requirements:

- install Node
- install NPM


## Instructions
- Clone this repo e.g. `git clone https://github.com/jesus-castro3/planetswiki.git`
- `npm install`
- `npm start`

## Link to the intro presentation:
https://slides.com/kida1990/react-for-first-times

## ES6 syntax will be using

## Arrow Functions

```
[1,2,3,4].map(n => n * 20 )

//vs

[1,2,3,4].map(function(n) {
  return n * 20
})

//if arrow function receives more then one argument sorrownd w/ ()
[1,2,3,4].map( (n,idx) => n * 20 + idx  )

//NOTE: you cannot bind this context to arrow functions, this will refer to original context
```

## Class Components vs Stateless Components
There are a couple of ways to create components but will be using **TWO** for this workshop
```
/** Class Component, includes state **/
class Button extends React.Component {
  constructor() {
    super(props)
    this.state = {}
  }
  render() {
   <div>
    <button>click me</button>
   </div>
  }
}

/** Stateless component, using function expression w/ arrow functions **/

const Button = () => (
  <button>click me</button>
)


```

## Destructuring
The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
```
var a, b, rest;
[a, b] = [10, 20];

console.log(a);
// expected output: 10

console.log(b);
// expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
```

