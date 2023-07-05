import { useState } from 'react'

interface Props {
  initialValue: number
}

interface Counter {
  counter: number
  clicks: number
}

export const CounterBy = ({ initialValue = 0 }: Props) => {
  const [value, setValue] = useState<Counter>({
    counter: initialValue,
    clicks: 0
  })

  const increaseBy = (increase: number) => {
    setValue({
      clicks: value.clicks + 1,
      counter: value.counter + increase
    })
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <h1>CounterBy</h1>
      <span>Clicks: {value.clicks}</span>
      <span>Value: {value.counter}</span>

      <button type='button' onClick={() => increaseBy(1)}>
        +1
      </button>
      <button type='button' onClick={() => increaseBy(10)}>
        +10
      </button>
    </div>
  )
}
