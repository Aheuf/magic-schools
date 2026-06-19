import { couleurEnum, NiveauEnum, type Question } from "../Question"

export const questionMono: Question = {
  id: 1,
  parcours: [NiveauEnum.DEBUTANT, NiveauEnum.AMATEUR, NiveauEnum.CONFIRME],
  type: 'mono',
  question: 'Quand un problème apparaît dans un groupe, quelle est ta réaction naturelle ?',
  reponses: [
    {
      textuel: "J'essaie d'organiser tout le monde pour éviter que la situation empire.",
      couleur: [couleurEnum.BLANC],
    },
    {
      textuel: 'J\'observe, je pose des questions et je cherche la cause du problème.',
      couleur: [couleurEnum.BLEU],
    },
    {
      textuel: 'Je cherche rapidement qui a le contrôle de la situation et comment en tirer avantage.',
      couleur: [couleurEnum.NOIR],
    },
    {
      textuel: "J'agis tout de suite, quitte à corriger ensuite si nécessaire.",
      couleur: [couleurEnum.ROUGE],
    },
  ],
}

export const questionMulti: Question = {
  id: 6,
  parcours: [NiveauEnum.DEBUTANT, NiveauEnum.AMATEUR, NiveauEnum.CONFIRME],
  type: 'multi',
  question: 'Qu\'est-ce qui te motive le plus dans un projet ?',
  reponses: [
    {
      textuel: 'Aider les autres ou contribuer à quelque chose de plus grand que moi.',
      couleur: [couleurEnum.BLANC],
    },
    {
      textuel: 'Apprendre de nouvelles choses et progresser.',
      couleur: [couleurEnum.BLEU],
    },
    {
      textuel: 'Réussir, atteindre mon objectif et être reconnu.',
      couleur: [couleurEnum.NOIR],
    },
    {
      textuel: 'L\'excitation, le défi et les sensations fortes.',
      couleur: [couleurEnum.ROUGE],
    },
  ],
}

export const questionFirstQuestion: Question = {
  id: 1,
  parcours: [NiveauEnum.DEBUTANT],
  type: 'mono',
  question: 'Première question du parcours',
  reponses: [
    {
      textuel: 'Réponse 1',
      couleur: [couleurEnum.BLANC],
    },
    {
      textuel: 'Réponse 2',
      couleur: [couleurEnum.BLEU],
    },
  ],
}

export const questionLastQuestion: Question = {
  id: 10,
  parcours: [NiveauEnum.DEBUTANT],
  type: 'multi',
  question: 'Dernière question du parcours',
  reponses: [
    {
      textuel: 'Réponse 1',
      couleur: [couleurEnum.BLANC],
    },
    {
      textuel: 'Réponse 2',
      couleur: [couleurEnum.BLEU],
    },
  ],
}