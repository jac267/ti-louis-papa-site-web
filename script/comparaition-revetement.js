mouse_isDown = false;

function mouseDown() {
  mouse_isDown = true;
}
function mouseUp() {
  mouse_isDown = false;
}

function update(event, touche) {
  if (mouse_isDown == true) {
    new_posXPourcent = moveTheComparaitionBar(event, touche);
    hideOrShowMoreOfTheImages("revetement-exterieur-before", new_posXPourcent);
  }
}
function moveTheComparaitionBar(event, istouche) {
  if (istouche) {
    cursar_posX = event.touches[0].clientX;
    cursar_posY = event.touches[0].clientY;
  } else {
    cursar_posX = event.pageX;
    cursar_posY = event.pageY;
  }

  box = document.getElementById("images-comparaition-container");
  box_posX = box.getBoundingClientRect().left;
  boxWidth = box.offsetWidth;

  bar = document.getElementById("revetement-bar");

  new_posX = cursar_posX - box_posX;
  if (new_posX > boxWidth) {
    new_posX = boxWidth;
  } else if (new_posX < 0) {
    new_posX = 0;
  }
  console.log(boxWidth);

  new_posXPourcent = (new_posX / (boxWidth + bar.clientWidth)) * 100;
  bar.style.left = `${new_posXPourcent}%`;

  return (new_posX / boxWidth) * 100;
}

function hideOrShowMoreOfTheImages(id, pos) {
  images = document.getElementById(id);

  images.style.width = `${pos}%`;
}
