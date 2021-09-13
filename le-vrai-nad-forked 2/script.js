// Define variable
const message =
  "Merci d'avoir envoyer votre message à Logan by N.A.D. Nous tâcherons de vous répondre le plus rapidement possible.";

document
  .getElementById("contactform")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert(message);
  });
