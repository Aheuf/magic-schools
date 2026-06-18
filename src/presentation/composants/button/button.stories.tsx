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
    action: () => undefined,
  },
}
