// $("#title").val(json.title.text)
$("#title").attr("placeholder",json.title.text)

function forTiltle() {
    $('#title')
        .val(json.title.text)
        .removeAttr("readonly")
        .focus()
        // .css("animation-play-state","running")
    $("#submitTitle")
        .css("display","block")
        .css("animation-play-state","running")
}

function sumbitTitle() {
    $('#title').attr("redonly","true")
    $("#submitTitle").css("animation","break forwards 1.4s paused")
    var text = $('#title').val()
    json.title.text = text
    console.log(json.title.text)

    $.ajax({
        url: "../pMQB6g/changes.php",
        type: "POST",
        data: json,
        success: function (data) {
            console.log("post is ok")
            console.log(data)
        },
        error: function (data) {
            console.info('post is error')
        }
    })
}
