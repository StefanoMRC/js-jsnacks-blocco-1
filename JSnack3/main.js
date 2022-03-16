let somma=0

for(let i = 0; i < 10; i++){

    let numeroDaSommare = parseInt(prompt("inserisci numero"));
    somma+= numeroDaSommare
}
document.getElementById("cont").innerHTML=`${somma}`
