import { useRef, useState } from "react";
import { useMensagemDeErro } from "../states/hook/useMensagemDeErro";
import { useAdicionarParticipante } from "../states/hook/useAdicionarParticipante";

const Formulario = () => {
  
  const [nome, setNome] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const mensagemDeErro = useMensagemDeErro();
  const adicionarNaLista = useAdicionarParticipante();
  
  const adicionarParticipante = (evento: React.FormEvent<HTMLFormElement>) =>{
    evento.preventDefault();
    adicionarNaLista(nome);
    setNome('');
    inputRef.current?.focus();
  } 

  return (
    <form onSubmit={adicionarParticipante}>
      <input 
        ref={inputRef}
        value={nome}
        onChange={evento => setNome(evento.target.value)}
        type="text" 
        placeholder="Digite o nome"
      />
      <button disabled={!nome}> Adiocionar</button>
      {mensagemDeErro && <p role='alert'>{mensagemDeErro}</p>}
    </form>
  )
}

export default Formulario;