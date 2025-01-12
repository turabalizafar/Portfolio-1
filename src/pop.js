function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', function() {
  const menuBars = document.querySelector('.fas.fa-bars');
  const sidebar = document.querySelector('.sidebar');

  menuBars.addEventListener('click', function() {
      sidebar.classList.toggle('open');
  });
});