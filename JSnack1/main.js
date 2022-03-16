let num1 = parseInt (prompt("inserisci numero 1"))
let num2 = parseInt( prompt("inserisci numero 2"))

if(num1 > num2){
    document.getElementById("cont").innerHTML = `${num1}`
} else{
    document.getElementById("cont").innerHTML = `${num2}`
}