(function(window) {
  "use strict";

  var $cardCurTop,
      $cardCurBtm,
      $cardNextTop,
      $cardNextBtm;


  function flipUp() {
    $cardCurBtm.addClass('btm2m');
  }

  function flipDown() {

  }

  function rebind() {
    $cardCurTop = $('.card.top.current');
    $cardCurBtm = $('.card.bottom.current');
    $cardNextTop = $('.card.top.next');
    $cardNextBtm = $('.card.bottom.next');
  }

  function init() {
    rebind();
    /*DEBUG*/
    $('#fl-up').bind('click', flipUp);
    $('#fl-dn').bind('click', flipDown);
  };

  init();
})(window);