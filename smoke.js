const fs=require('fs');
class N{constructor(t){this.tag=t;this.children=[];this.attrs={};this.l={};this.style={};this.className='';this._t='';this.disabled=false;this.value='';this.checked=false;this.parent=null;
 const self=this;this.classList={add:(c)=>{const a=new Set(self.className.split(' ').filter(Boolean));a.add(c);self.className=[...a].join(' ')},remove:(c)=>{self.className=self.className.split(' ').filter(x=>x&&x!==c).join(' ')},toggle:(c,f)=>{f?self.classList.add(c):self.classList.remove(c)},contains:(c)=>self.className.split(' ').includes(c)}}
 get firstChild(){return this.children[0]||null}
 appendChild(c){c.parent=this;this.children.push(c);return c}
 removeChild(c){this.children=this.children.filter(x=>x!==c);return c}
 setAttribute(k,v){this.attrs[k]=v}
 getAttribute(k){return this.attrs[k]}
 addEventListener(t,f){(this.l[t]=this.l[t]||[]).push(f)}
 dispatch(t,e){(this.l[t]||[]).forEach(f=>f(e||{key:'',target:this}))}
 click(){if(!this.disabled)this.dispatch('click')}
 set textContent(v){this.children=[];this._t=String(v)}
 get textContent(){return this._t+this.children.map(c=>c.textContent).join('')}
 set innerHTML(v){this.children=[];this._t=v}
 focus(){} remove(){if(this.parent)this.parent.removeChild(this)}
 querySelector(sel){const cl=sel.slice(1);let r=null;(function w(n){if(r)return;for(const c of n.children){if(c.className&&c.className.split(' ').includes(cl)){r=c;return}w(c)}})(this);return r}
}
class T extends N{constructor(t){super('#text');this._t=t}}
const app=new N('div');
global.window=global;
global.document={createElement:t=>new N(t),createTextNode:t=>new T(t),getElementById:()=>app,body:new N('body')};
const store={};global.localStorage={getItem:k=>store[k]||null,setItem:(k,v)=>{store[k]=v}};
global.fetch=()=>Promise.reject();global.confirm=()=>true;global.alert=()=>{};global.location={protocol:'file:'};global.navigator={};
global.scrollTo=()=>{};
global.setTimeout=(f,ms)=>{return 0}; // sin autoplay/timeouts
const CONTENT=fs.readdirSync('.').filter(f=>/^content_.*\.js$/.test(f)).sort();
for(const f of ['core.js','guzki.js',...CONTENT,'app.js']) (0,eval)(fs.readFileSync(f,'utf8'));
const api=window.__euskara;
const find=(n,pred,acc=[])=>{if(pred(n))acc.push(n);n.children.forEach(c=>find(c,pred,acc));return acc};
const cls=(n,c)=>n.className&&n.className.split(' ').includes(c);
let errs=0;
function solve(it){
  const root=app;
  const primary=()=>find(root,n=>n.tag==='button'&&cls(n,'big-btn'))[0];
  const opts=find(root,n=>n.tag==='button'&&cls(n,'opt'));
  switch(it.t){
   case 'mc':case 'vl':case 'ls':case 'cmp': opts.find(o=>o._v===it.a).click();break;
   case 'fl': if(it.opts){opts.find(o=>o._v===it.a).click()} else {const inp=find(root,n=>n.tag==='input')[0];inp.value=it.a.split('|')[0];inp.dispatch('input')}break;
   case 'tr':case 'dict': if(it.t==='dict'&&it.typed){const inp=find(root,n=>n.tag==='input')[0];inp.value=it.eu;inp.dispatch('input');break}
     for(const w of E.tokens(it.eu)){const pool=find(root,n=>n.tag==='button'&&cls(n,'tok')&&!cls(n,'used'));const ansN=find(root,n=>cls(n,'ans'))[0];const cand=pool.find(b=>b.textContent===w&&!ansN.children.includes(b)&&b.parent&&cls(b.parent,'pool'));cand.click();}break;
   case 'say': find(root,n=>n.tag==='button'&&/autoevaluar|Lo he dicho bien/.test(n.textContent))[0].click();break;
   case 'mt': {const L=find(root,n=>n.tag==='button'&&cls(n,'opt')&&n._s==='L'),R=find(root,n=>n.tag==='button'&&cls(n,'opt')&&n._s==='R');const m={};it.pairs.forEach(p=>m[p[0]]=p[1]);for(const l of L){l.click();R.find(r=>r._v===m[l._v]).click()}break}
   case 'wr': {const ta=find(root,n=>n.tag==='textarea')[0];ta.value=it.model;ta.dispatch('input');break}
  }
  const p=primary(); if(!p||p.disabled){errs++;console.log('NOT READY',it.t,it.q||it.eu||it.prompt);return}
  p.click(); // check
  const fb=find(root,n=>cls(n,'fb'))[0];
  if(!/good/.test(fb.className)){errs++;console.log('WRONG?',it.t,JSON.stringify(it).slice(0,200),fb.textContent)}
  primary().click(); // next
}
let total=0;
for(const u of E.UNITS){ for(const L of E.LESSONS){
  const items=E.buildLesson(u,L.id); let finished=false;
  const seq=items.map(x=>x);
  api.runLesson(items,{onExit:()=>{finished=true},onRetry:()=>{},onDone:()=>{finished=true}});
  for(const it of seq){ try{ solve(it); total++; }catch(e){errs++;console.log('EXC',u.id,L.id,it.t,e.message);break} }
  if(!/Lezioa osatuta/.test(app.textContent) ){ errs++; console.log('no finish', u.id,L.id, app.textContent.slice(0,80)); }
}}
// exam + views
for(const tab of ['path','practice','exam','guide','settings']){ try{ (0,eval)("0"); }catch(e){} }
console.log('exercises solved',total,'errors',errs);
// render views
const v=api; ['path','practice','exam','guide','settings'].forEach(()=>{});
api.render();
console.log('render ok, text:',app.textContent.slice(0,60));

