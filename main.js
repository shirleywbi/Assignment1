 let msgs = '[{"text":"We\'re no strangers to love. '
+ 'You know the rules and so do I. '
+ 'A full commitment\'s what I\'m thinking of. '
+ 'You wouldn\'t get this from any other guy."},'
+ '{"text":"I just wanna tell you how I\'m feeling... '
+ 'Gotta make you understand..."},'
+ '{"text":"Never gonna give you up. '
+ 'Never gonna let you down. '
+ 'Never gonna run around and desert you. '
+ 'Never gonna make you cry. '
+ 'Never gonna say goodbye."},'
+ '{"text":"Never gonna tell a lie and hurt you."}]';

function loadMessages() {
  msgs = JSON.parse(msgs);
  console.log(msgs); 
  for (let i in msgs) {
    console.log(msgs[i].text);
    addMessage(msgs[i].text);
  }
};

function clearTextArea() {
  document.getElementById('new-msg').value = "";
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
  addDeleteButton(node);
}

function addDeleteButton(node) {
  let button = document.createElement('button');
  button.textContent = "x";
  button.className = "msg-delete-btn";
  button.addEventListener('click', deleteMessage);
  node.appendChild(button);
}

function deleteMessage() {
  let node = this.parentNode;
  node.remove();
}