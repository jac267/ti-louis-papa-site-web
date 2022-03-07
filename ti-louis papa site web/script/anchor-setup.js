function Load() {
  webPath = getWebPAth();
  console.log(webPath);
  $.getJSON("links.json", function (json) {
    for (const [key, value] of Object.entries(json)) {
      if (value[0] == "/") {
        console.log(document.getElementById(key));
        document.getElementById(key).href = webPath + value;
      } else {
        console.log(document.getElementById(key));
        document.getElementById(key).href = value;
      }
    }
  });
}

function getWebPAth() {
  var webPath = window.location.href.split("/");
  output = "";
  for (var i = 0; i < webPath.length - 1; ++i) {
    if (i < webPath.length - 2) {
      output += webPath[i] + "/";
    } else {
      output += webPath[i];
    }
  }
  return output;
}