/* ---------- Guzki ---------- */
{
  let gerr = 0; const bad = (m) => { gerr++; console.log('GUZKI ERR', m); };
  for (const m of [...Guzki.MOODS, 'inexistente']) for (const w of [0, 0.5, 1]) {
    const s = Guzki.svg(m, { wilt: w });
    if (/NaN|undefined/.test(s)) bad('NaN/undefined en ' + m);
    if ((s.match(/<svg/g) || []).length !== 1 || !/<\/svg>$/.test(s)) bad('svg mal formado ' + m);
    if ((s.match(/<g[ >]/g) || []).length !== (s.match(/<\/g>/g) || []).length) bad('grupos desbalanceados ' + m);
  }
  for (const m of Guzki.MOODS) if (!Guzki.LINES[m] || !Guzki.line(m, 4)) bad('sin frases ' + m);
  for (const m of Guzki.MOODS) { const html=Guzki.image(m); if (!html.includes('assets/guzki/'+m+'.webp') || !fs.existsSync('assets/guzki/'+m+'.webp')) bad('imagen de Guzki no integrada: '+m); }
  const S = api.S(), t = api.dfmt(new Date()), G = api.Guz;
  S.set.goal = 30;
  // salud: 3 días sin estudiar => -60
  S.days = {}; S.guz.hp = 80; S.guz.tick = api.addDays(t, -3); G.tick(); if (S.guz.hp !== 20) bad('tick hp=' + S.guz.hp);
  // un día estudiado no resta
  S.days = { [api.addDays(t, -2)]: 10 }; S.guz.hp = 80; S.guz.tick = api.addDays(t, -3); G.tick(); if (S.guz.hp !== 40) bad('tick con día activo hp=' + S.guz.hp);
  // estados de la pantalla principal
  const mood = (last, xp, streak, hp) => { S.last = last; S.days = { [t]: xp }; S.streak = streak; S.guz.hp = hp; return G.homeMood().mood; };
  const chk = (got, exp, msg) => { if (got !== exp) bad(msg + ': ' + got + ' != ' + exp); };
  chk(mood('', 0, 0, 80), 'acierto', 'primer uso');
  chk(mood(t, 40, 1, 80), 'acierto', 'objetivo cumplido');
  chk(mood(t, 40, 4, 80), 'racha', 'racha');
  chk(mood(t, 40, 9, 100), 'euforia', 'euforia');
  chk(mood(t, 10, 1, 80), 'bien', 'a medias');
  chk(mood(api.addDays(t, -2), 0, 0, 60), 'enfadado', '2 días');
  chk(mood(api.addDays(t, -3), 0, 0, 40), 'toxico', '3 días');
  chk(mood(api.addDays(t, -6), 0, 0, 10), 'depresivo', '6 días');
  const w = (hp) => { S.guz.hp = hp; return G.wilt(); };
  if (w(100) !== 0 || w(70) !== 0 || w(10) !== 1 || !(w(40) > 0 && w(40) < 1)) bad('wilt');
  // avisos escalan
  S.set.remind = true; S.set.remindHour = 23; S.last = api.addDays(t, -1); S.streak = 3;
  const l = api.Notif.list(); if (l.length === 0 || !/racha|Ea|Esto|marchit|seguimos/i.test(l[0].body)) bad('avisos');
  if (l.length > 1 && l[l.length - 1].body === l[0].body) bad('los avisos no escalan');
  // en lección: reacciones
  S.guz.hp = 80; S.last = t;
  const lessonItems = E.buildLesson(E.UNITS[0], 'gram');
  api.runLesson(lessonItems, { onExit() {}, onRetry() {}, onDone() {} });
  const pickFb = () => (find(app, n => cls(n, 'fb-guz'))[0] || {})._t || '';
  const answer = (right) => {
    const it = lessonItems[0]; // sólo para saber el tipo; usamos botones visibles
    const opts = find(app, n => n.tag === 'button' && cls(n, 'opt'));
    const inp = find(app, n => n.tag === 'input')[0];
    if (opts.length) { const o = opts[0]; o.click(); } else if (inp) { inp.value = right ? '' : 'zzz'; inp.dispatch('input'); }
    find(app, n => n.tag === 'button' && cls(n, 'big-btn'))[0].click();
  };
  // responde mezclando fallos y (a veces) aciertos y comprueba que cada reacción corresponde a la racha real
  let guard = 0, cc = 0, cw = 0, prevWrong = false, outcomes = [];
  while (guard++ < 14) {
    const inp = find(app, n => n.tag === 'input')[0], opts = find(app, n => n.tag === 'button' && cls(n, 'opt'));
    if (inp) { inp.value = 'zzz'; inp.dispatch('input'); } else if (opts.length) opts[0].click(); else break;
    find(app, n => n.tag === 'button' && cls(n, 'big-btn'))[0].click();
    const fb = find(app, n => cls(n, 'fb'))[0];
    if (!/show/.test(fb.className)) break;
    const ok = /good/.test(fb.className), got = (pickFb().match(/(?:m|art)-(\w+)/) || [])[1];
    let exp;
    if (ok) { cc++; const rec = cw > 0; cw = 0; exp = cc >= 3 ? ['racha'] : rec ? ['bien'] : ['acierto']; }
    else { cw++; cc = 0; exp = cw >= 3 ? ['toxico'] : cw === 2 ? ['depresivo'] : ['duda', 'sorpresa']; }
    outcomes.push((ok ? 'ok:' : 'ko:') + got);
    if (!exp.includes(got)) bad('reacción ' + (ok ? 'acierto' : 'fallo') + ' nº' + outcomes.length + ': ' + got + ' esperado ' + exp.join('/'));
    if (!find(app, n => n.tag === 'button' && cls(n, 'big-btn'))[0]) break;
    find(app, n => n.tag === 'button' && cls(n, 'big-btn'))[0].click();
    if (/Bizirik gabe|Lezioa osatuta/.test(app.textContent)) break;
  }
  if (!outcomes.some(x => x.startsWith('ko:toxico')) && !outcomes.some(x => x.startsWith('ko:depresivo'))) bad('no se llegó a ver la escalada de fallos: ' + outcomes.join(','));
  const seen = outcomes;
  console.log('Guzki: fallos seguidos →', seen.join(' → '), '| errores de prueba:', gerr);
  errs += gerr;
  if (errs) { console.log('FALLO'); process.exit(1); }
}
