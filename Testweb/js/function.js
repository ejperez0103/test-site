$(document).ready(() => {
    $(window).scroll(() => {
        let scroll = $(window).scrollTop()

        if (scroll >= 300) {
            $('.navbar').css({
                'background': '#333'
            })
        } else {
            $('.navbar').css({
                'background': 'transparent'
            })
        }
    })
})