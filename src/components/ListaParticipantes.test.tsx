import React from "react";
import { render, screen } from '@testing-library/react';
import { RecoilRoot } from "recoil";
import ListaParticipantes from "./ListaParticipantes";
import { useListaDeParticipantes } from "../states/hook/useListaDeParticipantes";

jest.mock('../states/hook/useListaDeParticipantes', () =>{
  return {
    useListaDeParticipantes: jest.fn()
  }
})

describe('mostrando uma lista vazia de participantes', () => {
  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue([])
  });
  test('mostrar lista vazia', () =>{
    render(
      <RecoilRoot>
        <ListaParticipantes />
      </RecoilRoot>
    )

    // Renderizar uma lista vazia de items

    const items = screen.queryAllByRole('listitem');
    expect(items).toHaveLength(0);
  })
});

describe('mostrando uma lista preenchida de participantes', () =>{
  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue(participantesList)
  });
  const participantesList = ['Kayque', 'Patricia'];
  
  test('quando a lista tiver mais de 1 nome', () => {
    render(
      <RecoilRoot>
        <ListaParticipantes />
      </RecoilRoot>
    )

    const items = screen.queryAllByRole('listitem');
    expect(items).toHaveLength(participantesList.length);

  })
});