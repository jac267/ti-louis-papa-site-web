function setLanguage() {
  var lang = localStorage.getItem("language");

  $.getJSON("language/fren.json", function (json) {
    for (const [key, value] of Object.entries(json)) {
      if (lang == "fr-FR" || lang == "fr") {
        if (key != value ) {
          while (document.body.innerHTML.search(value) != -1) {
            document.body.innerHTML = document.body.innerHTML.replace(
              value,
              key
            );
          }
        }
      }
      if (lang == "en-EN" || lang == "en") {
        if (key != value) {
          while (document.body.innerHTML.search(key) != -1) {
            document.body.innerHTML = document.body.innerHTML.replace(
              key,
              value
            );
          }
        }
      }
    }
  });
}

function setButtonLanguages(text){
    button_list = document.getElementByClassName("language-ul-text");
    for (var btn of button_list){
      btn.textContent =  text;
    }
  
}
function changeLanguage() {
  current_L = localStorage.getItem("language");
  console.log(current_L);

  if (current_L == "en-EN" || current_L == "en") {
    localStorage.setItem("language", "fr-FR");
    document.getElementById("LanguageButton").textContent = "EN";
  }
  if (current_L == "fr-FR" || current_L == "fr") {
    localStorage.setItem("language", "en-EN");
    document.getElementById("LanguageButton").textContent = "FR";
  }

  console.log(document.body.innerHTML);
  setLanguage();
}
