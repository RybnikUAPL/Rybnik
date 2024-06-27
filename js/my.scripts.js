
// jQuery код
    $(document).ready(function() {
        // Single page nav
        $('.tm-main-nav').singlePageNav( {
            'currentClass' : "active",
            'offset' : 20,
            'speed': 500,
            'easing': 'swing'
        });
    });

    // Magnific pop up
    $('.tm-gallery-1').magnificPopup( {
        delegate: 'a',
        type: 'image',
        gallery: {enabled:true}
    });

    $('.tm-gallery-2').magnificPopup( {
        delegate: 'a',
        type: 'image',
        gallery: {enabled:true}
    });

    $('.tm-gallery-3').magnificPopup( {
        delegate: 'a',
        type: 'image',
        gallery: {enabled:true}
    });

    $('.tm-gallery-4').magnificPopup( {
        delegate: 'a',
        type: 'image',
        gallery: {enabled:true}
    });

    $('.tm-current-year').text(new Date().getFullYear());



