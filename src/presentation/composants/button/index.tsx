
type Props = {
  value: string
  action: () => void
  arrow?: "left" | "right"
  className?: string
}

export default function Button({ arrow, value, action, className }: Props) {
  return (
    <button onClick={action} className={className || ''}>
      {arrow === "left" && <span>{"< "}</span>}
      {value}
      {arrow === "right" && <span>{" >"}</span>}
    </button>
  )
}