$.ajax({
    url: "../page/word.json",
    type: "get",
    dataType: "json",
    async: false,
    success: function (data) {
        const main = $('#word>.box')
        main.html("")
        const i = 1
        for (const [key, value] of Object.entries(data)){
            main.append('<div>\n' +
                '                   <h2>'+value.title+'</h2>\n' +
                '                   <p>'+value.date+'</p>\n' +
                '                   <a href="'+value.link+'">前往文章</a>\n' +
                '                </div>\n')
        }
    },
    error: function () {
        console.error('ajax error!')
    }
})

