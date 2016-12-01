import jsx2dom, { render } from '../../src/index.js'; // import jsx2dom, { render } from 'jsx2dom';
import List from './components/List';

/**
 * List
 */

const samples = [
  {
    title: 'Foo',
    description: 'Lorem ipsum'
  },
  {
    title: 'Bar',
    description: 'Sit doris'
  },
  {
    title: 'Baz',
    description: 'Aminus le vrota'
  }
];

const items = [...Array(100)].map((_, idx) => (
  {
    ...samples[Math.floor(Math.random()*samples.length)],
    id: idx
  }
));

function onMouseOverItem(id){
  console.log(`Mouse over item #${id}`);
}

const list = <List items={items} onMouseOverItem={onMouseOverItem} />;

render(list, '#list'); 

/**
 * Footer
 */

function setRandomColor({ target }){
  target.style.color = ('00000'+(Math.random()*(1<<24)|0).toString(16)).slice(-6);
}

const footer = (
  <p>
    <strong onClick={setRandomColor} ref={(ref) => console.log(ref.textContent)}>
      jsx2dom
    </strong>
    <span style="font-style:italic;margin-left:10px;">
      generated {items.length} items.
    </span>
  </p>
);

setTimeout(() => render(footer, '#footer'), 500);