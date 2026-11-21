(function(){
var D=document,rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
var w=D.createElement('div');w.id='vbgw';w.setAttribute('aria-hidden','true');D.body.insertBefore(w,D.body.firstChild);
var V={t:'video/mp4'},v=D.createElement('video');
v.muted=true;v.defaultMuted=true;v.loop=true;v.playsInline=true;v.preload='auto';v.setAttribute('muted','');v.setAttribute('playsinline','');v.tabIndex=-1;w.appendChild(v);
var cv=D.createElement('canvas');cv.width=270;cv.height=480;cv.hidden=true;w.appendChild(cv);var ctx=cv.getContext('2d');
var mode='video',tried=0,imgs=[],N=0;
function toFrames(){if(mode==='frames')return;mode='frames';v.pause();v.removeAttribute('src');v.hidden=true;cv.hidden=false;fetch('assets/frames.json').then(function(r){return r.json()}).then(function(f){N=f.length;imgs=new Array(N);f.forEach(function(s,i){var im=new Image();im.onload=function(){imgs[i]=im};im.src='data:image/webp;base64,'+s})}).catch(function(){})}
function near(i){for(var k=0;k<N;k++){if(imgs[i-k])return imgs[i-k];if(imgs[i+k])return imgs[i+k]}return null}
if(!v.canPlayType(V.t)){toFrames()}else{
 v.addEventListener('error',function(){toFrames()});
 v.src='assets/bg.mp4';
 var pr=v.play();if(pr&&pr.catch)pr.catch(function(){setTimeout(function(){if(mode==='video'&&v.paused&&!rm)toFrames()},1500)});
 ['touchstart','pointerdown','keydown'].forEach(function(ev){addEventListener(ev,function(){if(mode==='video'&&v.paused&&!rm)v.play().catch(function(){})},{passive:true,once:true})});
}
var W=1,H=1;
function size(){W=innerWidth;H=innerHeight;var m='none';if(W>H){var f=Math.min(1,(9/16*1.3*H)/W),l=(1-f)/2*100,r=100-l,x=f*100;m='linear-gradient(90deg,transparent '+l+'%,#000 '+(l+x*.32)+'%,#000 '+(r-x*.32)+'%,transparent '+r+'%)'}w.style.webkitMaskImage=m;w.style.maskImage=m}
function prog(){var max=D.documentElement.scrollHeight-H,y=window.scrollY||0;return max>1?Math.min(1,Math.max(0,y/max)):0}
var last=performance.now(),acc=0,sp=0,rate=1,ly=window.scrollY||0;
function loop(now){requestAnimationFrame(loop);var dt=Math.min(.1,Math.max(.001,(now-last)/1000));last=now;var t=now/1000;
 var y=window.scrollY||0,dv=Math.abs(y-ly)/Math.max(1,H)/dt;ly=y;
 var rt=rm?1:Math.min(3,.75+dv*1.4);rate+=(rt-rate)*Math.min(1,dt*4);
 if(mode==='video'){if(!rm&&Math.abs(v.playbackRate-rate)>.03){try{v.playbackRate=Math.max(.0625,rate)}catch(e){}}}
 else if(N){acc+=dt*rate*(N/9);var i=Math.floor(acc)%N,j=(i+1)%N,fr=acc-Math.floor(acc),A=near(i),B=near(j);ctx.globalAlpha=1;if(A)ctx.drawImage(A,0,0,270,480);if(B&&fr>.01){ctx.globalAlpha=fr;ctx.drawImage(B,0,0,270,480)}ctx.globalAlpha=1}
 var p=prog();sp+=(p-sp)*Math.min(1,dt*3.5);
 if(!rm){var tx=Math.sin(t*.31)*16+Math.sin(sp*6.283)*28,ty=Math.sin(t*.27)*12-sp*H*.16,rot=Math.sin(t*.19)*1.1+(sp-.5)*4,sc=1.05+.07*sp+Math.sin(t*.23)*.012;w.style.transform='translate3d('+tx.toFixed(1)+'px,'+ty.toFixed(1)+'px,0) rotate('+rot.toFixed(2)+'deg) scale('+sc.toFixed(4)+')'}}
addEventListener('resize',size);size();requestAnimationFrame(loop);

// scroll reveal (staggered) + count-up
var els=D.querySelectorAll('.rv');
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var i=Array.prototype.indexOf.call(els,e.target);setTimeout(function(){e.target.classList.add('on')},(i%4)*110);io.unobserve(e.target)}})},{threshold:.15});els.forEach(function(e){io.observe(e)})}else{els.forEach(function(e){e.classList.add('on')})}
var cnt=D.querySelectorAll('.cnt');
function run(el){var n=+el.dataset.n,s=performance.now();(function st(t){var k=Math.min(1,(t-s)/1200);el.textContent=Math.round(n*(1-Math.pow(1-k,3)));if(k<1)requestAnimationFrame(st)})(s)}
if('IntersectionObserver' in window&&!rm){var io2=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){run(e.target);io2.unobserve(e.target)}})},{threshold:.6});cnt.forEach(function(e){e.textContent='0';io2.observe(e)})}
var pb=D.createElement('div');pb.className='progress';D.body.appendChild(pb);var nav=D.querySelector('.nav');
function onS(){var m=D.documentElement.scrollHeight-innerHeight;pb.style.transform='scaleX('+(m>0?Math.min(1,scrollY/m):0)+')';nav.classList.toggle('sc',scrollY>20)}
addEventListener('scroll',onS,{passive:true});onS();
if(!rm){D.querySelectorAll('.card').forEach(function(c){
 c.addEventListener('pointermove',function(e){if(e.pointerType!=='mouse')return;var r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;c.style.setProperty('--mx',x*100+'%');c.style.setProperty('--my',y*100+'%');c.style.transform='perspective(700px) rotateX('+((.5-y)*10).toFixed(1)+'deg) rotateY('+((x-.5)*10).toFixed(1)+'deg) translateY(-4px)'});
 c.addEventListener('pointerleave',function(){c.style.transform=''})})}
})();

