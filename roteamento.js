window.DevForgeRouter = {
  rotas: {
    search: (termo) => {
      const input = document.getElementById("search-input");
      if (input) input.value = termo;
      const lang = localStorage.getItem("premium-lang") || "pt";
      window.paginacaoEstado.filtroProjetos = listaProjetos.filter(p => {
        const projLang = p[lang];
        return projLang.titulo.toLowerCase().includes(termo.toLowerCase()) || 
               projLang.descricao.toLowerCase().includes(termo.toLowerCase());
      });
      window.paginacaoEstado.paginaAtual = 1;
    },
    categoria: (cat) => {
      const lang = localStorage.getItem("premium-lang") || "pt";
      window.paginacaoEstado.filtroProjetos = listaProjetos.filter(p => {
        return p.categoria?.toLowerCase() === cat.toLowerCase() || 
               p[lang]?.categoria?.toLowerCase() === cat.toLowerCase();
      });
      window.paginacaoEstado.paginaAtual = 1;
    },
    pg: (numero) => {
      const num = parseInt(numero, 10);
      if (!isNaN(num) && num > 0) {
        window.paginacaoEstado.paginaAtual = num;
      }
    },
    id: (identificador) => {
      const idNum = parseInt(identificador, 10);
      if (!isNaN(idNum)) {
        setTimeout(() => window.abrirModal(idNum), 150);
      }
    },
    cart: (ativar) => {
      if (ativar === "true" || ativar === "1") {
        setTimeout(() => {
          if (typeof window.abrirMenuCarrinho === "function") {
            window.abrirMenuCarrinho();
          }
        }, 200);
      }
    }
  },
  executar: function () {
    const params = new URLSearchParams(window.location.search);
    let mudouFiltroBase = false;
    ['search', 'categoria'].forEach(rota => {
      const valor = params.get(rota);
      if (valor) {
        this.rotas[rota](valor);
        mudouFiltroBase = true;
      }
    });
    if (!mudouFiltroBase) {
      window.paginacaoEstado.filtroProjetos = [];
    }
    const checkboxes = [
      { id: 'promo-checkbox', param: 'promo' },
      { id: 'featured-checkbox', param: 'featured' },
      { id: 'available-checkbox', param: 'available' }
    ];
    checkboxes.forEach(({ id, param }) => {
      const el = document.getElementById(id);
      if (el) {
        el.checked = params.get(param) === 'true';
      }
    });
    if (params.get('pg')) {
      this.rotas.pg(params.get('pg'));
    }
    ['id', 'cart'].forEach(rota => {
      const valor = params.get(rota);
      if (valor) this.rotas[rota](valor);
    });

    window.uT = () => {
      const btn = document.getElementById("reset-filters-btn");
      if (btn) {
        const urlParams = new URLSearchParams(window.location.search);
        const temFiltroAtivo = ['promo-checkbox', 'featured-checkbox', 'available-checkbox'].some(id => document.getElementById(id)?.checked);
        const temCategoria = urlParams.has('categoria');
        btn.classList.toggle("inactive", temFiltroAtivo || temCategoria);
      }
    };

    if (typeof window.uT === "function") window.uT();
    window.uP();
  }
};


document.addEventListener("DOMContentLoaded",()=>{window.DevForgeRouter.executar();const sF=()=>{const e=new URLSearchParams(window.location.search);[{id:'promo-checkbox',param:'promo'},{id:'featured-checkbox',param:'featured'},{id:'available-checkbox',param:'available'}].forEach(({id,param})=>{const el=document.getElementById(id);if(el&&el.checked){e.set(param,'true')}else{e.delete(param)}});if(window.paginacaoEstado.paginaAtual>1){e.set('pg',window.paginacaoEstado.paginaAtual)}else{e.delete('pg')}window.history.replaceState({},'',e.toString()?`?${e.toString()}`:window.location.pathname)};['promo-checkbox','featured-checkbox','available-checkbox'].forEach(id=>document.getElementById(id)?.addEventListener("change",sF));document.getElementById("reset-filters-btn")?.addEventListener("click",()=>{const e=new URLSearchParams(window.location.search);['promo','featured','available','pg'].forEach(p=>e.delete(p));['promo-checkbox','featured-checkbox','available-checkbox'].forEach(id=>{const el=document.getElementById(id);if(el)el.checked=false});window.paginacaoEstado.paginaAtual=1;if(typeof window.uT==='function')window.uT();window.uP();window.history.replaceState({},'',e.toString()?`?${e.toString()}`:window.location.pathname)})});
