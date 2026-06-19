import type { Reponse } from "../../../domain/models/Question"
import { useState } from "react"

type Props = {
  reponses: Reponse[]
}

export default function Checkbox({reponses}: Props) {
  const [checkedStates, setCheckedStates] = useState<boolean[]>(new Array(reponses.length).fill(false))

  const handleChange = (index: number) => {
    const newStates = [...checkedStates]
    newStates[index] = !newStates[index]
    setCheckedStates(newStates)
  }

  return (
    <fieldset>
      <legend>plusieurs réponses possibles</legend>
      {reponses.map((reponse, index) => 
        <div key={index} className={`input-container ${checkedStates[index] ? 'checked' : ''}`} onClick={() => handleChange(index)}>
          <input 
            type="checkbox" 
            id={`${index}`} 
            name={`${reponse.textuel}`}
            checked={checkedStates[index]}
            onChange={() => handleChange(index)}
          />
          <label htmlFor={`${index}`}>{reponse.textuel}</label>
        </div>
      )}
    </fieldset>
  )
}