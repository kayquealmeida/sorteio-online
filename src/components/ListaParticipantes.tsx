import { useListaDeParticipantes } from "../states/hook/useListaDeParticipantes";

const ListaParticipantes = () =>{

  const participantesList: string[] = useListaDeParticipantes();

  return (
    <ul>
      {participantesList.map(participante => <li key={participante}>{participante}</li>)}
    </ul>
  )
} 

export default ListaParticipantes;