if(window.top!==window.self){try{window.top.location=window.self.location}catch(e){document.documentElement.style.display='none'}}
document.documentElement.classList.add('js');
(function(){
const imgs=[1,2,3,4,5].map(n=>"images/drink-"+n+".webp");
const car=document.getElementById('car');if(!car)return;const dots=document.getElementById('dots');
let cur=2,els=[],ds=[],timer;
imgs.forEach((s,i)=>{const d=document.createElement('div');d.className='it';d.innerHTML='<img src="'+s+'" width="375" height="540" decoding="async" alt="Banglo Hitam drink '+(i+1)+'">';d.onclick=()=>{cur=i;layout();restart()};car.appendChild(d);els.push(d);
const o=document.createElement('i');dots.appendChild(o);ds.push(o)});
function layout(){const n=imgs.length,w=Math.min(170,car.clientWidth/3.2),gap=w*1.3;
els.forEach((e,i)=>{e.style.width=w+'px';let o=((i-cur+n+2)%n)-2;const a=Math.abs(o);
e.style.transform='translate(calc(-50% + '+(o*gap)+'px),-50%) scale('+(a==0?1.45:a==1?1:.8)+')';
e.style.opacity=a==0?1:a==1?.9:0;e.style.pointerEvents=a>1?'none':'auto';e.style.zIndex=10-a});
ds.forEach((d,i)=>d.className=i==cur?'on':'')}
function restart(){clearInterval(timer);timer=setInterval(()=>{cur=(cur+1)%imgs.length;layout()},3000)}
addEventListener('resize',layout);layout();restart();
const faqs=[["Do you offer private event bookings?","Yes we do!"],
["What are your opening hours?","Monday: Closed\nTuesday: 6 pm–12 am\nWednesday: 6 pm–12 am\nThursday: 6 pm–12 am\nFriday: 6 pm–2 am\nSaturday: 6 pm–2 am\nSunday: 6 pm–12 am"],
["Is there parking available?","Yes"],["Do you have vegetarian options?","Yes"]];
const qs=document.getElementById('qs');
faqs.forEach(([q,a])=>{const d=document.createElement('div');d.className='q';
d.innerHTML='<button>'+q+'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m6 9 6 6 6-6"/></svg></button><div class="a"><p></p></div>';
d.querySelector('p').textContent=a;
d.querySelector('button').onclick=()=>{const on=d.classList.toggle('open'),b=d.querySelector('.a');b.style.maxHeight=on?b.scrollHeight+'px':0};
qs.appendChild(d)});

car.addEventListener('dragstart',e=>e.preventDefault());car.addEventListener('selectstart',e=>e.preventDefault());
let sx=null,moved=false;
car.addEventListener('pointerdown',e=>{sx=e.clientX;moved=false});
addEventListener('pointerup',e=>{if(sx==null)return;const d=e.clientX-sx;sx=null;
if(Math.abs(d)>40){moved=true;cur=(cur+(d<0?1:-1)+imgs.length)%imgs.length;layout();restart()}});
car.addEventListener('click',e=>{if(moved){e.stopPropagation();moved=false}},true);
car.addEventListener('wheel',e=>{if(Math.abs(e.deltaX)>Math.abs(e.deltaY)&&Math.abs(e.deltaX)>20){e.preventDefault();cur=(cur+(e.deltaX>0?1:-1)+imgs.length)%imgs.length;layout();restart()}},{passive:false});

})();
document.querySelectorAll('h2,.about,.q,.mc,.lg>div,.dots,.car,footer>*').forEach((e,i)=>{e.classList.add('rv');e.style.setProperty('--d',(i%4)*.1+'s')});
const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.12});
document.querySelectorAll('.rv').forEach(e=>io.observe(e));
const bg=document.getElementById('bg'),dr=document.getElementById('dr');
function tg(o){dr.classList.toggle('on',o);bg.classList.toggle('on',o);bg.setAttribute('aria-expanded',o)}
bg.onclick=()=>tg(!dr.classList.contains('on'));dr.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>tg(false)));
addEventListener('keydown',e=>{if(e.key==='Escape')tg(false)});document.addEventListener('click',e=>{if(!e.target.closest('nav'))tg(false)});
if(!('IntersectionObserver' in window))document.querySelectorAll('.rv').forEach(e=>e.classList.add('in'));
