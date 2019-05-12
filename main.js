function clearTextArea() {
  document.getElementById('new-msg').innerText = "";
  // TODO: Debug - Clear All > Clear adds back message board 
  // -- might be b/c it is in form? refreshes everything?
}

function clearAll() {
  document.getElementById('msg-list').innerHTML = "";
}

function addToTable() {
  try {
    let text = document.getElementById('new-msg').value;
    if (text === "") return;
    let node = document.createElement('li');
    node.className = "msg";
    let textnode = document.createTextNode(text);
    node.appendChild(textnode);
    document.getElementById('msg-list').appendChild(node);
    console.log(document.getElementById('msg-list'));
    console.log(text);
  } catch (err) {
    console.log(err);
  }
}