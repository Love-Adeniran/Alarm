timer.style.display = 'none'
bak.style.display = 'none'
dt.style.display = 'inline'
cdt.style.display = 'inline'
Stopwatch.style.display = 'none'
Alarm.style.display = 'none'
// displayCountDown= document.getElementById('timer')
// document.getElementById('timer')
// timer.style.display ="none"
    // song1 = new Audio()  


    // stop watch section start here
    hh = 00;
    mm = 00;
    ss = 00;
const startWatch=()=>{
    timen = `${hh} : ${mm} :${ss}`
    time.value = timen;
    ss++
    set = setTimeout(startWatch,150)
    
    if(ss==59){
        mm++;
        ss= 00;
    }
    else if(mm==59){
        hh++;
        mm= 00;
        ss=00;
    }
    // else if(hh==24){
    //     hh=00;
    //     mm=00;
    //     ss=00
    // }
    
}

const stopWatch =()=>{
    // window.location.reload()
    hh = 00
    mm = 00
    ss = 00
    timen =`${hh} : ${mm} : ${ss}`
    time.value= timen
    clearTimeout(set)
}
//  stop watch section ends here

// count down section start here
let myAudio = new Audio("Clock-sound-effect.mp3")
const countDown=()=>{
    let myHour = hour.value;
    let myMinute = minute.value;
    let mySecond = second.value;
    check = false
    if(second.value==""&& minute.value=="" && hour.value==""){
        alert('Sorry! Kindly fill in the fields')
    }
    else {
        mySecond--
        second.value = mySecond;
        console.log(mySecond)
        setT = setTimeout(countDown,100)
        if(mySecond<=0 && myMinute!=00){
            second.value = 59;
            mySecond = second.value
            mySecond--
            myMinute--
            second.value = mySecond
            minute.value = myMinute;
        }
        else if(myMinute ==00 && myHour != 00){
            second.value = 59
            minute.value = 59
            myHour--
            hour.value = myHour
        }
        
        else if(mySecond<=00 && myMinute<=00 && myHour<=00){
            // check = true;
            mySecond = 00
            myMinute = 00
            myHour = 00
            second.value = mySecond;
            minute.value = myMinute; 
            hour.value = myHour;
            clearTimeout(setT)
            myAudio.play()
        }
        
    }
   
}
// countdown section end here

// alarm section start

const setAlarm =()=>{
    d = new Date();
    aHour = ahour.value;
    aMinute = aminute.value;
    d.getHours()
    d.getMinutes()
    // console.log(d.getMinutes())
    if(ahour.value=="" || aminute==""){
        alert('Set the time alarm')
    }
    else if(ahour.value==d.getHours() && aminute.value==d.getMinutes()){
        alert("Wake Up")
        // myAudio.play()
    }
    setTimeout(setAlarm,1000)
}

const snoozeAlarm=()=>{
    myAudio.pause()
    setTimeout(myAudio.play(),4000)
    
}
const stopAlarm =()=>{
    myAudio.stop()
    clearTimeout(setAlarm)
}

// alarm section end




// The back button
const back =()=>{
    dt.style.display = 'block'
    cdt.style.display = 'block' 
    timer.style.display = 'none'
    bak.style.display = 'none'
    Stopwatch.style.display ='none'
    Alarm.style.display = 'none'
    stw.style.display = 'block'


}

// the countdowntimer button
const cdTimer=()=> {
    dt.style.display ='none'
    timer.style.display = 'block'
    bak.style.display = 'block'
    cdt.style.display = 'none'
    Alarm.style.display = 'none'

}
// the stopwatch button
const stopwatch=()=>{
    Stopwatch.style.display ='block'
    dt.style.display ='none'
    timer.style.display = 'none'
    bak.style.display = 'block'
    cdt.style.display = 'block'
    Alarm.style.display = 'none'
    stw.style.display = 'none'
    alm.style.display = 'block'

}
// the alarm button
const alarm =()=>{
    Alarm.style.display = 'block'
    dt.style.display ='none'
    timer.style.display = 'none'
    bak.style.display = 'block'
    cdt.style.display = 'block'
    Stopwatch.style.display ='none'
    alm.style.display = 'none'
}



// date section
setInterval(myTime=>{
    let myDate = new Date()
    dispDate.innerHTML = `${myDate.toLocaleTimeString()} <br> ${myDate.toLocaleDateString()}`
    aDate.innerHTML = myDate.toLocaleTimeString();
    ;
}, 1000);


