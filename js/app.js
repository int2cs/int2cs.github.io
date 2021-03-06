$(document).ready(function () {
  // ** forwards -> pour que le text reste à sa dernière position 
  // ** et ne revienne pas à sa position initial.
  $('h1').css('animation', 'slideDown 0.5s forwards ease-out');
  $('h2').eq(0).css('animation', 'slideRight 0.8s forwards ease-out');

  // TODO Penser à effacer le console.log 
  $(window).scroll(function () {
    console.log($(window).scrollTop());
  });

  // déclanchement des animations quand le scrollTop est à 400
  // #services
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 400) {
      $('.services_content_bloc_1').css('animation', 'fadeIn 5.5s forwards');
      $('.services_content_bloc_2').css('animation', 'fadeIn 5.5s forwards');
    };
  });

  // déclanchement des animations quand le scrollTop est à 1400
  // #competences
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 1400) {
      $('.comp_domaine').css('animation', 'fadeIn 5.5s forwards');
    };
  });

  // déclanchement des animations des progress bar Dev
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 1530) {
      let aLang = ['HTML', 85, 'PHP', 30, 'JS', 60, 'SQL', 30]
      let i = 0;

      while (i < (aLang.length - 1)) {
        $('.prog' + aLang[i]).css('width', + aLang[i + 1] + '%')
        i += 2;
      }
    };
  });
  // déclanchement des animations des progress bar Graphique
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 1780) {
      let aLang = ['PS', 35, 'ILL', 35, 'IND', 40, 'XD', 30]
      let i = 0;

      while (i < (aLang.length - 1)) {
        $('.prog' + aLang[i]).css('width', + aLang[i + 1] + '%')
        i += 2;
      }
    };
  });


  // déclanchement des animations quand le scrollTop est à 5000
  // #about
});
