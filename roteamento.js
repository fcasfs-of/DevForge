window.DevForgeRouter = {
    rotas: {
        lang: (idioma) => { 
            if(idioma){ r=idioma?"en":"pt";  uI(); }
        },
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
            if (ativar === "true" || activar === "1") {
                setTimeout(() => {
                    if (typeof window.abrirMenuCarrinho === "function") {
                        window.abrirMenuCarrinho();
                    }
                }, 200);
            }
        }
    },
    executar:function(){const e=new URLSearchParams(window.location.search);Object.keys(this.rotas).forEach(t=>{const a=e.get(t);a&&this.rotas[t](a)})}
};document.addEventListener("DOMContentLoaded",()=>window.DevForgeRouter.executar());