(function(){
var el={},last={},first=true;document.querySelectorAll('#cd b[data-u]').forEach(function(b){el[b.dataset.u]=b});
function pad(n){return n<10?'0'+n:''+n}
try{var ld=new Date(new Date().getFullYear(),new Date().getMonth()+1,0);document.getElementById('cdd').textContent='(حتى '+ld.toLocaleDateString('ar',{day:'numeric',month:'long'})+')'}catch(e){}
function tick(){var n=new Date(),end=new Date(n.getFullYear(),n.getMonth()+1,1).getTime(),s=Math.max(0,Math.floor((end-n.getTime())/1000));
 var v={d:Math.floor(s/86400),h:Math.floor(s%86400/3600),m:Math.floor(s%3600/60),s:s%60};
 for(var k in v){var t=pad(v[k]);if(last[k]!==t){el[k].textContent=t;last[k]=t;if(!first){el[k].classList.remove('tk');void el[k].offsetWidth;el[k].classList.add('tk')}}}
 first=false}
tick();setInterval(tick,1000)})();

// WhatsApp: غيّر الرقم إلى رقم واتساب فريق ذكائي بالصيغة الدولية بدون + أو 00
var TEAM_WHATSAPP = "249902375181";
var form = document.getElementById("f");
function val(id){ return document.getElementById(id).value.trim(); }
function mark(id, bad){ document.getElementById(id).closest(".f").classList.toggle("bad", bad); return !bad; }
form.addEventListener("submit", function(e){
  e.preventDefault();
  var phone = val("phone").replace(/[\s\-+()]/g, "");
  var ok = [
    mark("name", val("name").length < 3),
    mark("phone", !/^\d{9,15}$/.test(phone)),
    mark("city", val("city").length < 2),
    mark("exp", !val("exp")),
    mark("ch", !val("ch"))
  ].every(Boolean);
  if (!document.getElementById("ag").checked){ alert("يرجى الموافقة على الشروط للمتابعة."); ok = false; }
  if (!ok) return;
  var msg = "طلب تسجيل مسوّق جديد | ذكائي ZAKAIE\n" +
    "الاسم: " + val("name") + "\nواتساب: " + phone +
    "\nالمدينة/الدولة: " + val("city") + "\nالخبرة: " + val("exp") + "\nالقناة: " + val("ch") +
    "\n\nأرغب في الانضمام لبرنامج التسويق بالعمولة.";
  var url = "https://wa.me/" + TEAM_WHATSAPP + "?text=" + encodeURIComponent(msg);
  form.style.display = "none";
  document.getElementById("wa").href = url;
  document.getElementById("ok").style.display = "block";
  window.location.href = url;
});
