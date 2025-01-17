const listaUsuarios = [
  {
    nome: 'Guido',
    idade: 32,
    status: true,
  },
  {
    nome: 'Dani',
    idade: 30,
    status: true,
  },
  {
    nome: 'João',
    idade: 40,
    status: false,
  },
  {
    nome: 'Guilherme',
    idade: 29,
    status: true,
  },
  {
    nome: 'Ana',
    idade: 18,
    status: false,
  },
  {
    nome: 'José',
    idade: 28,
    status: false,
  },
];

const filtrarUsuarios = (
  listaUsuarios: {
    nome: string;
    idade: number;
    status: boolean;
  }[],
  filtro: string
): {
  nome: string;
  idade: number;
  status: boolean;
}[] => {
  const resultadoFiltro = listaUsuarios.filter((usuarioLista) => {
    return usuarioLista.nome
      .toLocaleLowerCase()
      .includes(filtro.toLocaleLowerCase());
  });

  return resultadoFiltro;
};

console.log(filtrarUsuarios(listaUsuarios, 'jo'));
