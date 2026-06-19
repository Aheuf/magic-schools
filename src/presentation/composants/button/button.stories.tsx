import type { Meta, StoryObj } from "@storybook/react-vite"
import Button from "./index"

type ButtonStory = StoryObj<typeof Button>

const meta: Meta<typeof Button> = {
  title: "Composants/Button",
  component: Button,
  tags: ["autodocs"],
}

export default meta

export const Basic: ButtonStory = {
  args: {
    value: "Cliquez",
    action: () => {},
  },
}

export const WithArrowLeft: ButtonStory = {
  args: {
    arrow: "left",
    value: "Retour",
    action: () => {},
  },
}

export const WithArrowRight: ButtonStory = {
  args: {
    arrow: "right",
    value: "Suivant",
    action: () => {},
  },
}
