(function(window) {
  "use strict";

  var btn = {}, tm = {};
  btn.ls = document.getElementById('btn-ls');
  btn.ss = document.getElementById('btn-ss');
  tm.ls = document.getElementById('tm-ls');
  tm.ss = document.getElementById('tm-ss');

  btn.handlers = {};
  btn.handlers.ls = function() {
    localStorage.cntclk = parseInt(localStorage.cntclk, 10) + 1;
    sync();
  }
  btn.handlers.ss = function() {
    sessionStorage.cntclk = parseInt(sessionStorage.cntclk, 10) + 1;
    sync();
  }

  btn.ls.addEventListener('click', btn.handlers.ls, false);
  btn.ss.addEventListener('click', btn.handlers.ss, false);

  function sync() {
    tm.ls.innerHTML = "You've clicked the button " + localStorage.cntclk + " times";
    tm.ss.innerHTML = "You've clicked the button " + sessionStorage.cntclk + " times";
  }

  if (typeof sessionStorage.cntclk === 'undefined') { sessionStorage.cntclk = 0; }
  if (typeof localStorage.cntclk === 'undefined') { localStorage.cntclk = 0; }
  sync();
})(window);