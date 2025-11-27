// Same minimal client-side BibTeX renderer (fallback for non-built sites)
(function(){
  function parseBib(bibtext){
    const entries = [];
    const parts = bibtext.split(/\n@/).map((p,i)=> (i?('@'+p):p));
    for(const p of parts){
      const m = p.match(/^@([a-zA-Z]+)\s*\{\s*([^,]+),([\s\S]*)\}\s*$/m);
      if(!m) continue;
      const [,type,key,body] = m;
      const fields = {};
      body.split(/,(?=[^}]*\b[a-z_]+\s*=)/i).forEach(field=>{
        const fm = field.match(/\s*([a-zA-Z_]+)\s*=\s*\{([\s\S]*)\}\s*$/m);
        if(fm) fields[fm[1].toLowerCase()] = fm[2].replace(/\s+/g,' ').trim();
      });
      entries.push({type,key,fields});
    }
    return entries;
  }
  function render(entries){
    if(!entries.length) return '<p>No publications found in publications/bibliography.bib</p>';
    const list = document.createElement('ol');
    entries.forEach(e=>{
      const li = document.createElement('li');
      const f = e.fields;
      const title = f.title || e.key;
      const authors = f.author || '';
      const year = f.year ? (' ('+f.year+')') : '';
      const venue = f.journal || f.booktitle || '';
      const href = f.url ? (' <a href="'+f.url+'" target="_blank">[pdf]</a>') : '';
      li.innerHTML = '<strong>'+title+'</strong> — '+authors + (venue?(' — '+venue):'') + year + href;
      list.appendChild(li);
    });
    return list;
  }
  async function loadAndRender(){
    try{
      const resp = await fetch('{{ "/publications/bibliography.bib" | relative_url }}'.replace(/\{\{.*?\}\}/,'/publications/bibliography.bib'));
      if(!resp.ok) throw new Error('bib not found');
      const bib = await resp.text();
      const entries = parseBib(bib);
      const container = document.getElementById('publications-list');
      const rendered = render(entries);
      if(typeof rendered === 'string') container.innerHTML = rendered;
      else { container.innerHTML=''; container.appendChild(rendered); }
    }catch(err){
      const c = document.getElementById('publications-list');
      if(c) c.innerHTML = '<p>Could not load publications/bibliography.bib — place your .bib file in /publications/</p>';
      console.warn(err);
    }
  }
  if(document.getElementById('publications-list')) loadAndRender();
})();
