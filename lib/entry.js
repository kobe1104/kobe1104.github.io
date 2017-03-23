const $ = require('jquery');

document.addEventListener('DOMContentLoaded', () => {

  $('.corgigram-img').click(() => {
    window.open('https://corgigram.herokuapp.com/');
  });

  $('.death-img').click(() => {
    window.open('http://henryhsu.life/Death-Star/');
  });

  $('.ductionary-img').click(() => {
    window.open('https://chrome.google.com/webstore/detail/ductionary/dkndfbdehdblfaldfkgjclcahpaoefci');
  });

  $('.link-email').click(() => {
    window.location.href='mailto:hhsu0219@gmail.com';
  });

  $('.link-github').click(() => {
    window.open('https://github.com/kobe1104/kobe1104.github.io');
  });

  $('.link-linkedin').click(() => {
    window.open('https://www.linkedin.com/in/henry-hsu-developer');
  });

  $('.nav-home').click(function() {
    $('html, body').animate({
      scrollTop: $('#greeting-page').offset().top
    }, 1000);
  });

  $('.nav-projects').click(function() {
    $('html, body').animate({
      scrollTop: $('#work-page').offset().top
    }, 1000);
  });

  $('.nav-about').click(function() {
    $('html, body').animate({
      scrollTop: $('#about-page').offset().top + 40
    }, 1000);
  });

  $('.nav-contact').click(function() {
    $('html, body').animate({
      scrollTop: $('#contact-page').offset().top
    }, 1000);
  });

});
