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

    switch (toMian) {
        case '#project':
            jQuery.getScript("js/forIndexProjects.js")
    }
}
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const printStr =async function (event) {
    var str1="<>\@#$%^&*"
    var mainStr = $(event).text()
    $(event).text('').css('border-right','2px solid #234')
    let str2 = '';
    for (i = 0; i <= mainStr.length; i++,await wait(150)) {
        // for (j=0;j<3;j++){
        //     $(event).append(str1[getRandomInt(0,str1.length-1)])
        //     str2=$(event).text()
        //     await wait(50)
        //     $(event).text(str2.slice(0,-1))
        //     // console.log(str1[getRandomInt(0,str1.length-1)])
        // }
        $(event).append(mainStr.slice(i, i + 1))
        // console.log(mainStr.slice(i, i + 1))
    }

}
async function printText() {
    $("#home>.text").children().each(async function () {
        printStr(this)

    })
}
printText()
top_in($("#home"))
