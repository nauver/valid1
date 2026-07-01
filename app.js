
let currentSubject = localStorage.getItem('trad_v21_subject') || SUBJECTS[0].id;
let reviews = JSON.parse(localStorage.getItem('trad_v21_reviews') || '{}');
let locks = JSON.parse(localStorage.getItem('trad_v21_locks') || '{}');
const app = document.getElementById('app');

function html(s){ return String(s || '').replace(/[&<>"']/g, function(m){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]; }); }
function bySubject(id){ return QUESTIONS.filter(function(q){ return q.subjectId === id; }); }
function save(){ localStorage.setItem('trad_v21_reviews', JSON.stringify(reviews)); localStorage.setItem('trad_v21_locks', JSON.stringify(locks)); localStorage.setItem('trad_v21_subject', currentSubject); }
function statusOf(q){ return (reviews[q.id] && reviews[q.id].status) ? reviews[q.id].status : 'À valider'; }
function commentOf(q){ return (reviews[q.id] && reviews[q.id].comment) ? reviews[q.id].comment : ''; }
function counts(){
  let c = {OK:0, 'À reformuler':0, 'À remplacer':0, Doublon:0, 'À valider':0};
  QUESTIONS.forEach(function(q){ let s=statusOf(q); c[s]=(c[s]||0)+1; });
  return c;
}
function subjectStatus(id){
  if(locks[id]) return 'done';
  let st = bySubject(id).map(statusOf);
  if(st.some(function(s){return s==='À remplacer'||s==='Doublon';})) return 'problem';
  if(st.some(function(s){return s==='À reformuler';})) return 'review';
  if(st.every(function(s){return s==='OK';})) return 'done';
  return '';
}
function progressSubject(id){
  let arr=bySubject(id); let done=arr.filter(function(q){return statusOf(q)!=='À valider';}).length;
  return Math.round(done/arr.length*100);
}
function renderQuestion(q){
  let locked = !!locks[q.subjectId];
  let out = '';
  out += '<div class="qcard '+(locked?'locked':'')+'">';
  out += '<div><span class="pill">'+html(q.id)+'</span><span class="pill">'+html(q.type)+'</span><span class="pill">Statut : '+html(statusOf(q))+'</span></div>';
  out += '<div class="question">'+html(q.question)+'</div>';
  out += '<div class="answers">';
  q.answers.forEach(function(a,idx){ out += '<div class="answer '+(a===q.correct?'correct':'')+'">'+String.fromCharCode(65+idx)+'. '+html(a)+'</div>'; });
  out += '</div>';
  out += '<div class="explanation"><strong>Bonne réponse :</strong> '+html(q.correct)+'<br><br><strong>Explication :</strong> '+html(q.explanation)+'</div>';
  out += '<h4>Commentaire</h4><textarea class="comment" id="comment_'+html(q.id)+'" '+(locked?'disabled':'')+'>'+html(commentOf(q))+'</textarea>';
  out += '<div class="actions">';
  out += '<button class="btn ok" onclick="setStatus(\''+q.id+'\',\'OK\')" '+(locked?'disabled':'')+'>OK</button>';
  out += '<button class="btn rewrite" onclick="setStatus(\''+q.id+'\',\'À reformuler\')" '+(locked?'disabled':'')+'>À reformuler</button>';
  out += '<button class="btn replace" onclick="setStatus(\''+q.id+'\',\'À remplacer\')" '+(locked?'disabled':'')+'>À remplacer</button>';
  out += '<button class="btn dup" onclick="setStatus(\''+q.id+'\',\'Doublon\')" '+(locked?'disabled':'')+'>Doublon</button>';
  out += '</div></div>';
  return out;
}
function render(){
  let c=counts(); let subj=SUBJECTS.find(function(s){return s.id===currentSubject;}) || SUBJECTS[0]; let rows=bySubject(subj.id);
  let out='';
  out += '<div class="top"><h1>Validation V2.1 — Quiz Traditions par sujet</h1></div><div class="wrap">';
  out += '<div class="summary"><div class="sum">Questions<br>'+QUESTIONS.length+'</div><div class="sum">OK<br>'+c.OK+'</div><div class="sum">À reformuler<br>'+c['À reformuler']+'</div><div class="sum">À remplacer<br>'+c['À remplacer']+'</div><div class="sum">Doublons<br>'+c.Doublon+'</div></div>';
  out += '<div class="grid"><div class="side"><h2>Sujets</h2>';
  SUBJECTS.forEach(function(s){ out += '<button class="subject '+(s.id===subj.id?'active ':'')+subjectStatus(s.id)+'" onclick="selectSubject(\''+s.id+'\')">'+(locks[s.id]?'🔒 ':'')+html(s.name)+'<br><small>'+html(s.id)+'</small></button>'; });
  out += '<div class="actions"><button class="btn ghost" onclick="exportJSON()">Exporter JSON</button><button class="btn ghost" onclick="copyCSV()">Copier CSV</button><button class="btn replace" onclick="resetAll()">Reset local</button></div></div>';
  out += '<div class="main"><h2>'+html(subj.name)+'</h2><span class="pill">'+html(subj.id)+'</span><span class="pill">'+rows.length+' questions</span><span class="pill">'+(locks[subj.id]?'Sujet verrouillé':'Sujet modifiable')+'</span>';
  out += '<div class="progress"><div class="bar" style="width:'+progressSubject(subj.id)+'%"></div></div>';
  out += '<div class="actions"><button class="btn ok" onclick="validateSubject()">Valider/verrouiller le sujet</button><button class="btn ghost" onclick="unlockSubject()">Déverrouiller</button><button class="btn nav" onclick="nextSubject()">Sujet suivant</button></div>';
  rows.forEach(function(q){ out += renderQuestion(q); });
  out += '<div id="export"></div></div></div></div>';
  app.innerHTML = out;
}
function saveVisibleComments(){
  bySubject(currentSubject).forEach(function(q){ let el=document.getElementById('comment_'+q.id); if(el){ reviews[q.id] = Object.assign({status:statusOf(q)}, reviews[q.id]||{}, {comment:el.value}); }});
  save();
}
function selectSubject(id){ saveVisibleComments(); currentSubject=id; save(); render(); }
function setStatus(id,status){ let q=QUESTIONS.find(function(x){return x.id===id;}); let el=document.getElementById('comment_'+id); reviews[id]={status:status, comment:el?el.value:'', question:q?q.question:''}; save(); render(); }
function validateSubject(){ saveVisibleComments(); bySubject(currentSubject).forEach(function(q){ if(!reviews[q.id]) reviews[q.id]={status:'OK',comment:''}; if(reviews[q.id].status==='À valider') reviews[q.id].status='OK'; }); locks[currentSubject]=true; save(); render(); }
function unlockSubject(){ delete locks[currentSubject]; save(); render(); }
function nextSubject(){ let idx=SUBJECTS.findIndex(function(s){return s.id===currentSubject;}); selectSubject(SUBJECTS[(idx+1)%SUBJECTS.length].id); }
function exportJSON(){ saveVisibleComments(); let el=document.getElementById('export'); el.innerHTML='<h3>Export JSON</h3><pre>'+html(JSON.stringify({reviews:reviews, locks:locks}, null, 2))+'</pre>'; }
function copyCSV(){
  saveVisibleComments();
  let rows=[['Question_ID','Subject_ID','Subject','Type','Status','Locked','Comment','Question','Correct']];
  QUESTIONS.forEach(function(q){ let r=reviews[q.id]||{status:'À valider',comment:''}; rows.push([q.id,q.subjectId,q.subject,q.type,r.status,locks[q.subjectId]?'YES':'NO',r.comment||'',q.question,q.correct]); });
  let csv=rows.map(function(r){return r.map(function(v){return '"'+String(v).replaceAll('"','""')+'"';}).join(';');}).join('\n');
  if(navigator.clipboard) navigator.clipboard.writeText(csv);
  document.getElementById('export').innerHTML='<h3>CSV copié / à copier</h3><pre>'+html(csv)+'</pre>';
}
function resetAll(){ if(confirm('Effacer toute la validation locale ?')){ localStorage.removeItem('trad_v21_reviews'); localStorage.removeItem('trad_v21_locks'); localStorage.removeItem('trad_v21_subject'); reviews={}; locks={}; currentSubject=SUBJECTS[0].id; render(); } }
render();
