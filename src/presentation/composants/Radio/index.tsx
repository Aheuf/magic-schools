import type { Reponse } from "../../../domain/models/Question"

type Props = {
  reponses: Reponse[]
}

export default function RadioButton({reponses}: Props) {
  return (
    <div>
      {reponses.map((reponse, index) => 
        <>
          <input type="radio" id={`${index}`} name="reponse" />
          <label>{reponse.textuel}</label>
        </>
      )}
    </div>
  )
}