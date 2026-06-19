import React from 'react'

type Props = {
  value: string
  action: () => void
  arrow?: "left" | "right"
}

export default function Button({ arrow, value, action }: Props) {
  return (
    <button onClick={action}>
      {arrow === "left" && <span>{"< "}</span>}
      {value}
      {arrow === "right" && <span>{" >"}</span>}
    </button>
  )
}