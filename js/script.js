let date=new Date();
let day=document.getElementById("day")
let dv=date.getDay();
day.textContent=(dv==0)?"Sunday":(dv==1)?"Monday":(dv==2)?"Tuesday":(dv==3)?"Wednesday":(dv==4)?"Thursday":(dv==5)?"Friday":"Saturday";

let currentdate=document.getElementById("date")
currentdate.textContent=date.getDate()+" - "+date.getMonth()+" - "+date.getFullYear();

let hours=document.getElementById("hours")
let minutes=document.getElementById("minutes")
let seconds=document.getElementById("seconds")

setInterval(()=>{
let cdate=new Date();
hours.textContent=cdate.getHours()+" : ";
minutes.textContent=cdate.getMinutes()+" : ";
seconds.textContent=cdate.getSeconds()+"     "
},100)


let clr=document.getElementById("i2")

let input =document.getElementById("searchbar")
input.addEventListener("keydown",(e)=>{
   
if (e.key=="Enter") {
    
   
let city=input.value
let key="be2f27b1226065139507c539a185fd3f"
let weatherdata=fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
weatherdata.then((d)=>{
    
      return d.json()
  
    

}).then((d1)=>{
    console.log(d1);
    document.getElementById("raw1").innerHTML=d1.name
     let t1= Math.floor(d1.main.temp)-273
    document.getElementById("temperature").innerHTML="Temperature : "+t1
  
    let tf=Math.floor(d1.main.feels_like)-273

   document.getElementById("feel_like").textContent="Feels like : "+tf

   document.getElementById("ground_level").textContent="Ground Level : "+d1.main.grnd_level
   document.getElementById("sea_level").textContent="Sea Level : "+d1.main.sea_level

    let t2= Math.floor( d1.main.temp_min)-273
   document.getElementById("temp_min").textContent="Minimum Temperature : "+t2
   let t3= Math.floor( d1.main.temp_max)-273
 document.getElementById("temp_max").textContent="Maximum Temperature : "+t3

 document.getElementById("humidity").textContent="Humidity : "+d1.main.humidity
 document.getElementById("pressure").textContent="Humidity : "+d1.main.pressure


//  coord


document.getElementById("latitude").textContent="Latitude : "+d1.coord.lat
document.getElementById("longitude").textContent="Longitude : "+d1.coord.lon


// rain

//document.getElementById("rain").textContent="Rain : "+d1.rain


// sys

document.getElementById("country").textContent="Country : "+d1.sys.country
document.getElementById("id").textContent="id : "+d1.sys.id
document.getElementById("sunrise").textContent="Sunrise : "+d1.sys.sunrise
document.getElementById("sunset").textContent="Sunset : "+d1.sys.sunset
document.getElementById("timezone").textContent="Time Zone : "+d1.timezone
document.getElementById("visibility").textContent="Visibility : "+d1.visibility


// weather
document.getElementById("description").textContent="Description : "+d1.weather[0].description
document.getElementById("raw2").textContent=d1.weather[0].main
let theme=d1.weather[0].main.toLowerCase();
applyTheme(theme)


//wind
document.getElementById("deg").textContent=" Wind Degree : "+d1.wind.deg
document.getElementById("speed").textContent="Wind Speed : "+d1.wind.speed
      
})
.catch((d)=>{
   
    let show=document.getElementById("show")
    show.innerHTML="something went wrong<br><br> "
    show.style.textAlign="center"
    let reload= document.createElement("button")
    reload.textContent="reload"
    reload.addEventListener("click",()=>{
        window.location.reload();
    })
    show.appendChild(reload)

    
     


    })


}
})


clr.addEventListener("click",()=>{
   input.value=""

   
   
})




// themes


function applyTheme(theme) {
    let body=document.body;
   body.className='';
    if (theme.includes('cleaar')) {
        body.classList.add('clear')
        
    } else if(theme.includes('cloud')){
        body.classList.add('cloudy')
    }
    else if( theme.includes('rain')){
body.classList.add('rainy')
    }
    else if(theme.includes('snow')){
        body.classList.add('snowy')
    }
    else{
        body.classList.add('default')
    }
}
