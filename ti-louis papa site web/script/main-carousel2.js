var carousel2_index = 0;

function clickCarousel2(direction) {
  btn_left = document.getElementById(`carousel2-btn-left`);
  btn_right = document.getElementById(`carousel2-btn-right`);

  var max_index = parseInt(
    document.getElementById("commercial-carousel").dataset.descr.split(":")[1]
  );
  const current_img = document.getElementById(`carousel2-${carousel2_index}`);
  const last_index = carousel2_index;

  current_img.style.display = "none";
  if (direction == "left") {
    carousel2_index = carousel2_index - 1;
  } else if (direction == "right") {
    carousel2_index = carousel2_index + 1;
  }

  if (carousel2_index < 0) {
    carousel2_index = max_index - 1;
  } else if (carousel2_index >= max_index) {
    carousel2_index = 0;
  }

  const new_img = document.getElementById(`carousel2-${carousel2_index}`);

  new_img.style.display = "block";
}
