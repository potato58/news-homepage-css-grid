
const burger = document.getElementById("burger");
const menu = document.querySelector(".menu");
const overlay = document.querySelector(".overlay");

const closeMenu = () => {
  menu.style.right = "-300px";
  menu.style.display = "none";
  burger.setAttribute("src", "assets/images/icon-menu.svg");
  overlay.style.visibility = "hidden";
}

const openMenu = () => {
  menu.style.right = "0px";
  menu.style.display = "unset";
  burger.setAttribute("src", "assets/images/icon-menu-close.svg");
  overlay.style.visibility = "visible";
}

let toggle = false;

burger.addEventListener("click", () => {
  if (toggle) {
    closeMenu();
  } else {
    openMenu();
  };
  toggle = !toggle;
});

document.addEventListener("scroll", () => {
  if (toggle) {
    closeMenu();
  }
});