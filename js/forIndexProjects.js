a = $.ajax({
    url: "../page/projects.json",
    type: "get",
    dataType: "json",
    async: false,
    success: function (data) {
    },
    error: function () {
        console.error('ajax error!')
    }
})
projects = JSON.parse(a.responseText)

const main = $('#project>.box')
for (const [key, value] of Object.entries(projects)) {
    main.append('<div>\n' +
        '                            <div class="left">\n' +
        '                                <h2 class="title">'+value.title+'</h2>\n' +
        '                                <p class="ps">'+value.ps+'</p>\n' +
                                        '<p class="date">'+ value.date+'</p>\n'+
        '                            </div>\n' +
        '                            <a href="'+value.link+'" class="link"  target="_blank">前往项目</a>\n' +
        '                        </div>')
}