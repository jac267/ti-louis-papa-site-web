var carousel4_index = 0;

function clickCarousel4(direction) {
  btn_left = document.getElementById(`carousel4-btn-left`);
  btn_right = document.getElementById(`carousel4-btn-right`);

  var max_index = parseInt(
    document.getElementById("renovation-carousel").dataset.descr.split(":")[1]
  );
  const current_img = document.getElementById(`carousel4-${carousel4_index}`);
  const last_index = carousel4_index;

  current_img.style.display = "none";
  if (direction == "left") {
    carousel4_index = carousel4_index - 1;
  } else if (direction == "right") {
    carousel4_index = carousel4_index + 1;
  }

  if (carousel4_index < 0) {
    carousel4_index = max_index - 1;
  } else if (carousel4_index >= max_index) {
    carousel4_index = 0;
  }

  const new_img = document.getElementById(`carousel4-${carousel4_index}`);

  new_img.style.display = "block";
}
