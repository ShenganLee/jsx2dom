export default function render(element, query, options = { append: false }){
  const target = document.querySelector(query);
  if(!target) 
    return;
  
  const { append } = options;
  if(!append)
    _emptyNode(target);

  target.appendChild(element);
}

/**
 * Remove all elements from given node
 * @param {Element} node
 */
function _emptyNode(node){
  while(node.firstChild){
    node.removeChild(node.firstChild);
  }
}