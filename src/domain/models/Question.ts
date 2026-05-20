export type Question = {
  id: number,
  parcours: NiveauEnum[]
  type: "mono" | "multi"
  question: string
  reponses: Reponse[]
}

export type Reponse = {
  textuel: string,
  couleur: couleurEnum[]
}

export enum NiveauEnum {
  DEBUTANT="debutant",
  AMATEUR="amateur",
  CONFIRME="confirme"
}

export enum couleurEnum {
  BLANC="blanc",
  BLEU="bleu",
  NOIR="noir",
  ROUGE="rouge",
  VERT="vert"
}