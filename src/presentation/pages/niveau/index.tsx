import { couleurEnum, NiveauEnum, type Reponse } from '../../../domain/models/Question'
import RadioButton from '../../composants/Radio'

type Props = {
  setPlayerLevel: (level: NiveauEnum) => void
}

export default function Niveau({setPlayerLevel}: Props) {
  const niveauArray: NiveauEnum[] = [NiveauEnum.DEBUTANT, NiveauEnum.AMATEUR, NiveauEnum.CONFIRME]
  const reponsesNiveau: Reponse[] = [
    {
      textuel: `${NiveauEnum.DEBUTANT} (10 questions)`,
      couleur: [couleurEnum.AUCUNE]
    },
    {
      textuel: `${NiveauEnum.AMATEUR} (18 questions)`,
      couleur: [couleurEnum.AUCUNE]
    },
    {
      textuel: `${NiveauEnum.CONFIRME} (36 questions)`,
      couleur: [couleurEnum.AUCUNE]
    }
  ]
  
  return (
    <div>
      <h2>Quel est ton niveau à magic ?</h2>
      <p>Sélectionne le niveau qui te correspond le mieux :</p>
      <RadioButton reponses={reponsesNiveau} handleClick={(index) => setPlayerLevel(niveauArray[index])} />
    </div>
  )
}