function gerarMenu(ff, l, i, id, config) { const m = ff; if (m && typeof criarSidebar === "function") { m.innerHTML = criarSidebar(l, i, id); if (typeof SidebarAPI !== "undefined" && typeof SidebarAPI.configurar === "function") SidebarAPI.configurar(config); } }
function adicionarDestaqueF(topo, e) { var d = verificarDestaque(topo); if (e && d !== null && d !== undefined && d !== "") e.classList.add(d); }

