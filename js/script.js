if (screen.width > 480) {
    $(document).ready(function () {
        $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            dots: true,
            navText: [],
            responsive: {
                0: {
                    items: 1,
                    dots: true,
                    nav: true
                },
            }
        });
    });
}


    $(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() != 0) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });
    $('#toTop').click(function() {
    $('body,html').animate({scrollTop:0},800);
});
});


     $(document).ready(function() {
  $('#hello').dialog({
      modal: true,
      resizable: false,
      draggable: false,
      show: 'slideDown',
      hide: 'slideUp',
      width: 700,
      heigh: 500
  });
});   


