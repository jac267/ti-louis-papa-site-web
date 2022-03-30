function importTemplate() {
  $.get("template/nav-bar.html", function (data) {
    $("#nav-placeholder").replaceWith(data);
  });
  $.get("template/formulaire.html", function (data) {
    $("#formulaire-placeholder").replaceWith(data);
  });
  $.get("template/footer-bar.html", function (data) {
    $("#footer-bar-placeholder").replaceWith(data);
  });
}
