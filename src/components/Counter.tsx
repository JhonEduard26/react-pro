import { useState } from 'react'

interface Props {
  initialValue: number
}

export const Counter = ({ initialValue = 0 }: Props) => {
  const [value, setValue] = useState(initialValue)

  const handleClick = () => {
    setValue((e) => e + 1)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <h1>Counter</h1>
      <span>Value: {value}</span>

      <button type='button' onClick={handleClick}>
        +1
      </button>
    </div>
  )
}
