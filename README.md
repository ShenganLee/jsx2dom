## jsx2dom
Lightweight library to render JSX directly into DOM.


## Installation

### yarn:
```
yarn add jsx2dom
```

### npm:
```
npm install jsx2dom --save
```

## How use

You have to transpile **JSX** syntax with using `babel-plugin-transform-react-jsx`, by default plugin is configured to work with **React.js**, so you have to configure plugin by set parameter `pragma` to value `jsx2dom` in options.

*Sample file `.babelrc` *:
```json
{
  "plugins": [
    ["transform-react-jsx", {
      "pragma": "jsx2dom"
    }]
  ]
}
```

Please look into [example](https://github.com/jakub-gawlas/jsx2dom/tree/master/example) to see simple project using ***jsx2dom***.

## Examples

### render:

```js
import jsx2dom, { render } from ***jsx2dom***

render(<h1>Hello World!</h1>, '#app')
```

```
<div id="#app"></div>
```

### component:

```js
import jsx2dom, { render } from 'jsx2dom'

function Welcome({ name }){
  return(
    <h1>Hello {name}!</h1>
  );
}

export default Welcome;
```

### map:

```js
const items = ['foo', 'bar', 'baz'];

const List = (
  <ul>
    {items.map( item => <Item text={item} />)}
  </ul>
);

function Item({ text }){
  return(
    <li>{text}</li>
  )
}

export default List;
```

### event listener:

```js
import jsx2dom, { render } from 'jsx2dom'

function ButtonWelcome({ name }){
  return(
    <button onClick={() => alert(`Hello ${name}!`)}>
      Click me!
    </button>
  );
}

export default ButtonWelcome;
```

### ref:

```js
import jsx2dom, { render } from 'jsx2dom'

let refInput = null;

function InputWelcome({ name }){
  return(
    <input ref={(ref) => refInput = ref} />
  );
}

export default InputWelcome;
```