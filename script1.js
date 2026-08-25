function btnHomeRt_stare(btnHomeRt,lnf){
  if (lnf){ 	   if(typeof btnHomeRt.atualizar === 'function'){  
   var criarMenuReftorno_on=lnf;
 if(criarMenuReftorno_on=="pt"){   criarMenuReftorno_on="";   }
    btnHomeRt.atualizar({ idioma:lnf, urlPrincipal: 'https://fcasfs-of.cloud-fs.net/'+criarMenuReftorno_on });  }  }
}
function btnHomeRt_scolo(btnHomeRt,lnf){
  if (lnf){ 	   if(typeof btnHomeRt.atualizar === 'function'){  
 if(lnf==="dark"){       btnHomeRt.atualizar({        corFundo: '#111827',    corTexto: '#9ca3af',    corHover: '#1f2937',   bordaCor: '#3b82f6',    bordaTamanho: '2px' });     }
 else {       btnHomeRt.atualizar({           corFundo: '#2563eb',    corTexto: '#ffffff',    corHover: '#1d4ed8',  bordaCor: '#3b82f6',    bordaTamanho: '2px' });     }
  }  }
}
 

function gerarMenu(ff, l, i, id, config) { const m = ff; if (m && typeof criarSidebar === "function") { m.innerHTML = criarSidebar(l, i, id); if (typeof SidebarAPI !== "undefined" && typeof SidebarAPI.configurar === "function") SidebarAPI.configurar(config); } }
function adicionarDestaqueF(topo, e) { var d = verificarDestaque(topo); if (e && d !== null && d !== undefined && d !== "") e.classList.add(d); }

document.addEventListener("DOMContentLoaded",function(){const menuPP=document.getElementById("modal-menu"),e=document.getElementById("modal-projeto"),t=document.getElementById("close-modal"),n=document.getElementById("modal-body"),o=document.getElementById("search-input"),d=document.getElementById("lang-toggle"),a=document.getElementById("lang-text"),c=document.getElementById("theme-toggle"),s=document.getElementById("theme-icon"),l=document.getElementById("hero-title"),i=document.getElementById("hero-desc"),gL=()=>window.sysConfig?.chaveIdioma||"premium-lang",gT=()=>window.sysConfig?.chaveTheme||"premium-theme";let r=localStorage.getItem(gL())||"pt",m=localStorage.getItem(gT())||"dark";const g={pt:{heroTitle:"Ecossistema de Códigos Premium",heroDesc:"Adquira soluções prontas, arquiteturas escaláveis e aplicações de alta performance projetadas com as melhores práticas de mercado para acelerar o desenvolvimento do seu negócio.",searchPlace:"Buscar projetos por nome ou descrição...",version:"Versão",techs:"Tecnologias Inclusas:",buy:"Comprar Projeto",soldout:"Não disponível"},en:{heroTitle:"Premium Code Ecosystem",heroDesc:"Acquire production-ready solutions, scalable architectures, and high-performance applications engineered with market best practices to accelerate your business development.",searchPlace:"Search projects by name or description...",version:"Version",techs:"Included Technologies:",buy:"Buy Project",soldout:"Unavailable"}};function h(){document.body.className=m+"-theme",s.innerHTML="dark"===m?'<path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.38 5.38 0 0 1-7.54-7.54C12.92 3.04 12.46 3 12 3zm0 2c.29 0 .58.02.86.05a7.38 7.38 0 0 0 9.09 9.09c.03.28.05.57.05.86a7 7 0 1 1-10-10z" fill="currentColor"/>':'<path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0-7a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1zm0 17a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1zM4.22 5.64a1 1 0 0 1 1.42 0l.7.7a1 1 0 1 1-1.42 1.42l-.7-.7a1 1 0 0 1 0-1.42zm12.02 12.02a1 1 0 0 1 1.42 0l.7.7a1 1 0 1 1-1.42 1.42l-.7-.7a1 1 0 0 1 0-1.42zM2 12a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1zm17 0a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1zM6.64 16.24a1 1 0 0 1 0 1.42l-.7.7a1 1 0 1 1-1.42-1.42l.7-.7a1 1 0 0 1 1.42 0zm12.02-12.02a1 1 0 0 1 0 1.42l-.7.7a1 1 0 1 1-1.42-1.42l.7-.7a1 1 0 0 1 1.42 0z" fill="currentColor"/>'}function uI(){l.textContent=g[r].heroTitle,i.textContent=g[r].heroDesc,o.placeholder=g[r].searchPlace,a.textContent="pt"===r?"EN":"PT",setTimeout(()=>{verificarEIniciar(r,m);window.uP&&window.uP();gerarMenu(menuPP,minhaListaDeMenus,r,'menu-toggle',{itensPorPagina:12,exibirIcones:true,titulo:'Painel'});},50)}window.abrirModal=function(t){const o=listaProjetos.find(e=>e.id===t);if(!o)return;const d=o[r],s=o.disponivel!==!1,l=s?g[r].buy:g[r].soldout,i=s?`onclick="executarCompra(${o.id})"`:`style="opacity:0.4;cursor:not-allowed" disabled`;n.innerHTML=`<div class="modal-body-content" data-show="${t}"><h2 style="display:inline-flex;align-items:center;gap:0.75rem"><svg viewBox="0 0 24 24" width="32" height="32" style="color:var(--accent);flex-shrink:0;display:block">${o.iconeSvg}</svg><span>${d.titulo}</span></h2><p style="color:var(--text-muted)">${g[r].version}: <strong>${o.versao}</strong></p><p>${d.descricao}</p><h3>${g[r].techs}</h3><div class="modal-techs">${o.tecnologias.map(e=>`<span class="modal-tech-item" style="display:inline-flex;align-items:center;gap:0.35rem"><svg viewBox="0 0 24 24" width="16" height="16" style="display:block;flex-shrink:0">${e.icone}</svg><span>${e.nome}</span></span>`).join("")}</div><div style="display:flex;justify-content:space-between;align-items:center;margin-top:auto;padding-top:1.5rem;border-top:1px solid var(--border);width:100%;gap:1rem;flex-wrap:wrap"><span class="price" style="font-size:1.8rem">R$ ${o.preco}</span><button class="btn" ${i} style="display:inline-flex;align-items:center;justify-content:center;gap:0.5rem"><svg viewBox="0 0 24 24" width="18" height="18" style="display:block;flex-shrink:0"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" fill="currentColor"/></svg><span>${l}</span></button></div> ${criarAviso(r,o.promo)} </div>`,adicionarDestaqueF(o.topo,e),e.classList.add("active")},t.addEventListener("click",function(){e.classList.remove("destaque");e.classList.remove("active")}),e.addEventListener("click",function(t){t.target===e&&e.classList.remove("active"),e.classList.remove("destaque")}),o.addEventListener("input",function(e){const t=e.target.value.toLowerCase();window.paginacaoEstado.filtroProjetos=listaProjetos.filter(e=>{const n=e[r];return n.titulo.toLowerCase().includes(t)||n.descricao.toLowerCase().includes(t)}),window.paginacaoEstado.paginaAtual=1,window.uP&&window.uP()}),d.addEventListener("click",function(){r="pt"===r?"en":"pt",localStorage.setItem(gL(),r),uI(),btnHomeRt_stare(btnHomeRt,r)}),c.addEventListener("click",function(){m="dark"===m?"light":"dark",localStorage.setItem(gT(),m),h(),btnHomeRt_scolo(btnHomeRt,m)}),h(),uI()});



