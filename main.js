let msgs = '[{"text":"Never gonna give you up"},'
            + '{"text":"Never gonna let you down"},'
            + '{"text":"Never gonna run around and desert you"},'
            + '{"text":"Never gonna make you cry"}]';

function loadMessages() {
  msgs = JSON.parse(msgs);
  console.log(msgs); 
  for (let i in msgs) {
    console.log(msgs[i].text);
    addMessage(msgs[i].text);
  }
};

// window.onload = loadMessages;

function clearTextArea() {
  document.getElementById('new-msg').value = "";
  // TODO: Debug - Clear All > Clear adds back message board 
  // -- might be b/c it is in form? refreshes everything?
}

function clearAll() {
  document.getElementById('msg-list').innerHTML = "";
}

function addNewMessage() {
  try {
    let text = document.getElementById('new-msg').value;
    if (text === "") return;
    addMessage(text);
    clearTextArea();
  } catch (err) {
    console.log(err);
  }
}

function addMessage(msg) {
  let node = document.createElement('li');
  node.className = "msg";
  let textnode = document.createTextNode(msg);
  node.appendChild(textnode);
  document.getElementById('msg-list').appendChild(node);
}