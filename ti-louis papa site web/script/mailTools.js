"use strict";

function send() {
  var dict_content = {
    prenom: document.getElementById("fname").value,
    nom: document.getElementById("lname").value,
    couriel: document.getElementById("couriel").value,
    telephone: document.getElementById("phone").value,
    ville: document.getElementById("ville").value,
    disponibilite: document.getElementById("periode").placeholder.split(":")[1],
    message: document.getElementById("message").value,
    piecejointe: document.getElementById("file-input").files,
  };

  alert(dict_content["disponibilite"]);
  var email_content = miseEnPage(dict_content);

  var form = document.getElementById("form-main");

  var messageFiles = document.getElementById("message-files");

  setContent(email_content[0]);
  setSubject(email_content[1]);
  appendAnFileSlot("piece-jointe", dict_content["piecejointe"]);

  form.submit();
}

function miseEnPage(dict_content) {
  // espace = \xa0, new line = \n
  var output = "";
  var head = `${dict_content["nom"]}, ${dict_content["prenom"]} / ${dict_content["ville"]}`;

  output += "\n";
  output += "\n";
  output += "\n";

  output += getTheMessageOnMultipleLigne(dict_content["message"]);

  output += `\n\nvous pouvez me rejoindre: ${dict_content["telephone"]} / ${dict_content["couriel"]}\n\n`;
  output += disponibilitéFormat(dict_content["disponibilite"]);
  output += pieceJointeFormat(dict_content["piecejointe"]);

  return [output, head];
}

function pieceJointeFormat(piecejointe) {
  if (piecejointe) {
    if (piecejointe.length != 0) {
      return `p.j. x ( ${piecejointe.length} )`;
    }
  }

  return "";
}
function disponibilitéFormat(disponibilité) {
  if (disponibilité.length != 0) {
    return `je prefererait que vous me contatererez: ${disponibilité}\n `;
  }
  return "je ne possede pas de préférence en ce qui concerne le moment ou vous pouvez me rejoindre\n";
}

function getTheMessageOnMultipleLigne(message) {
  var ligneMessage = "\n\n";
  var compteur = 0;

  for (var i = 0; i < message.length; ++i) {
    ligneMessage += message[i];
    if (compteur > 80 && message[i] == " ") {
      compteur = 0;
      ligneMessage += "\n";
    }
    compteur += 1;
  }

  return ligneMessage;
}

function setContent(messageContent) {
  var formContent = document.getElementById("form-content");

  formContent.value = messageContent;
}

function setSubject(subjectContent) {
  var subject = document.getElementById("form-subject");
  subject.value = subjectContent;
}

function appendAnFileSlot(name, content) {
  //<input type="file" name="Piece jointe( name )" style="display: none"/>
  var liParent = document.getElementById("form-files");
  var fileSlot = document.createElement("input");
  var emptySlot = document.getElementById("empty");

  fileSlot.type = "file";
  fileSlot.name = `Piece jointe ${name}`;
  fileSlot.style.display = "none";

  fileSlot.files = content;
  console.log(fileSlot.files);
  alert(fileSlot.files);
  liParent.insertBefore(fileSlot, emptySlot);
}
