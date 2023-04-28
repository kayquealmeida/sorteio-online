import { atom } from 'recoil';


export const listaParticipanteState = atom<string[]>({
  key: 'listaParticipanteState',
  default: []
});

export const erroState = atom<string>({
  key: 'erroState',
  default: ''
});

export const qtdSortar = atom<number>({
  key: 'qtdSortear',
  default: 0
})

export const resultadoDoSorteio = atom<string[]>({
  key:'resultadoDoSorteio',
  default: []
});