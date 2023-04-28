import { realizarSorteio } from "./realizarSorteio";

describe('dado um sorteio de uma lista de participantes', () => {
  test('sortear a quantidade que receber de participantes',  () => {
    const participantes = 3;
    const listParticipante = [
      'Kayque',
      'Patricia',
      'Isabella'
    ]
    const sorteio = realizarSorteio(listParticipante, participantes);
 
  });
});