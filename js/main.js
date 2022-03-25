$(document).ready(function (){
  var openMenu = document.getElementById("open-menu");
  var closeMenu = document.getElementById("close-menu");

  openMenu.onclick = function(){
    $('.nav-menu').removeClass('hidden');
    console.log('abrir');
  }

  closeMenu.onclick = function(){
    $('.nav-menu').addClass('hidden');
    console.log('fechar');
  }
});