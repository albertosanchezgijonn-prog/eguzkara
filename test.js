const fs=require('fs');
global.window=global;
const E=require('./core.js'); global.E=E;
for(const f of fs.readdirSync('.').filter(f=>/^content_.*\.js$/.test(f)).sort()) eval(fs.readFileSync(f,'utf8'));
let errs=0; const bad=(m)=>{errs++;console.log('ERR',m)};
console.log('units',E.UNITS.length);
for(const u of E.UNITS){
  for(const L of E.LESSONS){
    for(let r=0;r<5;r++){
      const items=E.buildLesson(u,L.id);
      if(!items.length) bad(u.id+' '+L.id+' empty');
      for(const it of items){
        if(!it.t) bad(u.id+' no type '+JSON.stringify(it));
        if(it.t==='mc'){
          const opts=[it.a,...it.w]; if(new Set(opts).size!==opts.length) bad(u.id+' mc dup '+JSON.stringify(it));
          if(it.w.length<2) bad(u.id+' mc few options '+it.q);
        }
        if(it.t==='fl'){ if(it.opts && !it.opts.includes(it.a)) bad(u.id+' fl opts missing answer '+it.q); if(!it.q.includes('___')&&!/→|:/.test(it.q)) bad(u.id+' fl no blank '+it.q);}
        if(it.t==='tr'){ const t=E.tokens(it.eu); if(!t.every(x=>it.bank.includes(x))) bad('tr bank '+it.eu); }
        if(it.t==='ls'||it.t==='vl'){ const o=[it.a,...it.w]; if(new Set(o).size!==o.length) bad(u.id+' ls dup '+it.eu); }
        if(it.t==='cmp'){ const o=[it.a,...it.w]; if(new Set(o).size!==o.length) bad(u.id+' cmp dup '+it.q);}
      }
    }
  }
  // typed answers check: fl answer present in opts
  const dl=u.d||[]; if(!dl.length) bad(u.id+' no dialog');
}
for(const lv of ['A1','A2','B1','B2','C1']){
  const ex=E.buildExam(E.UNITS.filter(u=>u.lv===lv));
  console.log(lv, ex.map(s=>s.name.split(' ')[0]+':'+s.items.length).join(' '));
}
// sample
const u=E.UNITS[9]; console.log(JSON.stringify(E.buildLesson(u,'gram').slice(0,4),null,1));
console.log('errors',errs);

// Rondas verbales equilibradas: sin repetición y con todos los paradigmas/personas.
const vr=E.tableReviewDeck();
if(vr.length!==E.TABLES.length*6) bad('verb deck length '+vr.length);
if(new Set(vr.map(x=>x.q)).size!==vr.length) bad('verb deck has repeated questions');
for(const T of E.TABLES){
  const rows=vr.filter(x=>x.tag.startsWith('tab-'+T.id+'-'));
  if(rows.length!==6) bad('verb deck missing persons for '+T.id);
  for(let i=0;i<6;i++) if(!rows.some(x=>x.tag==='tab-'+T.id+'-p'+(i+1)&&x.a===T.f[i])) bad('verb deck wrong form '+T.id+' person '+i);
}
const hf=E.habFutureDeck(), fd=E.finalReviewDeck();
if(hf.length!==E.VERBS.length*2||new Set(hf.map(x=>x.q)).size!==hf.length) bad('habitual/future coverage or repeats');
if(fd.length!==E.VERBS.length*2||new Set(fd.map(x=>x.q)).size!==fd.length) bad('finality coverage or repeats');


// Cobertura y calidad estructural de TODAS las unidades (mínimo 15 por nivel)
const LV=['A1','A2','B1','B2','C1']; const ids=new Set();
for (const lv of LV) {
  const us=E.UNITS.filter(u=>u.lv===lv);
  if(us.length<15) bad(lv+' tiene solo '+us.length+' unidades (mínimo 15)');
  console.log(lv,'unidades',us.length,'| palabras',us.reduce((n,u)=>n+u.v.length,0),'| frases',us.reduce((n,u)=>n+u.p.length,0),'| ejercicios escritos',us.reduce((n,u)=>n+(u.x||[]).length,0));
  for (const u of us) {
    if(ids.has(u.id)) bad('id duplicado '+u.id); ids.add(u.id);
    if(!u.g||!u.v||u.v.length<10||!u.p||u.p.length<8||!(u.x&&u.x.length>=8)||!u.d||!u.d.length||((lv==='B1'||lv==='B2'||lv==='C1')&&!(u.w&&u.w.length))) bad(lv+' unidad incompleta '+u.id);
    for(const v of u.v) if(v.length!==2||!v[0]||!v[1]) bad(u.id+' vocabulario mal formado '+JSON.stringify(v));
    for(const p of u.p) if(p.length!==2||!p[0]||!p[1]) bad(u.id+' frase mal formada '+JSON.stringify(p));
    for(const x of u.x||[]){
      if(x.t==='mc'){ if(x.w.includes(x.a)||new Set(x.w).size!==x.w.length||x.w.length<2) bad(u.id+' mc inválido: '+x.q); }
      if(x.t==='fl'){ if(!x.q.includes('___')) bad(u.id+' fl sin hueco: '+x.q); if(x.opts&&!x.opts.includes(x.a)) bad(u.id+' fl sin respuesta en opciones: '+x.q); if(x.opts&&new Set(x.opts).size!==x.opts.length) bad(u.id+' fl opciones repetidas: '+x.q); }
    }
    for(const d of u.d){ if(d.lines.length<3) bad(u.id+' diálogo corto'); for(const q of d.qs){ if(q[2].includes(q[1])||q[2].length<3) bad(u.id+' pregunta de diálogo inválida: '+q[0]); } }
    for(const w of (u.w||[])){ const t=E.norm(w.model); for(const r of w.req) if(!new RegExp(r,'i').test(t)) bad(u.id+' el modelo de escritura no cumple req «'+r+'»'); }
    for(const L of E.LESSONS) if(!E.buildLesson(u,L.id).length) bad(lv+' lección vacía '+u.id+' '+L.id);
  }
}
const allText=JSON.stringify(E.UNITS); if(/gau on/i.test(allText)) bad('queda «Gau on»');

if(errs) process.exit(1);
