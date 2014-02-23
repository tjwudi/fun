$(document).ready(function() {
  $('#hmenu').on('click', function() {
    var $headerNav = $('header nav');
    if ($headerNav.hasClass('visible-mob')) {
      // 菜单已经展开
      $headerNav.removeClass('visible-mob');
      $headerNav.addClass('tp');
    }
    else {
      // 菜单尚未展开
      $headerNav.addClass('visible-mob');
      $headerNav.removeClass('tp');
    }
  });
});