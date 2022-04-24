let  tergetDate =new Date(0,0,0);
let clockStatus = false;
let setBtnStatus = false;
let stopBtnStatus = true;
let DAYS = document.getElementById('days');
let SECONDS = document.getElementById('seconds');
let MINUTES = document.getElementById('mins');
let HOURS = document.getElementById('hours');
let intervalid ;
var isMobile = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
  || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) {
  isMobile = true;
}
function chakeCountComplete(){

}
 function countdown(){
    let diffInSec =(tergetDate - Date.now())/1000;
    let minutes = Math.floor(diffInSec/60);
    let seconds = Math.floor(diffInSec);
    let hours = Math.floor((diffInSec/3600));
    let days = Math.floor(diffInSec/3600/24);
    DAYS.innerText = dayFormater(days);
    SECONDS.innerText = timeFormate(seconds%60);
    MINUTES.innerText = timeFormate(minutes%60);
    HOURS.innerText = timeFormate(hours%24);
    // console.log(`${hours} | ${minutes} | ${seconds}`);
    if(hours==0&&minutes==0&&seconds==0){
        start_play.innerHTML='play_circle';
        stopBtnStatus = false;
        clockStatus = false;
        clearInterval(intervalid);
        setTimeout(()=>{alert('Time Out!');},1000);
    }

}
function timeFormate(time){
    return time<10?`0${time}`:time;
}
function dayFormater(day){
    return day<100?day<10?`00${day}`:`0${day}`:day;
}
let dateValue = document.getElementById('input_date');
let timeValue = document.getElementById('input_time');
let start_btn = document.querySelector('.start');
function startEvent(){
    // let symbol =document.querySelector('#start_play');
    // start_play.innerHTML='pause';
    if(clockStatus){
        if(setBtnStatus){
            // let symbol =document.querySelector('#start_play');
            start_play.innerHTML='pause';
            intervalid = setInterval(countdown,1000);
        }
        else{
            alert('Date & Time Not Set Yet!');
        }
    }
    else{alert('Clock Is Not Active!')}
}
function stopEvent(){
    // let stop = document.querySelector('.stop');
// stop.addEventListener('click',
    if(setBtnStatus){
        // let symbol =document.querySelector('#start_play');
        start_play.innerHTML='play_circle';
        clearInterval(intervalid);
    }
    else{alert('Clock Is Not Active!')}
}
start_btn.addEventListener('click',()=>{
    
    if(stopBtnStatus){//xhake
        startEvent();
        stopBtnStatus = false;
    }
    else{
        stopEvent();
        stopBtnStatus = true;
    }
})
let reset = document.querySelector('.reset');
reset.addEventListener('click',()=>{
    if(setBtnStatus){
        if(confirm('confirm To Reset!')){
        console.log('complete');
        clearInterval(intervalid);
        DAYS.innerText = '000'
        SECONDS.innerText = '00'
        MINUTES.innerText = '00'
        HOURS.innerText = '00'
        setBtnStatus = false;
        stopBtnStatus = true;
        }
    }
    else{alert('Clock Is Not Active!');}
})
function set_user_date_time(){
    let date = dateValue.value;
    let time = timeValue.value;
    let dateArr = date.split("-");
    let timeArr = time.split(":");
    let hour = (+timeArr[0]);
    let munit = +timeArr[1];
    let year = +dateArr[0];
    let month = +(dateArr[1]-1);
    let day = +dateArr[2];
    tergetDate = new Date(year, month, day, hour,munit);
    // console.log(year, month, day, hour,munit);
    // console.log(new Date());
    // console.log((((tergetDate-Date.now())/1000)/3600));
    // console.log(tergetDate);
    var minTime = document.getElementById('input_time');
    minTime.min = String(hour+':'+(munit-1));
}
let set = document.querySelector('.set');
set.addEventListener('click',()=>{
    if(dateValue.value&&timeValue.value){
        set_user_date_time();
        setBtnStatus = true;
        clockStatus = true;
    }
    else{
        if(!dateValue.value&&!timeValue.value){alert('Invalid Date & Time !');}
        else if(dateValue.value){alert('Invalid Time!');}
        else{alert('Invalid Date!');}

    }
});