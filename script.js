/* START DIRECT */
const decryptScreen = document.getElementById("decryptScreen");
const nameScreen = document.getElementById("nameScreen");
const startScreen = document.getElementById("startScreen");

/* START direkt */
window.onload = () => { startDecrypt(); };

/* DECRYPT */
function startDecrypt(){
 decryptScreen.classList.remove("hidden");
 let p=0; const bar=document.getElementById("progress");
 const load=setInterval(()=>{
  p++; bar.style.width=p+"%";
  if(p>=100){clearInterval(load);decryptScreen.style.display="none";showName();}
 },30);
}

/* GLITCH NAME */
function showName(){
 nameScreen.classList.remove("hidden");
 setTimeout(()=>{
  nameScreen.style.display="none";
  startScreen.classList.remove("hidden");
 },2500);
}

/* STORY */
const message=`Dashuria ime e çmuar Nuçi,

Ti je më shumë se një buzëqeshje; je qetësia në ditët e stuhishme, drita në errësirë dhe melodinë që dëgjoj në heshtje.

Çdo moment me ty është një kujtim që nuk do harrohet kurrë, çdo fjalë jote mbetet në zemrën time si një poezi pa fund.

Sot dua të të them: nuk ka botë pa ty, nuk ka kuptim pa ty, nuk ka unë pa ty.

Të dua më shumë se çdo fjalë mund të përshkruajë. ❤️`;

let i=0;
startScreen.onclick=()=>{
 startScreen.style.display="none";
 document.querySelector(".screen").classList.remove("hidden");
 document.getElementById("music").play();
 typeWriter();
};

function typeWriter(){
 if(i<message.length){
  document.getElementById("text").innerHTML+=message.charAt(i);
  i++; setTimeout(typeWriter,40);
 } else startFinale();
}

/* FINALE CINEMATIC */
function startFinale(){
 document.querySelector(".screen").style.display="none";
 document.getElementById("finale").classList.remove("hidden");
 startHearts();

 setTimeout(()=>{
   const romText = document.getElementById("romantic-text");
   romText.classList.remove("hidden");
   romText.style.opacity=1;

   setTimeout(()=>{
     document.querySelector(".love").style.opacity=1;
     setTimeout(()=>document.getElementById("question").classList.remove("hidden"),500);
   },1500);
 },800);
}

/* HEARTS */
const canvas=document.getElementById("hearts");
const ctx=canvas.getContext("2d");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
let hearts=[];
function Heart(){this.x=Math.random()*canvas.width; this.y=-10; this.size=Math.random()*6+4; this.speed=Math.random()*2+1;}
Heart.prototype.draw=function(){ctx.fillStyle="#ff4d88"; ctx.beginPath(); ctx.moveTo(this.x,this.y); ctx.arc(this.x-3,this.y,this.size,0,Math.PI,true); ctx.arc(this.x+3,this.y,this.size,0,Math.PI,true); ctx.lineTo(this.x,this.y+this.size*2); ctx.fill();}
function startHearts(){setInterval(()=>hearts.push(new Heart()),200); animate();}
function animate(){ctx.clearRect(0,0,canvas.width,canvas.height); hearts.forEach(h=>{h.y+=h.speed; h.draw();}); requestAnimationFrame(animate);}

/* BUTONAT */
document.addEventListener("click",(e)=>{
 if(e.target.id==="yes1"||e.target.id==="yes2")
   alert("E dija 😌❤️ Përgatitu!");
});
