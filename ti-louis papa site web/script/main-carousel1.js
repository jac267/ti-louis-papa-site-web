var carousel1_index = 0;

function clickCarousel1(direction) {
  btn_left = document.getElementById(`carousel1-btn-left`);
  btn_right = document.getElementById(`carousel1-btn-right`);

  var max_index = parseInt(
    document
      .getElementById("residentielle-carousel")
      .dataset.descr.split(":")[1]
  );
  const current_img = document.getElementById(`carousel1-${carousel1_index}`);
  const last_index = carousel1_index;

  current_img.style.display = "none";
  if (direction == "left") {
    carousel1_index = carousel1_index - 1;
  } else if (direction == "right") {
    carousel1_index = carousel1_index + 1;
  }

  if (carousel1_index < 0) {
    carousel1_index = max_index - 1;
  } else if (carousel1_index >= max_index) {
    carousel1_index = 0;
  }
  const new_img = document.getElementById(`carousel1-${carousel1_index}`);

  new_img.style.display = "block";
}
