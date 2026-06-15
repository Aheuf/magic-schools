import type { Reponse } from "../../../domain/models/Question"

type Props = {
  reponses: Reponse[]
}

export default function Checkbox({reponses}: Props) {
  return (
    <div>
      {reponses.map((reponse, index) => 
        <>
          <input type="checkbox" id={`${index}`} name={`${reponse.textuel}`}/>
          <label htmlFor={`${index}`}>{reponse.textuel}</label>
        </>
      )}
    </div>
  )
}