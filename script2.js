    var mserros={pt:{btn:"Voltar ao Ecossistema", tl:"Recurso Indisponível ou Inexistente",desc:"A página ou aplicação que você tentou acessar não foi encontrada em nossa forja de software. <br/> Verifique a URL digitada ou retorne ao catálogo principal."}, en:{btn:"Return to the Ecosystem", tl:"Feature Unavailable or Non-existent", desc:"The page or application you tried to access was not found in our software forge. <br/> Check the URL you entered or return to the main catalog."}};
    
        document.addEventListener("DOMContentLoaded", function() {
        const apg_app=document.getElementById("pageerros");
            const chaveTema = window.sysConfig?.chaveTheme || "premium-theme";
        const chaveIdioma = window.sysConfig?.chaveIdioma || "pt";
            const temaSalvo = localStorage.getItem(chaveTema) || "dark";
         const idiomasSalvo = localStorage.getItem(chaveIdioma) || "pt";
            
            apg_app.innerHTML=`<div class="error-code">404</div>            <h2 class="error-title">${mserros[idiomasSalvo].tl}</h2>            <p class="error-desc">${mserros[idiomasSalvo].desc}</p>            <a href="index.html" class="btn" style="display:inline-flex;align-items:center;justify-content:center;gap:0.5rem;text-decoration:none;padding:1rem 2rem;font-size:1.05rem">                <svg viewBox="0 0 24 24" width="18" height="18" style="display:block;flex-shrink:0"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" fill="currentColor"/></svg>                <span>${mserros[idiomasSalvo].btn}</span>           </a>`;            
            document.body.className = temaSalvo + "-theme";
        });
