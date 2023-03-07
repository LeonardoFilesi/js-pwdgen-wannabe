// INPUT
/* Chiedere all'utente il suo nome */

const userName = prompt("Ciao Utente, qual è il tuo nome?")
console.log(userName, typeof userName);

/* Chiedere all'utente il suo cognome */

const userSurname = prompt("Ciao Utente, qual è il tuo cognome?")
console.log(userSurname, typeof userSurname);

/* Chiedere all'utente il suo colore preferito */

const userFavColor = prompt("Ciao Utente, qual è il tuo colore preferito?")
console.log(userFavColor, typeof userFavColor);

//Unire le risposte

const result = userName + " " + userSurname + " " + userFavColor
console.log("Tutte Le Risposte", result);

//OUTPUT
//Stampare sulla pagina le risposte unite

document.getElementById("user-result").innerHTML 
= 'Informazioni Utente: ${result}';