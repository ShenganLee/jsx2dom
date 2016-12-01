import jsx2dom from '../../../src/index.js'; // import jsx2dom from 'jsx2dom';

export default function Item({ title, description, onMouseOver }){
  return(
    <div onMouseOver={onMouseOver}>
      <h2>
        {title}
      </h2>
      <span>
        {description}
      </span>
    </div>
  );
}