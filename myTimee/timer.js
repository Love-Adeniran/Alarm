timer.style.display = 'none'
bak.style.display = 'none'
dt.style.display = 'inline'
cdt.style.display = 'inline'
Stopwatch.style.display = 'none'
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

let myAudio = new Audio("../Clock-sound-effect.mp3")
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
const back =()=>{
    dt.style.display = 'block'
    cdt.style.display = 'block' 
    timer.style.display = 'none'
    bak.style.display = 'none'
    Stopwatch.style.display ='none'

}


const cdTimer=()=> {
    dt.style.display ='none'
    timer.style.display = 'block'
    bak.style.display = 'block'
    cdt.style.display = 'none'
}
const stopwatch=()=>{
    Stopwatch.style.display ='block'
    dt.style.display ='none'
    timer.style.display = 'none'
    bak.style.display = 'block'
    cdt.style.display = 'none'
}

setInterval(myTime=>{
    let myDate = new Date()
    dispDate.innerHTML = `${myDate.toLocaleTimeString()} <br> ${myDate.toLocaleDateString()}`
    aDate.innerHTML = myDate.toLocaleTimeString();
    ;
}, 1000);


