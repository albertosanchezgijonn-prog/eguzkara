const fs=require('fs'); global.fs=fs;
let src=fs.readFileSync('smoke.js','utf8');
src=src.split("let total=0;")[0]; // reutiliza stub + helpers
src=src.replace("const fs=require('fs');","").replace("const app=","global.app=").replace("const find=","global.find=").replace("const cls=","global.cls=").replace("const api=","global.api=").replace("let errs=0;","global.errs=0;");
(0,eval)(src);
const click=(pred)=>{const b=find(app,pred)[0]; if(!b) throw new Error('no btn'); b.click(); return b;};
const tabs=['Ruta','Práctica','Examen','Guía','Ajustes'];
for(const t of tabs){ click(n=>n.tag==='button'&&cls(n,'tab')&&n.textContent.includes(t)); console.log('tab',t,'ok',app.textContent.length); }
// práctica: pulsa todas las tarjetas y resuelve 2 ejercicios
click(n=>n.tag==='button'&&cls(n,'tab')&&n.textContent.includes('Práctica'));
const nCards=find(app,n=>n.tag==='button'&&cls(n,'card')).length; console.log('cards',nCards);
for(let i=0;i<nCards;i++){
  click(n=>n.tag==='button'&&cls(n,'tab')&&n.textContent.includes('Práctica'));
  find(app,n=>n.tag==='button'&&cls(n,'card'))[i].click();
  const top=find(app,n=>cls(n,'lesson'))[0]; console.log('card',i,top?'lesson started':'(alert/none)');
  // cerrar
  const x=find(app,n=>cls(n,'x'))[0]; if(x) x.click();
}
// Fallos: lección con respuestas erróneas hasta perder vidas
const u=E.UNITS[0]; const items=E.buildLesson(u,'gram'); let exited=false;
api.runLesson(items,{onExit:()=>{exited=true},onRetry:()=>{},onDone:()=>{}});
let guard=0;
while(!/Bizirik gabe/.test(app.textContent)&&guard++<40){
  const opts=find(app,n=>n.tag==='button'&&cls(n,'opt'));
  if(opts.length){ // elige incorrecta
    const wrong=opts.find(o=>true); wrong.click();
  } else { const inp=find(app,n=>n.tag==='input')[0]; if(inp){inp.value='zzz';inp.dispatch('input')} }
  const p=find(app,n=>n.tag==='button'&&cls(n,'big-btn'))[0]; p.click(); // check
  const fb=find(app,n=>cls(n,'fb'))[0];
  find(app,n=>n.tag==='button'&&cls(n,'big-btn'))[0].click(); // next
}
console.log('fail screen reached:',/Bizirik gabe/.test(app.textContent),'guard',guard);
// Examen
api.render();
click(n=>n.tag==='button'&&cls(n,'tab')&&n.textContent.includes('Examen'));
click(n=>n.tag==='button'&&cls(n,'card')&&n.textContent.includes('A2'));
let steps=0; 
while(find(app,n=>cls(n,'lesson')).length&&steps++<200){
  // responde cualquier cosa lo más simple
  const opts=find(app,n=>n.tag==='button'&&cls(n,'opt')&&!n._s);
  const inp=find(app,n=>n.tag==='input'||n.tag==='textarea')[0];
  const mtL=find(app,n=>n.tag==='button'&&cls(n,'opt')&&n._s==='L');
  if(mtL.length){ const R=find(app,n=>n.tag==='button'&&cls(n,'opt')&&n._s==='R'); /* wrong on purpose until errs */ for(const l of mtL){} /* ready needs all matched: do correct via item? skip */ 
     // resolver de verdad: busca el item en cola no accesible → pruebo combinaciones
     for(const l of mtL){ for(const r of R){ if(r.disabled||l.disabled) continue; l.click(); r.click(); if(l.disabled) break; } }
  }
  else if(opts.length) opts[0].click(); else if(inp){inp.value='kaixo ni naiz';inp.dispatch('input')} else { const sb=find(app,n=>n.tag==='button'&&/autoevaluar|Lo he dicho bien/.test(n.textContent))[0]; if(sb) sb.click(); else { const tk=find(app,n=>n.tag==='button'&&cls(n,'tok')&&n.parent&&cls(n.parent,'pool')&&!cls(n,'used'))[0]; if(tk) tk.click(); } }
  const p=find(app,n=>n.tag==='button'&&cls(n,'big-btn'))[0]; if(!p||p.disabled){ console.log('stuck at step',steps, app.textContent.slice(0,100)); break; } p.click();
}
console.log('exam steps',steps,'result:',app.textContent.slice(0,200));
