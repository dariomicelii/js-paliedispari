
//Palidroma
//Chiedere all’utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma

userWord = prompt("Inserisci una parola per capire se è palindroma o no ;)")

function reverseWord(userWord){
    return userWord.split('').reverse().join('');
}

function palindroma(userWord) {
    console.log(userWord === reverseWord(userWord) ? "La parola è palindroma" : "La parola non è palindroma")
}

palindroma(userWord)



//Pari e Dispari
//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//Sommiamo i due numeri
//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
//Dichiariamo chi ha vinto.

userPariDispari = prompt("Pari o dispari?")
userNumchoice = (prompt("Digita un numero da 1 a 5:"))
console.log("Hai scelto:" + userPariDispari)
console.log("Hai scelto il numero: " + userNumchoice)


function pcChoice(min, max) {
    choice = (Math.random() * (max - min) + min)
    console.log("Il computer ha generato il numero: " + choice.toFixed())
    return choice.toFixed()
}
pcNumChoice = pcChoice(1, 5);


function isUserWinner(userNumchoice, pcNumChoice, userPariDispari) {
    const sum = parseInt(userNumchoice) + parseInt(pcNumChoice)
    console.log(sum)
    if (sum % 2 === 0 && userPariDispari === "pari") {
        console.log("Hai vinto!")
    }else{
        console.log("Hai perso!")
    }
}
isUserWinner(userNumchoice, pcNumChoice, userPariDispari)


//Consigli del giorno
//1. Scriviamo sempre in italiano i passaggi che vogliamo fare
//2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.

//Domande da  farsi quando si crea una funzione:
//1. Come dovrebbe chiamarsi?
//2. Ho bisogno di parametri?
//3. Devo restituire un valore?
//4. Se sì, di che tipo?
