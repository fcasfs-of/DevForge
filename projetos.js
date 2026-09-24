var listaProjetosBrutos=listaProjetosBrutos;

  if (!listaProjetosBrutos || !Array.isArray(listaProjetosBrutos)) {    listaProjetosBrutos=[];  } 

const projetosValidos = Array.isArray(listaProjetosBrutos) ? listaProjetosBrutos : [];


const listaProjetos = projetosValidos.map((projeto, index) => {
  if (projeto.id) {    return projeto;  }

  const carimboTempo = Date.now();
  const numeroAleatorio = Math.floor(Math.random() * 10000);
  
  return {
    ...projeto,
    id: parseInt(`${carimboTempo}${index}${numeroAleatorio}`)
  };
});

