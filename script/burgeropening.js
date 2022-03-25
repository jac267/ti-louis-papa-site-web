function openCloseBurger() {
  var burger = document.getElementById("burger-menu");
  if (burger.style.display == "block") {
    burger.style.display = "none";
    document.getElementById("fa-xmark").style.display = "none";
    document.getElementById("fa-bars").style.display = "block";
  } else {
    document.getElementById("fa-bars").style.display = "none";
    document.getElementById("fa-xmark").style.display = "block";
    burger.style.display = "block";
  }
}
