setInterval(showTime, 1000);

function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "AM";
 
    if (hour > 12) {
        hour = hour - 12;
        am_pm = "PM";
    }
    // if (hour == 0) {
    //     hr = 12;
    //     am_pm = "AM";
    // }

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
 
    document.getElementById("hour")
            .innerHTML = hour;
            document.getElementById("minute")
            .innerHTML = min;
            document.getElementById("second")
            .innerHTML = sec;
            document.getElementById("amPm").innerHTML = am_pm;

            let wake_up_value = document.getElementById("time__section__wakeup").innerHTML;
            let lunch_value = document.getElementById("time__section__lunch").innerHTML;
            let nap_value = document.getElementById("time__section__nap").innerHTML;
            let night_value = document.getElementById("time__section__night").innerHTML;

            hour= hour.toString();
            let currentHour = hour.startsWith("0") ? hour.slice(1) : hour;
            currentHour = currentHour + am_pm;

            if(wake_up_value.split("-")[0].trim() === currentHour){
                document.getElementById("alarm__text").innerHTML = "GOOD MORNING!! WAKE UP !!";
                document.getElementById("alarm__msg").innerHTML = "GRAB SOME HEALTHY BREAKFAST!!!";
                document.getElementById("display__image").style.backgroundImage =  "url('./morning.svg')";
            }else if(lunch_value.split("-")[0].trim() === currentHour){
                document.getElementById("alarm__text").innerHTML = "GOOD AFTERNOON!! TAKE SOME SLEEP";
                document.getElementById("alarm__msg").innerHTML = "GRAB SOME HEALTHY BREAKFAST!!!";
                document.getElementById("display__image").style.backgroundImage =  "url('./afternoon.png')";
            }else if(nap_value.split("-")[0].trim() === currentHour){
                document.getElementById("alarm__text").innerHTML = "GOOD EVENING !!";
                document.getElementById("alarm__msg").innerHTML = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
                document.getElementById("display__image").style.backgroundImage =  "url('./evening.png')";
            } else if(parseInt(currentHour.slice(0,-2)) >= 8 && am_pm==="PM" || parseInt(currentHour.slice(0,-2)) <= 8 && am_pm==="AM"){
                document.getElementById("alarm__text").innerHTML = "GOOD NIGHT !!";
                document.getElementById("alarm__msg").innerHTML = "CLOSE YOUR EYES AND GO TO SLEEP";
                document.getElementById("display__image").style.backgroundImage =  "url('./night.svg')";

            }

}
showTime();

const setAlarm = () =>{
    let wake_up_value = document.getElementById("wakeup__dropdown").value;
    let lunch_value = document.getElementById("lunch__dropdown").value;
    let nap_value = document.getElementById("nap__dropdown").value;
    let night_value = document.getElementById("night__dropdown").value;

    document.getElementById("time__section__wakeup").innerHTML = wake_up_value;
    document.getElementById("time__section__lunch").innerHTML = lunch_value;
    document.getElementById("time__section__nap").innerHTML = nap_value;
    document.getElementById("time__section__night").innerHTML = night_value;

}