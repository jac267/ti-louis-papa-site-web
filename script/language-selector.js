var language;
function getLanguage() {
  localStorage.getItem("language") == null ? setLanguage("en") : false;
  $.ajax({
    url: "/language/" + localStorage.getItem("language") + ".json",
    dataType: "json",
    async: false,
    dataType: "json",
    success: function (lang) {
      language = lang;
    },
  });
}
function setLanguage(lang) {
  console.log(document.body.innerHTML);
  localStorage.setItem("language", lang);
}
