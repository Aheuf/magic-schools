import type { Reponse } from "../../../domain/models/Question"
import { useState } from "react"

type Props = {
  reponses: Reponse[]
}

export default function RadioButton({reponses}: Props) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const handleChange = (index: number) => {
    setSelectedIndex(selectedIndex === index ? null : index)
  }

  return (
    <fieldset>
      {reponses.map((reponse, index) => 
        <div key={index} className={`input-container ${selectedIndex === index ? 'checked' : ''}`} onClick={() => handleChange(index)}>
          <input 
            type="radio"
            id={`${index}`}
            name="reponse"
            checked={selectedIndex === index}
            onChange={() => handleChange(index)}
          />
          <label htmlFor={`${index}`}>{reponse.textuel}</label>
        </div>
      )}
    </fieldset>
  )
}