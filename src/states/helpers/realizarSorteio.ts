import shuffle from "just-shuffle";

export function realizarSorteio(participantes: string[], qtdParaSortear: number){

  const totalDeParticipantes = participantes.length;
  const embaralhado = shuffle(participantes);
  const resultado = [];
  let qtdParaSorteio = qtdParaSortear;

  for(let index = 0; index < totalDeParticipantes; index++) {
    const indexDoAmigo = index === (totalDeParticipantes -1) ? 0 : index + 1;
    // resultado.set(embaralhado[index], embaralhado[indexDoAmigo]);
    if(!(embaralhado[index] === embaralhado[indexDoAmigo]))
      resultado.push(embaralhado[indexDoAmigo])

  }

  return resultado;
}