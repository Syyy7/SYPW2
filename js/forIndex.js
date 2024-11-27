const top_in = function (object) {
    var time = 0
    object.css('display','flex')
    object.children().each(function () {
        $(this)
            .css("animation-delay",String(time)+"ms")
            .css("animation-play-state", "running")
        time+=600
    })
}

const top_out = function (object) {
    var time = 0
    object.children().each(function () {
        $(this)
            .css('animation-name','top-out')
            .css("animation-delay",String(time)+"ms")
            .css("animation-play-state", "running")
        time+=600
    })
}
const switchMain = function (toMian,the) {
    // top_out($('#content>.item'))
    $('#content>.item').css('display','none')
    top_in($(String(toMian)))
    $('#content>header>button').css('color','rgba(34, 51, 68, 0.4)')
    $(the).css('color','rgba(34, 51, 68, 1)')
}


top_in($("#home"))
