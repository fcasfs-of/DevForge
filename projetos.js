function verificarLista(lista) {  return lista && lista.length > 0 ? lista : [];     }
let listaProjetosBrutodfs = listaProjetosBrutos ?? verificarLista(listaProjetosBrutos);

// Lógica de Autogeração: Varre a lista bruta criando IDs numéricos aleatórios que nunca se repetem
const listaProjetos = listaProjetosBrutodfs.map((projeto, index) => {
  const carimboTempo = Date.now().toString().slice(-4);
  const numeroAleatorio = Math.floor(100 + Math.random() * 900);
  return {
    ...projeto,
    id: parseInt(`${index}${carimboTempo}${numeroAleatorio}`)
  };
});

