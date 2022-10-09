const message_screen = document.querySelector(".message-screen");

const chat = document.querySelector(".input-screen__content input");
const chat_button = document.querySelector(".input-screen__content button");
const chat_form = document.querySelector("form");

const MESSAGE_KEY = "mokoko_message";
let message_list = [];

function saveMessage() {
  localStorage.setItem(MESSAGE_KEY, JSON.stringify(message_list));
}

function messageSend(message) {
  const message_info_content = document.createElement("div");
  message_info_content.className = "message-info__content";
  const message_info = document.createElement("div");
  message_info.className = "message-info";
  const message_screen_user = document.createElement("div");
  message_screen_user.className = "message-screen__user";

  const message_info_content_bubble = document.createElement("div");
  message_info_content_bubble.className = "message-info__content-bubble";

  message_info_content_bubble.innerHTML = message.text;

  const message_info_content_time = document.createElement("span");
  message_info_content_time.className = "message-info__content-time";
  message_info_content_time.innerHTML = message.time;

  message_info_content.appendChild(message_info_content_bubble);
  message_info_content.appendChild(message_info_content_time);

  message_info.appendChild(message_info_content);
  message_screen_user.appendChild(message_info);

  message_screen.appendChild(message_screen_user);

  window.scrollTo(0, document.body.scrollHeight);
}

function send(event) {
  event.preventDefault();

  const date = new Date();
  const hh = String(date.getHours()).padStart(2, 0);
  const mm = String(date.getMinutes()).padStart(2, 0);

  const newMessage = {
    text: chat.value,
    id: Date.now(),
    time: `${hh}:${mm}`,
  };

  chat.value = "";
  message_list.push(newMessage);
  messageSend(newMessage);
  saveMessage();
}

const saveMessageList = localStorage.getItem(MESSAGE_KEY);

if (saveMessageList != null) {
  message_list = JSON.parse(saveMessageList);
  setTimeout(() => {
    message_list.forEach(messageSend);
  }, 1);
}

chat_form.addEventListener("submit", send);
chat_button.addEventListener("click", send);
