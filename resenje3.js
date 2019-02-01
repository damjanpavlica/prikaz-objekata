// preporucen nacin, preko kreiranja dom elemenata
// mogu da se dodaju dogadjaji, ali najvise se pise

const okvir = document.getElementById('okvir')

for (let i = 0; i < studenti.length; i++) {
    const div = document.createElement('div')
    div.classList += 'student' // dodaje klasu

    const naslov = document.createElement('h2')
    naslov.innerText = studenti[i].ime
    div.appendChild(naslov)

    // napraviti pasus
    // napraviti jos jedan element
    okvir.appendChild(div)
}
