import { act, fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { RecoilRoot } from 'recoil';
import Formulario from './Formulario'

describe('comportamento do formulário', () => {
  test('quando o input estiver vazio o usuário não poderá adicionar', () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    )

    // Verificar se os elementos (input e button) existem no documento

    const input = screen.getByPlaceholderText('Digite o nome');
    const botao = screen.getByRole('button');
    expect(input).toBeInTheDocument();
    expect(botao).toBeDisabled();
  });

  test('adicionar um participante caso o input seja preenchido e o botao adicionar seja clicado', () => {

    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    )

    const input = screen.getByPlaceholderText('Digite o nome');
    const botao = screen.getByRole('button');
    
    fireEvent.change(input, {
      target: {
        value: 'Kayque'
      }
    });

    // Clicar no botão Adicionar
    fireEvent.click(botao);

    // Garantir o focus ativo
    expect(input).toHaveFocus();

    // Garantir que o input não tenha um valor
    expect(input).toHaveValue("");

  });

  test('nomes duplicados não podem ser adicionados na lista', () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    )

    const input = screen.getByPlaceholderText('Digite o nome');
    const botao = screen.getByRole('button');

    //Adicionando o primeiro valor na lista
    fireEvent.change(input, {
      target: {
        value: 'Kayque'
      }
    });

    // Clica no botão de Adicionar
    fireEvent.click(botao);

    //Adicionando o valor duplicado na lista
    fireEvent.change(input, {
      target: {
        value: 'Kayque'
      }
    });

    // Clica no botão de Adicionar
    fireEvent.click(botao);

    // Achando o elemento de mensagem de error

    const mensagemDeErro = screen.getByRole('alert');

    // Adicionando a mensagem de erro

    expect(mensagemDeErro.textContent).toBe('Nome não pode ser repetido');
  });

  test('retirar a mensagem de error depois de N segundos', () => {
    jest.useFakeTimers();
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    )

    const input = screen.getByPlaceholderText('Digite o nome');
    const botao = screen.getByRole('button');

    //Adicionando o primeiro valor na lista
    fireEvent.change(input, {
      target: {
        value: 'Kayque'
      }
    });

    // Clica no botão de Adicionar
    fireEvent.click(botao);

    //Adicionando o valor duplicado na lista
    fireEvent.change(input, {
      target: {
        value: 'Kayque'
      }
    });

    // Clica no botão de Adicionar
    fireEvent.click(botao);

    // Achando o elemento de mensagem de error

    let mensagemDeErro = screen.queryByRole('alert');

    // Verificando se a mensagem está no documento

    expect(mensagemDeErro).toBeInTheDocument();

    // Espera N segundos

    act(() => {
      jest.runAllTimers();
    });

    mensagemDeErro = screen.queryByRole('alert');
    expect(mensagemDeErro).toBeNull();
  });
});