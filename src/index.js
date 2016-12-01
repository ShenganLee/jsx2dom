import createElement from './createElement';

export default function jsx2dom(tag, props, ...children){
  if(typeof tag === 'function'){
    const propsToApply = {...props, children};
    return tag.apply(this, [propsToApply]); 
  }
  if(typeof tag === 'string')
    return createElement.apply(this, arguments);
  return tag;
}

export render from './render';