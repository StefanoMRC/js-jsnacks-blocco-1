let testo1 = prompt("inserisci testo1")
let testo2 = prompt("inserisci testo 2")
lunghezza1 = testo1.length
lunghezza2 = testo2.length

if(lunghezza1 > lunghezza2){
    document.getElementById("cont").innerHTML=`<h1>${testo2} ${testo1}</h1>`
} else{
    document.getElementById("cont").innerHTML=`<h1>${testo1} ${testo2}</h1>`
}
