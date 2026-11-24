/* Camada de armazenamento do Selo de Risco de IA.
   Hoje (opção A): o acervo vive no localStorage do navegador, com os 7 registros
   de partida lidos de dados/acervo-inicial.json.
   Para trocar por um acervo compartilhado (Supabase, Firebase, API própria),
   reimplemente apenas a função criarBanco() mantendo a mesma interface:
     banco.collection('avaliacoes').doc(id).set(obj)  -> Promise
     banco.collection('avaliacoes').onSnapshot(cb, erroCb), com cb({docs:[{id, data()}]}) */
(function(){
  const CHAVE = 'selo-acervo-v1';
  const SEMENTE = 'dados/acervo-inicial.json';

  function ler(){ try{ return JSON.parse(localStorage.getItem(CHAVE) || 'null'); }catch(e){ return null; } }
  function gravar(estado){
    try{ localStorage.setItem(CHAVE, JSON.stringify(estado)); }
    catch(e){ const err = new Error('quota'); err.code = 'quota_exceeded'; throw err; }
  }

  async function criarBanco(){
    let estado = ler();
    if(!estado){
      const r = await fetch(SEMENTE, {cache:'no-cache'});
      if(!r.ok) throw new Error('semente indisponível');
      const sem = await r.json();
      estado = {semeadoEm: sem.em, docs: {}};
      (sem.docs || []).forEach(d => { estado.docs[d.id] = d; });
      gravar(estado);
    }
    const ouvintes = new Set();
    const instantaneo = () => ({docs: Object.entries(estado.docs).map(([id, d]) => ({id, data: () => d}))});
    const avisar = () => ouvintes.forEach(cb => cb(instantaneo()));
    return {
      collection(){
        return {
          doc(id){
            return { async set(obj){ estado.docs[id] = obj; gravar(estado); avisar(); } };
          },
          onSnapshot(cb){ ouvintes.add(cb); cb(instantaneo()); return () => ouvintes.delete(cb); }
        };
      }
    };
  }

  const downloads = {
    async save({filename, data}){
      const url = URL.createObjectURL(new Blob([data], {type:'text/html;charset=utf-8'}));
      const a = Object.assign(document.createElement('a'), {href:url, download:filename});
      document.body.appendChild(a); a.click(); a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    }
  };

  window.SeloStorage = { criarBanco, downloads };
})();
