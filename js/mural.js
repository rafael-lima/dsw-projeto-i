const msgList = document.querySelector(".messages");

const muralFormName = document.querySelector("#name");
const muralFormMsg = document.querySelector("#message");

const muralFormBtn = document.querySelector(".form button");

muralFormBtn.addEventListener("click", () => {
  if (muralFormName.value != "" && muralFormMsg.value != "") {
    msgList.classList.add("messages-on");
  
    const msgItem = document.createElement("li");
    const msgItemBtn = document.createElement("button");
  
    const msg = muralFormName.value + ": " + muralFormMsg.value;
  
    msgItem.textContent = msg;
    msgItemBtn.textContent = "Excluir";
    msgItemBtn.classList.add("theme");
  
    msgItemBtn.addEventListener("click", () => {
      msgList.removeChild(msgItem);
  
      if (msgList.childNodes.length == 0) {
        msgList.classList.remove("messages-on");
      }
    });
  
    msgItem.appendChild(msgItemBtn);
  
    msgList.appendChild(msgItem);
  }
});