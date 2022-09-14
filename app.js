// Initialize weather object
const weather=new Weather('london');
const ui=new UI();
// Get Weather on dom load
document.addEventListener('DOMContentLoaded',getWeather);

const submitBtn=document.getElementById('submit');
const loc=document.getElementById('loc');
let locate='';

submitBtn.addEventListener('click',function(){
locate=loc.value;
  console.log(locate);
  weather.changeLocation(`${locate}`);
  getWeather();
  
})
// CHANGE LOCATION 


function getWeather(){

  weather.getWeather()
  .then(results=>{
    console.log(results);
    console.log('hello');
    ui.paint(results);
    ui.forecast(results);
    
  })
  .catch(err=>console.log('ERROR: ',err));
  
  
  
}
const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

modalBtn.addEventListener("click", function () {
  modal.classList.add("open-modal");
});
closeBtn.addEventListener("click", function () {
  modal.classList.remove("open-modal");
});
