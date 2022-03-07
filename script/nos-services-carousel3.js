var carousel3_index = 0;

function clickCarousel3(direction) {
  btn_left = document.getElementById(`carousel3-btn-left`);
  btn_right = document.getElementById(`carousel3-btn-right`);

  var max_index = parseInt(
    document.getElementById("terrasse-carousel").dataset.descr.split(":")[1]
  );
  const current_img = document.getElementById(`carousel3-${carousel3_index}`);
  const last_index = carousel3_index;

  current_img.style.display = "none";
  if (direction == "left") {
    carousel3_index = carousel3_index - 1;
  } else if (direction == "right") {
    carousel3_index = carousel3_index + 1;
  }

  if (carousel3_index < 0) {
    carousel3_index = max_index - 1;
  } else if (carousel3_index >= max_index) {
    carousel3_index = 0;
  }

  const new_img = document.getElementById(`carousel3-${carousel3_index}`);

  new_img.style.display = "block";
}
