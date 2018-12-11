$(document).ready(() => {

    var currentEvent = 0;

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

    /**
     * Events list
     */

    $('[data-event-target]').hover((e) => {
        let i = $(e.currentTarget).data('eventTarget');

        currentEvent = $('.selected[data-event]').data('event');

        if(currentEvent !== i){
            $(`[data-event=${currentEvent}]`).removeClass('selected');
            $(`[data-event=${i}]`).addClass('selected');
        }
    }, (e) => {
        let i = $(e.currentTarget).data('eventTarget');

        if(i !== currentEvent){
            $(`[data-event=${currentEvent}]`).addClass('selected');
            $(`[data-event=${i}]`).removeClass('selected');
        }
    })

    $('[data-event-target]').click((e) => {
        e.preventDefault();

        let i = $(e.currentTarget).data('eventTarget');

        $('[data-event-target]').removeClass('selected');
        $(e.currentTarget).addClass('selected');

        $('[data-event]').removeClass('selected');
        $(`[data-event=${i}]`).addClass('selected');

        currentEvent = i;
    })
})