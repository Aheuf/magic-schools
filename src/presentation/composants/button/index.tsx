import React from 'react'

type Props = {
  value: string
  action: () => void
}

export default function Button({ value, action }: Props) {
  return (
    <button onClick={action}>
      {value}
    </button>
  )
}