const H=document.querySelector(".hover");
const M=document.querySelector(".menuts");
const S=document.querySelector(".secend");

setInterval(()=>{
    const time=new Date();
    let hours= time.getHours();
    let minutes= time.getMinutes();
    let seconds= time.getSeconds();
	let period = "AM";
	if (hours>=12){
		period="PM";
	}
	if (hours>12){
		hours = hours-12;
	}
	if (hours == 0 ){
		hours = 12
	}
    H.textContent=hours;
    M.textContent=minutes;
    S.textContent=seconds;
},1000);
