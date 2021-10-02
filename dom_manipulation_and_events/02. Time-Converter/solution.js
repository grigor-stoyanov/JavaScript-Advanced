function attachEventsListeners() {
    document.querySelector('main').addEventListener('click',onClick)
    function onClick(event){
        days = document.getElementById('days')
        hours = document.getElementById('hours')
        minutes = document.getElementById('minutes')
        seconds = document.getElementById('seconds')
        buttons = document.querySelectorAll('input[type=button]')
        if (event.target == buttons[0]){
            hours.value = Number(days.value)*24
            minutes.value = hours.value*60
            seconds.value = minutes.value*60
        }
        if (event.target == buttons[1]){
            days.value = Math.floor(Number(hours.value)/24)
            minutes.value = Number(hours.value*60)
            seconds.value = minutes.value*60
        }
        if(event.target == buttons[2]){
            days.value = Math.floor(Number(minutes.value)/1440)
            hours.value = Math.floor(Number(minutes.value)/60)
            seconds.value = Number(minutes.value)*60
        }
        if(event.target == buttons[3]){
            days.value = Math.floor(Number(seconds.value)/86400)
            hours.value = Math.floor(Number(seconds.value)/3600)
            minutes.value = Math.floor(Number(seconds.value)/60)
        }
    }
}