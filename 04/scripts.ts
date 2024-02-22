const produto = {
  produto: 'CPU Dual Core 3.0GHZ',
  lote: 321,
  ano: 2022,
  qtd: 5,
};

const gerarEtiquetas = (informacoesProduto: {
  produto: string;
  lote: number;
  ano: number;
  qtd: number;
}): string[] => {
  const { lote, ano, qtd } = informacoesProduto;

  let arrayEtiquetas: string[] = [];

  for (let i = 1; i <= qtd; i++) {
    let etiquetaUnitaria: string = `${lote}-${ano}-${i
      .toString()
      .padStart(3, '0')}`;

    arrayEtiquetas.push(etiquetaUnitaria);
  }

  return arrayEtiquetas;
};

console.log(gerarEtiquetas(produto));
