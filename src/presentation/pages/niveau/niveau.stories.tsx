import type { Meta, StoryObj } from '@storybook/react-vite'
import Niveau from './index'
import { NiveauEnum } from '../../../domain/models/Question'

const meta = {
  title: 'Pages/Niveau',
  component: Niveau,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Niveau>

export default meta
type Story = StoryObj<typeof meta>

const handleSetPlayerLevel = (level: NiveauEnum) => {
  console.log('Niveau sélectionné:', level)
}

export const Default: Story = {
  args: {
    setPlayerLevel: handleSetPlayerLevel,
  },
}
