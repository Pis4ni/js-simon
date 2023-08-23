// ! RECUPERO GLI ELEMENTI DI IN TERESSE DAL DOM

const days = document.getElementById('days')
const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')

//! SETTO LA DATA DALLA QUALE VOGLIO IL CONTO ALLA ROVESCIA 
var countDownDate = new Date("Aug 24, 2023 09:30:00").getTime();

//! CREO UN ELEMENTO CHE CONTIENE LA FUNZIONE TEMPORALE AVVIATA OGNI SECONDO
const countdownClock = setInterval(countdown,1000)


//! FUNZIONI -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// * CLOCK         -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function clock(){
    //? CREO UNA VARIABILE CONTENENTE L OGGETTO DATE
    let date = new Date()
    //? RECUPERO DALL OGGETTO DATE I:
        //? SECONDI
        let secondsActual = date.getSeconds()
        //? MINUTI
        let minutesActual = date.getMinutes()
        //? ORE
        let hoursActual = date.getHours()
        //? GIORNI
        let daysActual = date.getDay()
        //? ASSEGNO I VALORI AGLI ELEMENTI DEL DOM
        days.innerHTML = daysActual
        hours.innerHTML = hoursActual
        minutes.innerHTML = minutesActual
        seconds.innerHTML = secondsActual


        
        /*     console.log(daysActual);
        console.log(hoursActual);
        console.log(minutesActual);
        console.log(secondsActual); */
}

// * COUNTDOWN     -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function countdown() {
    //? CREO UNA VARIABILE CONTENENTE L OGGETTO DATE
    let date = new Date()
    //? TROVO LA DISTANZA CHE INTERCORRE TRA LA DATA DEL COUNTDOWN E LA DATA ATTUALE
    var expireDate = countDownDate - date;
  
    //? RECUPERO DALL OGGETTO DATE I:
    //? SECONDI MANCANTI
    var secondsLeft = Math.floor((expireDate % (1000 * 60)) / 1000);
    //? MINUTI MANCANTI
    var minutesLeft = Math.floor((expireDate % (1000 * 60 * 60)) / (1000 * 60));
    //? ORE MANCANTI
    var hoursLeft = Math.floor((expireDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    //? GIORNI MANCANTI
    var daysLeft = Math.floor(expireDate / (1000 * 60 * 60 * 24));
  
    //? ASSEGNO I VALORI AGLI ELEMENTI DEL DOM
    days.innerHTML = daysLeft
    hours.innerHTML = hoursLeft
    minutes.innerHTML = minutesLeft
    seconds.innerHTML = secondsLeft
  
    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
    }
  }