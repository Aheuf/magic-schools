import { useState } from "react"
import type { Reponse } from "../../../domain/models/Question"

type Props = {
  reponses: Reponse[],
  handleClick: (index: number) => void
  selectedResponse ?: number
}

export default function RadioButton({reponses, handleClick, selectedResponse}: Props) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const handleChange = (index: number) => {
    setSelectedIndex(selectedIndex === index ? null : index)
    handleClick(index)
  }
  
  return (
    <fieldset>
      {reponses.map((reponse, index) => 
        <div 
          key={index}
          className={`input-container ${(selectedResponse === index || selectedIndex === index) ? 'checked' : ''}`}
          onClick={() => handleChange(index)}
        >
          <input 
            type="radio"
            id={`${index}`}
            name="reponse"
            checked={(selectedResponse === index || selectedIndex === index)}
            onChange={() => handleChange(index)}
          />
          <label htmlFor={`${index}`}>{reponse.textuel}</label>
        </div>
      )}
    </fieldset>
  )
}