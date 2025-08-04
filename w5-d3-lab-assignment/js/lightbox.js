
//For w5-d3-assignment, add lightbox
$(document).ready(function(){
    $('.image-card img').click(function(){
        // Show backdrop
        $('.backdrop').animate({'opacity':'.50'}, 300, 'linear').css('display', 'block');
        $('.box').fadeIn();

        // Remove previous image
        $('.box img').remove();

        // Clone clicked image and add to lightbox
        var img = $(this).clone();
        $('.box').append(img);
    });

    // Close lightbox when clicking close button or backdrop
    $('.close, .backdrop').click(function(){
        $('.backdrop').animate({'opacity':'0'}, 300, 'linear', function(){
            $('.backdrop').css('display', 'none');
        });
        $('.box').fadeOut(function(){
            $('.box img').remove();
        });
    });
});
