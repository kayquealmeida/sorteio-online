import { render, screen } from "@testing-library/react";
import { RecoilRoot } from 'recoil';
import React from "react";
import { useListaDeParticipantes } from "../states/hook/useListaDeParticipantes";
import Sorteio from "./Sorteio";

jest.mock('../states/hook/useListaDeParticipantes', () =>{
  return {
    useListaDeParticipantes: jest.fn()
  }
})


describe('verificando se existe elemntos na tela' , () => {
  test('se existe input e botao desativado', ()=> {
    render(<RecoilRoot>
      <Sorteio />
    </RecoilRoot>)

    const input = screen.getByPlaceholderText('ex: 1');
    const botao = screen.getByRole('button');

    expect(input).toBeInTheDocument();
    expect(botao).toBeDisabled();
  })
});




describe('desabilitar botao de sortear quando a lista estiver vazia', () => {

  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue([])
  });

  test('não pode realizar o sorteio com lista vazia',  () => {
    render(<RecoilRoot>
      <Sorteio />
    </RecoilRoot>)

      const botao = screen.getByRole('button');
      expect(botao).toBeDisabled();
  })

})