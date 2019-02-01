// resenje sa multiline strings
// preko template strings sintakse
// string moze da ima vise redova i varijable

const okvir = document.getElementById('okvir')

let sablon = ``

for (let i = 0; i < studenti.length; i++) {
    sablon += `
    <div class="student">
        <h2>${studenti[i].ime}</h2>
        <p>Smer: ${studenti[i].smer}</p>
        <b>${studenti[i].fakultet}</b>
    </div>
    `
}

okvir.innerHTML = sablon