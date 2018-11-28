$(document).ready(() => {
    // slider
    $('.bxslider').bxSlider({
        auto: false,
        controls: true
    });

    $('.nav-link').click((e) => {
        let section = $(e.target).data('section');

        if(!section){
            throw Error('Section not found');
        }

        $('html, body').animate({
            scrollTop: $(`.${section}`).offset().top 
        }, 1000);
    })
})