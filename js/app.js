$(() => {
  console.log('JS loaded');

//section scroll function

  $('a').on('click', scrollToSection);

  function scrollToSection() {
    const section = $(this).attr('href');
    $('body', 'html').animate({
      scrollTop: $(section).offset().top
    }, 1300);
  }



});
