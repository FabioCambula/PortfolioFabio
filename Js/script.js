
const contactform = document.querySelector("#contact-form");
const submitbtn = document.querySelector("#submit-btn");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");

const publickey = "D410hXYf5KvpTbV7T";
const serviceID = "service_ogo5z6k";
const templateID = "template_8isn84h";
emailjs.init(publickey);

contactform.addEventListener("submit", e => {
     e.preventDefault();
submitbtn.innerText = "Un momento...";
const inputFields = {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value
}
emailjs.send(serviceID, templateID, inputFields)
 .then(() => {
    submitbtn.innerText = "messaggio inviato!";
    nameInput.value = "";
    emailInput.value = "";
    messageInput.value ="";
}, (error) => {
    console.log(error);
    submitbtn.innerText = "Qualcosa è andato storto";
});
});
