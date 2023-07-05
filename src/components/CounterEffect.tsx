import { useEffect, useState } from 'react'

const MAX_VALUE = 10

export const CounterEffect = () => {
  const [value, setValue] = useState(0)

  const handleClick = () => {
    if (value >= 10) return
    setValue((e) => e + 1)
  }

  useEffect(() => {
    if (value >= MAX_VALUE) {
      console.log('%cSe llego al valor maximo', 'color: white; background-color: black;')
    }
  }, [value])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <h1>CounterEffect</h1>
      <span>Value: {value}</span>

      <button type='button' disabled={value >= 10} onClick={handleClick}>
        +1
      </button>
    </div>
  )
}
