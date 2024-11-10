function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function showDemoMessage(){
  alert("Live demo is coming soon");
}
function showProjectMessage(){
  alert("The project is coming soon");

}