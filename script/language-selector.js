function setLanguage() {
  var lang = localStorage.getItem("language");

  $.getJSON("language/fren.json", function (json) {
    for (const [key, value] of Object.entries(json)) {
      if (lang == "fr-FR") {
        document.body.innerHTML = document.body.innerHTML.replace(value, key);
      }
      if (lang == "en-EN") {
        document.body.innerHTML = document.body.innerHTML.replace(key, value);
      }
    }
  });
}
function changeLanguage() {
  current_L = localStorage.getItem("language");
  console.log(current_L);

  if (current_L == "en-EN") {
    localStorage.setItem("language", "fr-FR");
    document.getElementById("LanguageButton").textContent = "EN";
  }
  if (current_L == "fr-FR") {
    localStorage.setItem("language", "en-EN");
    document.getElementById("LanguageButton").textContent = "FR";
  }

  console.log(document.body.innerHTML);
  setLanguage();
}
