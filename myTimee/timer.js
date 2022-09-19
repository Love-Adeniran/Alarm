

// displayCountDown= document.getElementById('timer')
// document.getElementById('timer')
// timer.style.display ="none"
    // song1 = new Audio()  
    
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



const setAlarm =()=>{
    d = new Date();
    aHour = ahour.value;
    aMinute = aminute.value;
    d.getHours()
    d.getMinutes()
    // console.log(d.getMinutes())
    if(aHour==d.getHours() && aMinute==d.getMinutes()){
        // alert("Wake Up")
        myAudio.play()
    }
    setA = setTimeout(setAlarm)
}

const snoozeAlarm=()=>{
    myAudio.pause()
    setTimeout(myAudio.play(),4000)
    
}
const stopAlarm =()=>{
    myAudio.stop()
    clearTimeout(setAlarm)
}


const start =()=> window.location = 'index.html'
const back =()=> window.location = 'cDTimer.html'


setInterval(myTime=>{
    let myDate = new Date()
    dispDate.innerHTML = ` ${myDate.toLocaleTimeString()} <br> ${myDate.toLocaleDateString()}`;
}, 1000);
