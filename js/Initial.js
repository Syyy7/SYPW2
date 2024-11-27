a = $.ajax({
    url: "../page/default.json",
    type: "get",
    dataType: "json",
    async: false,
    success: function (data) {
    },
    error:function () {
console.error('ajax error!')
    }
})

json = JSON.parse(a.responseText)

$("body")
    .css("background","url('"+json.background.url+"') no-repeat fixed")
    .css("background-size","cover")
$("title").text(json.title.text)
$("#icon").attr("href",json.icon.url)

jQuery.getScript(json.VFX.index.path)


