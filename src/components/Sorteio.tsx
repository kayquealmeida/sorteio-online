import { useListaDeParticipantes } from "../states/hook/useListaDeParticipantes";

const Sorteio = () => {

  const participantesList = useListaDeParticipantes();
  const temMaisDeUmParticipante = participantesList.length > 1;


  return (
    <form>
      <input 
        type="text" 
        placeholder="ex: 1" 
      />
      <button disabled={temMaisDeUmParticipante}>Sortear</button>
    </form>
  )
}

export default Sorteio;