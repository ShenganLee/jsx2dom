export default function createElement(tag, props, ...children){
  const element = document.createElement(tag);
  const functionsToCall = [];

  if(props)
    Object.entries(props).forEach(([key, value]) => {
      if(_isEventProp(key))
        return element.addEventListener(_toEventName(key), value);

      if(key === 'ref')
        return functionsToCall.push(value);

      element.setAttribute(key, value);
    });
  
  children.forEach((child) => {
    const childrenToAppend = _isText(child) ? 
          document.createTextNode(child.toString()) : child;
    _appendChildren(element, childrenToAppend);
  });

  functionsToCall.forEach((func) => func(element));

  return element;
}

/**
 * Check if passed value is event prop name
 * @param {String} prop
 * @return {Boolean} if string is event prop name 
 */
function _isEventProp(prop){
  return prop.substring(0, 2) === 'on';
}

/**
 * Convert event prop name passed to component to proper event name
 * @param {String} propEventName
 * @return {String} proper event name
 */
function _toEventName(propEventName){
  return propEventName.substring(2).toLowerCase();
}

/**
 * Check if passed value should be used in 'createTextNode' method
 * @param {*} value
 * @return {Boolean} if value should be created by 'createTextNode' in DOM
 */
function _isText(value){
  return (typeof value === 'string' || typeof value === 'number');
}

/**
 * Append children to given parent
 * @param parent {Element}
 * @param children {Array of Element | Element}
 */
function _appendChildren(parent, children){
  if(Array.isArray(children))
    return children.forEach((child) => parent.appendChild(child));

  parent.appendChild(children);
}