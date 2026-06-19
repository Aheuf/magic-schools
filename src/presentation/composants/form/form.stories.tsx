import type { Meta, StoryObj } from '@storybook/react-vite'
import Formulaire from './index'
import { questionFirstQuestion, questionLastQuestion, questionMono, questionMulti, questionFirstQuestionMulti } from '../../../domain/models/__stubs__/QuestionStub'

const meta = {
  title: 'Composants/Formulaire',
  component: Formulaire,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Formulaire>

export default meta
type Story = StoryObj<typeof meta>

export const QuestionMono: Story = {
  args: {
    question: questionMono,
    lastIndex: 10,
  },
}

export const QuestionMulti: Story = {
  args: {
    question: questionMulti,
    lastIndex: 10,
  },
}

export const FirstQuestion: Story = {
  args: {
    question: questionFirstQuestion,
    lastIndex: 10,
  },
}

export const LastQuestion: Story = {
  args: {
    question: questionLastQuestion,
    lastIndex: 10,
  },
}

export const MiddleQuestion: Story = {
  args: {
    question: questionMono,
    lastIndex: 20,
  },
}

export const FirstQuestionMulti: Story = {
  args: {
    question: questionFirstQuestionMulti,
    lastIndex: 10,
  },
}
