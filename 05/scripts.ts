const palavra: string = 'programador';

const soletrarPalavra = (palavra: string): string => {
  const conjuntoLetras: string = palavra.split('').join('-');

  return conjuntoLetras;
};

console.log(soletrarPalavra(palavra));
