function clearContent() {
  
}

function clearAll() {
  // TODO
}

function addToTable() {
  let item = document.getElementById('new-item').value; // debug this
  let node = document.createElement('li');
  let textnode = document.createTextNode(item);
  node.appendChild(textnode);
  document.getElementById('table').appendChild(node);
}