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

## Examples

### render:

```
import jsx2dom, { render } from 'jsx2dom'

render(<h1>Hello World!</h1>, '#app')
```

```
<div id="#app"></div>
```

### component:

```
import jsx2dom, { render } from 'jsx2dom'

function Welcome({ name }){
  return(
    <h1>Hello {name}!</h1>
  );
}

export default Welcome;
```

### map:

```
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

```
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

```
import jsx2dom, { render } from 'jsx2dom'

let refInput = null;

function InputWelcome({ name }){
  return(
    <input ref={(ref) => refInput = ref} />
  );
}

export default InputWelcome;
```