var cokk_plu_idf="pt";
var btnHomeRt;

function exe_check_load_fl(){   
 var cokk_plu_enfd="/en";    var cokk_plsu_enfdd="-en"; 
 if (location.href.toUpperCase().indexOf(cokk_plu_enfd.toUpperCase()) > -1) {    cokk_plu_idf="en";    }
 if (location.href.toUpperCase().indexOf(cokk_plsu_enfdd.toUpperCase()) > -1) {    cokk_plu_idf="en";    }


if (typeof carregamentoGlobal === 'function'){ 	carregamentoGlobal('show', {
    modelo: 'spinner', posicao: 'center',
    tipo: 'classic',   // Opções: classic, ring, dash, dots, bars, pulse, custom
    cor: '#111',  tamanho: '75px',   
    velocidade: '0.8s', arredondamento: '20px',
    fundoOpacity: 0.8,  
    autoDetect: true,
    mostrarPorcentagem: false, texto: ''
});   }


 if (typeof criarMenuRetorno === 'function'){ 	
 var criarMenuRetorno_on=cokk_plu_idf;
 if(criarMenuRetorno_on=="pt"){   criarMenuRetorno_on="";   }
 
btnHomeRt = criarMenuRetorno({
    idioma: cokk_plu_idf,
    fixo: false, novaAba: false,
    posicao: 'top-center',
    estaticoLarguraToda: true, alinhamento: 'center',arredondamento: '50px', estaticoLarguraInclui_arredondamento:true, 
    negrito: true,    italico: false,    sublinhado: false,
    efeitoTransicao: true,
    urlPrincipal: 'https://fcasfs-of.cloud-fs.net/'+criarMenuRetorno_on
});

btnHomeRt_scolo(btnHomeRt,localStorage.getItem(gT())||"dark");
  
}

}

function injetarScriptHome(isHead) {
 cokk_plu_idf=localStorage.getItem(window.sysConfig?.chaveIdioma||"premium-lang")||"pt";   
 
    var scriptHomeex = document.createElement('script');
    scriptHomeex.src = 'https://fcasfs-of.cloud-fs.net/core_k.js';
    scriptHomeex.onload = function() {
        if (typeof exe_check_load_fl === 'function') {
            exe_check_load_fl();
        }
    };
    var alvo = isHead 
        ? document.getElementsByTagName('head')[0] 
        : document.getElementsByTagName('body')[0];
    alvo.appendChild(scriptHomeex);
}


injetarScriptHome(false);



