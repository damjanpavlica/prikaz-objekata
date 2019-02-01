// klasicno resenje

const okvir = document.getElementById('okvir')

let sablon = ''

for (let i = 0; i < studenti.length; i++) {
    sablon += '<div class="student">'
    sablon += '<h2>' + studenti[i].ime + '</h2>'
    sablon += '<p>Smer: ' + studenti[i].smer + '</p>'
    sablon += '<b>' + studenti[i].fakultet + '</b>'
    sablon += '</div>'
}

okvir.innerHTML = sablon