function sendMessage() {
const input = document.getElementById('messageInput');
const box = document.getElementById('chatBox');


if (input.value.trim() !== '') {
const msg = document.createElement('p');
msg.textContent = 'Étudiant : ' + input.value;
box.appendChild(msg);
input.value = '';
box.scrollTop = box.scrollHeight;
}
}