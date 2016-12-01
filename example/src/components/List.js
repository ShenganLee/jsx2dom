import jsx2dom from '../../../src/index.js'; // import jsx2dom from 'jsx2dom';
import Item from './Item';


export default function List({ items, onMouseOverItem }){
  return(
    <ul>
      {items.map(({ ...item, id }) => <Item {...item} onMouseOver={() => onMouseOverItem(id) } /> )}
    </ul>
  );
}