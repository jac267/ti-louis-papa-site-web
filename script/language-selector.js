function setLanguage() {
  var lang = localStorage.getItem("language");

  $.getJSON("language/fren.json", function (json) {
    for (const [key, value] of Object.entries(json)) {
      if (lang == "fr-FR" || lang == "fr" || lang.includes("fr")) {
        if (key != value) {
          while (document.body.innerHTML.search(value) != -1) {
            document.body.innerHTML = document.body.innerHTML.replace(
              value,
              key
            );
          }
        }
      }
      if (lang == "en-EN" || lang == "en" || lang.includes("en")) {
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

function setButtonLanguages(text) {
  alert("setButtonLanguages(text)");
  button_list = document.getElementsByClassName("language-ul-text");
  alert("button_list = document.getElementsByClassName");
  for (var btn of button_list) {
    btn.innerHTML = text;
    alert("for (var btn of button_list)");
  }
  setLanguage();
}
function changeLanguage() {
  current_L = localStorage.getItem("language");
  console.log(current_L);

  if (current_L == "en-EN" || current_L == "en" || current_L.includes("en")) {
    localStorage.setItem("language", "fr-FR");
    setButtonLanguages("EN");
  }
  if (current_L == "fr-FR" || current_L == "fr" || current_L.includes("fr")) {
    localStorage.setItem("language", "en-EN");

    setButtonLanguages("FR");
  }
}
