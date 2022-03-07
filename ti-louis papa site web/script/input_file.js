//
//
//
//
//

function fileInputTextUpdate() {
  default_text = "Ajouter une ou des piece(s) jointe(s)";

  var fileInput = document.getElementById("file-input");
  var fileInputText = document.getElementById("file-input-text");

  output = "";
  compteur = 0;
  for (var i = 0; i < fileInput.files.length; ++i) {
    var name = fileInput.files.item(i).name;
    output += name + ",\xa0 \xa0 \xa0";
    compteur += 1;
  }

  if (compteur == 1)
    output = " ( " + compteur + " ) fichier :\xa0\xa0" + output;
  else if (compteur > 1) {
    output = " ( " + compteur + " ) fichiers :\xa0\xa0" + output;

    var max_length = 100;
    if (output.length >= max_length) {
      output = String(output.slice(0, max_length)) + " \xa0(...)";
    }
  } else output = default_text;

  fileInputText.textContent = output;
}
