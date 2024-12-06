$.ajax({
    url: "../page/projects.json",
    type: "get",
    dataType: "json",
    async: false,
    success: function (data) {
        const main = $('#project>.box')
        main.html("")
        for (const [key, value] of Object.entries(data)) {
            main.append('<div>\n' +
                '                            <div class="left">\n' +
                '                                <h2 class="title">'+value.title+'</h2>\n' +
                '                                <p class="ps">'+value.ps+'</p>\n' +
                '<p class="date">'+ value.date+'</p>\n'+
                '                            </div>\n' +
                '                            <a href="'+value.link+'" class="link"  target="_blank">前往项目</a>\n' +
                '                        </div>')
        }
    },
    error: function () {
        console.error('ajax error!')
    }
})

