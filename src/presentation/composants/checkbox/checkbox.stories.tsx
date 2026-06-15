import type { Meta, StoryObj } from "@storybook/react-vite"
import Checkbox from "./index"
import { couleurEnum, type Reponse } from "../../../domain/models/Question"

type CheckboxStory = StoryObj<typeof Checkbox>

const meta: Meta<typeof Checkbox> = {
  title: "Composants/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
}

export default meta

const sampleReponses: Reponse[] = [
  {
    textuel: "Réponse A",
    couleur: [couleurEnum.BLEU],
  },
  {
    textuel: "Réponse B",
    couleur: [couleurEnum.VERT],
  },
]

export const Basic: CheckboxStory = {
  args: {
    reponses: sampleReponses,
  },
}
