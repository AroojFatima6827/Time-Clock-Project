// Access Id's from Html...

const hours = document.querySelector("#Hours");
const mint = document.querySelector("#Mint");
const second = document.querySelector("#Second");

// using setIntervel for updatecurrent time...
 setInterval(()=>{
let CurrentTime = new Date();
hours.innerHTML =( CurrentTime.getHours()<10?"0":"") + CurrentTime.getHours();
mint.innerHTML = (CurrentTime.getMinutes()<10?"0":"") + CurrentTime.getMinutes();
second.innerHTML = (CurrentTime.getSeconds()<10?"0":"")+ CurrentTime.getSeconds();
let hours12 = CurrentTime.getHours() % 12 || 12;
let ampm = CurrentTime.getHours() >= 12 ? "PM" : "AM";
hours.innerHTML = (hours12 < 10 ? "0" : "") + hours12 + ""  + ampm;

},1000)


