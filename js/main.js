//richiamare una funzionalità di Vue
const {createApp} = Vue
//tramite elemento appena richiamato creare una base dati da manipolare
createApp({
    //sezione dati
    data() {
        return {
            //elemento da inserire nell' HTML
            message: 'hello Vue!'
        }
    }
//punto di inserimento dati .mount
}).mount('#app')
