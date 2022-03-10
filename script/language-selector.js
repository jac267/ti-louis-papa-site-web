function setLanguage() {
  var lang = localStorage.getItem("language");

  $.getJSON("language/fren.json", function (json) {
    for (const [key, value] of Object.entries(json)) {
      if (lang == "fr") {
        document.body.innerHTML = document.body.innerHTML.replace(value, key);
      }
      if (lang == "en") {
        document.body.innerHTML = document.body.innerHTML.replace(key, value);
      }
    }
  });
}
function changeLanguage() {
  current_L = localStorage.getItem("language");
  console.log(current_L);

  if (current_L == "en") {
    localStorage.setItem("language", "fr");
    document.getElementById("LanguageButton").textContent = "EN";
  }
  if (current_L == "fr") {
    localStorage.setItem("language", "en");
    document.getElementById("LanguageButton").textContent = "FR";
  }

  console.log(document.body.innerHTML);
  setLanguage();
}
