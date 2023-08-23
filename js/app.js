// ! RECUPERO GLI ELEMENTI DI IN TERESSE DAL DOM

const days = document.getElementById('days')
const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')




const test = setInterval(clock,1000)

// const interval = setInterval(updateTime , 1000);

// !FUNZIONI

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

