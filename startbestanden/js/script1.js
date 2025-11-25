const formElement = document.querySelector("#contactform");

const nameElement = document.querySelector("input#name");
const emailElement = document.querySelector("input#email");
const messageElement = document.querySelector("#message");

function onSubmit(event) {
  event.preventDefault(); /*houd standaardwerking tegen dus het refreshen na submit*/
  let nameValue = nameElement.value;
  let emailValue = emailElement.value;
  let messageValue = messageElement.value;

  if (nameValue === "") {
    let p = document.createElement("p");
    p.textContent = "Je naam is niet ingevuld";
    
    formElement.append(p);
  }

  if (emailValue === "") {
    let p = document.createElement("p");
    p.textContent = "Je email is niet ingevuld";

    formElement.append(p);
  }

  if (messageValue === "") {
    let p = document.createElement("p");
    p.textContent = "Je bericht is niet ingevuld";

    formElement.append(p);
  }


  if(nameValue !== "" && emailValue !== "" && messageValue !== ""){
    let p = document.createElement("p");
    p.textContent = "Succes!";

    formElement.append(p);
  }
}
formElement.addEventListener("submit", onSubmit);
