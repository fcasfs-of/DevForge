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
      window.uP();
    },

    categoria: (cat) => {
      const lang = localStorage.getItem("premium-lang") || "pt";
      window.paginacaoEstado.filtroProjetos = listaProjetos.filter(p => {
        return p.categoria?.toLowerCase() === cat.toLowerCase() || 
               p[lang]?.categoria?.toLowerCase() === cat.toLowerCase();
      });
      window.paginacaoEstado.paginaAtual = 1;
      window.uP();
    },

    pg: (numero) => {
      const num = parseInt(numero, 10);
      if (!isNaN(num) && num > 0) {
        window.paginacaoEstado.paginaAtual = num;
        window.uP();
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
    
    Object.keys(this.rotas).forEach(rota => {
      const valor = params.get(rota);
      if (valor) {
        this.rotas[rota](valor);
      }
    });

    const mapeamentoCheckboxes = [
      { id: 'promo-checkbox', param: 'promo' },
      { id: 'featured-checkbox', param: 'featured' },
      { id: 'available-checkbox', param: 'available' }
    ];

    mapeamentoCheckboxes.forEach(({ id, param }) => {
      const el = document.getElementById(id);
      if (el && params.get(param) === 'true') {
        el.checked = true;
      }
    });

    window.uP();
  }
};

document.addEventListener("DOMContentLoaded", () => {
  window.DevForgeRouter.executar();

  const atualizarUrlComFiltros = () => {
    const params = new URLSearchParams(window.location.search);
    const filtros = [
      { id: 'promo-checkbox', param: 'promo' },
      { id: 'featured-checkbox', param: 'featured' },
      { id: 'available-checkbox', param: 'available' }
    ];

    filtros.forEach(({ id, param }) => {
      const el = document.getElementById(id);
      if (el && el.checked) {
        params.set(param, 'true');
      } else {
        params.delete(param);
      }
    });

    const novaUrl = params.toString() ? `?${params.toString()}` : window.location.pathname;
    window.history.replaceState({}, '', novaUrl);
  };

  ['promo-checkbox', 'featured-checkbox', 'available-checkbox'].forEach(id => {
    document.getElementById(id)?.addEventListener("change", atualizarUrlComFiltros);
  });

  document.getElementById("reset-filters-btn")?.addEventListener("click", () => {
    const params = new URLSearchParams(window.location.search);
    ['promo', 'featured', 'available'].forEach(p => params.delete(p));
    
    const novaUrl = params.toString() ? `?${params.toString()}` : window.location.pathname;
    window.history.replaceState({}, '', novaUrl);
  });
});


document.addEventListener("DOMContentLoaded",()=>{window.DevForgeRouter.executar();const uUrl=()=>{const e=new URLSearchParams(window.location.search);['promo-checkbox','featured-checkbox','available-checkbox'].forEach(id=>{const el=document.getElementById(id);const param=id.split('-')[0];if(el&&el.checked){e.set(param,'true')}else{e.delete(param)}});const newW=e.toString()?`?${e.toString()}`:window.location.pathname;window.history.replaceState({},'',newW)};['promo-checkbox','featured-checkbox','available-checkbox'].forEach(id=>document.getElementById(id)?.addEventListener("change",uUrl));document.getElementById("reset-filters-btn")?.addEventListener("click",()=>{const e=new URLSearchParams(window.location.search);['promo','featured','available'].forEach(p=>e.delete(p));const newW=e.toString()?`?${e.toString()}`:window.location.pathname;window.history.replaceState({},'',newW)})});
