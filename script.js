/* ===== EDIT THESE ===== */
var WA="2347052336068";
var EMAIL="qultiv8@gmail.com";
var LINKS={instagram:"https://www.instagram.com/qultiv8_26/",linkedin:"https://www.linkedin.com/company/146896014/",twitter:"https://x.com/QULTIV8_26",facebook:"#",whatsapp:"https://wa.me/"+WA};
/* ===================== */
var P=[
{id:"palmview",s:"Real estate",k:"t1",name:"Palmview Gardens",type:"4-week estate launch",line:"New homes, built on trust.",
goal:"Qualified inspection bookings and WhatsApp enquiries for a new residential estate.",
idea:"See it. Verify it. Visit it. Buyers worry about titles and delays, so content answers those worries openly.",
pil:["Show the home","Show the progress","Answer the questions","Show the life"],
plan:["Week 1: Introduce the estate with a show-unit walkthrough reel","Week 2: Build trust with construction updates and a “what to ask a developer” carousel","Week 3: Floor-plan comparisons and a payment-plan explainer","Week 4: Open-day invite, countdown stories and FAQ roundup"],
head:"5 questions to ask before you pay any developer",
cap:"Three bedrooms. Room for the family, the home office and the weekend guests. Walk through the show unit, then come and see it in person. Message us to book your inspection.",
kpi:"WhatsApp enquiries, qualified enquiries, inspection bookings and attendance, saves and shares."},
{id:"listing",s:"Real estate",k:"t2",name:"The Listing Engine",type:"Always-on agent content",line:"Every listing tells a story.",
goal:"A consistent, trusted presence that turns listings into conversations for a small property agency.",
idea:"Every listing tells a story: who it suits, what the area is like and how viewings work, not just a photo and a price.",
pil:["Listing spotlights","Renter and buyer tips","Area guides","Social proof"],
plan:["Monday: New listing spotlight","Wednesday: Educational post such as “what to check before paying rent”","Friday: Viewing reel or area spotlight","Weekend: Client feedback, with permission"],
head:"Ideal for a small family that wants quiet and security",
cap:"Three-bedroom flat, secure compound, close to markets and schools. Message us to book a viewing this week.",
kpi:"Listing enquiries, viewings booked, response time, best-performing post types."},
{id:"taskloop",s:"Tech",k:"t3",name:"TaskLoop",type:"6-week app launch",line:"Stop chasing. Start tracking.",
goal:"Waiting-list sign-ups and first-invoice activations for a small-business invoicing app.",
idea:"Stop chasing. Start tracking. Relatable payment-chasing moments lead into simple product demos.",
pil:["Relatable moments","How it works","Small-business tips","Early-user stories"],
plan:["Week 1: Tease with relatable payment-chasing content","Week 2: Reveal the app and first demo reel","Week 3: Feature walkthroughs","Week 4: Beta feedback and FAQs","Week 5: Activation tips for new users","Week 6: Review and ask what to build next"],
head:"There’s a politer way to follow up on payments",
cap:"Set the reminder once and let TaskLoop do the awkward part. Join the waiting list.",
kpi:"Reach, waiting-list sign-ups, installs, first invoices created (if shared), common questions."},
{id:"gadgethub",s:"Tech",k:"t4",name:"GadgetHub Festive Push",type:"5-week seasonal campaign",line:"Buy it right. Gift it right.",
goal:"More WhatsApp orders and store visits for a gadget retailer during the festive season.",
idea:"Buy it right. Gift it right. Shoppers want genuine products, clear specs and a seller who replies.",
pil:["Gift guides","Honest explainers","Product spotlights","Trust builders"],
plan:["Week 1: Season opener and “how we keep things genuine”","Week 2: Gift guides by budget and recipient","Week 3: Deals and demos with real end dates","Week 4: Last-minute buyers and delivery cut-offs","Week 5: Thank you and after-sales care tips"],
head:"5 things to check before buying a phone",
cap:"Your phone is at 8% and the meeting starts in ten minutes. Meet the power bank that keeps going. Message us to order.",
kpi:"WhatsApp orders and enquiries, store visits mentioning the campaign, top product posts, repeat buyers."}
];
var $=function(s){return document.querySelector(s)},$$=function(s){return [].slice.call(document.querySelectorAll(s))};
function closeMenu(){var n=$("#nav"),m=$("#menu");if(!n||!m)return;n.classList.remove("menu-open");m.classList.remove("is-open");m.setAttribute("aria-expanded","false");m.setAttribute("aria-label","Open navigation menu")}
function go(v){
  if(!document.querySelector('[data-view="'+v+'"]'))v="home";
  $$('[data-view]').forEach(function(e){e.classList.toggle("show",e.dataset.view===v)});
  $$("#nav button").forEach(function(b){b.classList.toggle("on",b.dataset.go===v)});
  closeMenu();
  try{if(location.hash.slice(1)!==v)location.hash=v}catch(e){}
  window.scrollTo(0,0);
}
document.addEventListener("click",function(e){var g=e.target.closest("[data-go]");if(g)go(g.dataset.go)});
window.addEventListener("hashchange",function(){go(location.hash.slice(1)||"home")});
$("#menu").onclick=function(){var n=$("#nav"),m=$("#menu"),open=!n.classList.contains("menu-open");n.classList.toggle("menu-open",open);m.classList.toggle("is-open",open);m.setAttribute("aria-expanded",open);m.setAttribute("aria-label",open?"Close navigation menu":"Open navigation menu")};
function grid(f){
  $("#pgrid").innerHTML=P.filter(function(p){return f==="all"||p.s===f}).map(function(p){
    return '<button class="card pc" data-p="'+p.id+'"><div class="tile '+p.k+'"><small>Concept · '+p.s+'</small>'+p.line+'</div><div class="in"><span class="tag">'+p.s+'</span><span class="tag">'+p.type+'</span><h3>'+p.name+'</h3><p>'+p.goal+'</p></div></button>';
  }).join("");
}
$("#chips").addEventListener("click",function(e){var c=e.target.closest(".chip");if(!c)return;$$('.chip').forEach(function(x){x.classList.toggle("on",x===c)});grid(c.dataset.f)});
$("#pgrid").addEventListener("click",function(e){
  var c=e.target.closest("[data-p]");if(!c)return;
  var p=P.filter(function(x){return x.id===c.dataset.p})[0];
  $("#dt").textContent=p.name;
  $("#dbody").innerHTML='<span class="tag">Concept work</span><span class="tag">'+p.s+'</span>'
   +'<h4>Goal</h4><p>'+p.goal+'</p><h4>Big idea</h4><p>'+p.idea+'</p>'
   +'<h4>Content pillars</h4><div>'+p.pil.map(function(x){return '<span class="tag">'+x+'</span>'}).join("")+'</div>'
   +'<h4>Plan</h4><ul class="t">'+p.plan.map(function(x){return '<li>'+x+'</li>'}).join("")+'</ul>'
    +'<h4>Sample post</h4><div class="tile sample-tile '+p.k+'"><small>'+p.name+'</small>'+p.head+'</div><p class="cap">'+p.cap+'</p>'
   +'<h4>What we would measure</h4><p>'+p.kpi+'</p>'
   +'<div class="row"><button class="btn" id="dgo">Want a plan like this?</button></div>';
  $("#dlg").showModal();
  $("#dgo").onclick=function(){$("#dlg").close();go("contact")};
});
$("#dx").onclick=function(){$("#dlg").close()};
$("#dlg").addEventListener("click",function(e){if(e.target===this)this.close()});
$("#f").addEventListener("submit",function(e){
  e.preventDefault();
  var d=new FormData(this),fs=$("#fs");
  var payload={name:d.get("n"),business:d.get("b"),service:d.get("s"),message:d.get("m"),website:d.get("website")};
  fs.hidden=false;
  fs.textContent="Sending your message...";
  fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(payload)})
    .then(function(r){return r.json().then(function(data){return {ok:r.ok,data:data}})})
    .then(function(result){
      if(!result.ok)throw new Error(result.data.error||"Unable to send your message.");
      window.open(result.data.whatsappUrl,"_blank","noopener");
      fs.textContent="Opening WhatsApp with your message.";
    })
    .catch(function(error){fs.textContent=error.message||"Unable to send your message. Please try again."});
});
var root=document.documentElement,TK="q8-theme";
function theme(t){root.setAttribute("data-theme",t);$("#ti").textContent=t==="dark"?"☀":"☾";$("#tl").textContent=t==="dark"?"Day":"Night";$("#tt").setAttribute("aria-pressed",t==="dark")}
var st=null;try{st=localStorage.getItem(TK)}catch(e){}
theme(st||"dark");
$("#tt").onclick=function(){var n=root.getAttribute("data-theme")==="dark"?"light":"dark";theme(n);try{localStorage.setItem(TK,n)}catch(e){}};
function initReveal(){
  var items=Array.prototype.slice.call(document.querySelectorAll('.card, .band, .hero, .eyebrow, .lead, .btn, .tri, .fc, .steps .card, .two > *'));
  if(!items.length||!('IntersectionObserver' in window)){
    items.forEach(function(el){el.classList.add('is-visible');});
    return;
  }
  var observer=new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },{threshold:0.12,rootMargin:'0px 0px -40px 0px'});
  items.forEach(function(el){
    el.classList.add('reveal');
    observer.observe(el);
  });
}
initReveal();
fetch("/api/config").then(function(r){return r.ok?r.json():Promise.reject()}).then(function(config){
  EMAIL=config.email||EMAIL;
  LINKS=config.links||LINKS;
  $$('[data-s]').forEach(function(a){a.href=LINKS[a.dataset.s]||"#"});
  $("#fm").href="mailto:"+EMAIL;
}).catch(function(){
  $$('[data-s]').forEach(function(a){a.href=LINKS[a.dataset.s]||"#"});
  $("#fm").href="mailto:"+EMAIL;
});
$("#yr").textContent=new Date().getFullYear();
grid("all");
go(location.hash.slice(1)||"home");
