import type { Meta, StoryObj } from "@storybook/react-vite"
import RadioButton from "./index"
import { couleurEnum, type Reponse } from "../../../domain/models/Question"

type RadioStory = StoryObj<typeof RadioButton>

const meta: Meta<typeof RadioButton> = {
  title: "Composants/Radio",
  component: RadioButton,
  tags: ["autodocs"],
}

export default meta

const sampleReponses: Reponse[] = [
  {
    textuel: "Option 1",
    couleur: [couleurEnum.ROUGE],
  },
  {
    textuel: "Option 2",
    couleur: [couleurEnum.BLEU],
  },
]

export const Basic: RadioStory = {
  args: {
    reponses: sampleReponses,
    handleClick: () => {},
    selectedResponse: undefined,
  },
}

export const Selected: RadioStory = {
  args: {
    reponses: sampleReponses,
    handleClick: () => {},
    selectedResponse: 2,
  },
}
