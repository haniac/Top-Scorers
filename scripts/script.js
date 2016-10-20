var score,
    j = 10;
$(document).ready(function doIt() {
        var output = $.ajax({
            url: 'https://sportsop-soccer-sports-open-data-v1.p.mashape.com/v1/leagues/serie-a/seasons/15-16/topscorers',
            type: 'GET',
            data: {},
            dataType: 'json',
            success: function (data) {

                score = data.data.topscorers.slice(0, j);

                var content = "<table>";
                content += '<tr><td>' + 'POZYCJA' + '</td><td>' + 'ZAWODNIK' + '</td><td>' + 'GOLE' + '</td></tr>';

                for (i = 0; i < j; i++) {
                    content += '<tr><td>' + (i + 1) + '</td><td>' + score[i].fullname + '</td><td>' + score[i].goals + '</td></tr>';
                }
                content += "</table>";

                $('#here_table').append(content);

            },
            error: function (err) {
                alert(err);
            },
            beforeSend: function (xhr) {
                xhr.setRequestHeader("X-Mashape-Authorization", "kxSXmUymofmshFHhhKxWOSJpqJsJp1I3zNnjsnqKwhITAiC1zw");
            }
        });

    }
);
