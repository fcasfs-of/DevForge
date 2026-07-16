var listaProjetosBrutos=listaProjetosBrutos;

  if (!listaProjetosBrutos || !Array.isArray(listaProjetosBrutos)) {    listaProjetosBrutos=[];  } 

const projetosValidos = Array.isArray(listaProjetosBrutos) ? listaProjetosBrutos : [];

// Lógica de Autogeração: Varre a lista bruta criando IDs numéricos aleatórios que nunca se repetem
const listaProjetos = projetosValidos.map((projeto, index) => {
  const carimboTempo = Date.now().toString().slice(-4);
  const numeroAleatorio = Math.floor(100 + Math.random() * 900);
  return {
    ...projeto,
    id: parseInt(`${index}${carimboTempo}${numeroAleatorio}`)
  };
});    

