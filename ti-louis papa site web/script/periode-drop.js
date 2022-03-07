on = false;
btn_status = [false, false, false];
function dropDownMenuCLick() {
  var content = document.getElementById("dropdown-content1");
  content.style.display = "block";
}

function dropDownMenuHover() {
  var content = document.getElementById("dropdown-content1");
  content.style.display = "block";
  alert();
  on = true;
}

function dropDownMenuLeave() {
  var dict_horraire = {
    0: "7h-10h",
    1: "10h-14h",
    2: "14h-5h",
  };
  var content = document.getElementById("dropdown-content1");
  content.style.display = "none";
  var box = document.getElementById("periode");
  var compteur = 0;

  output = "";
  for (var i = 0; i < 3; ++i) {
    console.log(btn_status[compteur]);
    if (btn_status[compteur]) {
      output += "\xa0\xa0" + dict_horraire[compteur] + ",";
    }

    compteur += 1;
  }

  box.placeholder = "Disponibilité :" + output;
}

function gotChecked(nb) {
  btn_status[parseInt(nb)] = !btn_status[parseInt(nb)];

  if (btn_status[parseInt(nb)] == false) {
    var content = document.getElementById("btn-periode" + nb);
    content.style.backgroundColor = "rgba(255,0,0,0.2)";
  } else {
    var content = document.getElementById("btn-periode" + nb);
    content.style.backgroundColor = "rgba(0,120,0,0.7)";
  }
}
