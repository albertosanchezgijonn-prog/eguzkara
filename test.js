const fs=require('fs');
global.window=global;
const E=require('./core.js'); global.E=E;
for(const f of ['content_a1a.js','content_a1b.js','content_a2a.js','content_a2b.js','content_b1.js','content_b2.js']) eval(fs.readFileSync(f,'utf8'));
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
for(const lv of ['A1','A2','B1','B2']){
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

for (const lv of ['B1','B2']) {
 const us=E.UNITS.filter(u=>u.lv===lv);
 if(us.length!==6) bad(lv+' expected six units, got '+us.length);
 for(const u of us){
   if(!u.g||!u.v||u.v.length<8||!u.p||u.p.length<6||!u.d||!u.w) bad(lv+' incomplete unit '+u.id);
   for(const lesson of E.LESSONS) if(!E.buildLesson(u,lesson.id).length) bad(lv+' empty lesson '+u.id+' '+lesson.id);
 }
}

if(errs) process.exit(1);
