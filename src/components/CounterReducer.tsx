import { useReducer } from 'react'

interface IState {
  counter: number
  previous: number
  changes: number
}

const INITIAL_STATE: IState = {
  counter: 0,
  previous: 0,
  changes: 0
}

type CounterAction = { type: 'increaseBy', payload: { value: number } } | { type: 'reset' }

const reducer = (state = INITIAL_STATE, action: CounterAction): IState => {
  switch (action.type) {
    case 'increaseBy':
      return {
        counter: state.counter + action.payload.value,
        previous: state.counter,
        changes: state.changes + 1
      }

    case 'reset':
      return INITIAL_STATE

    default:
      return state
  }
}

export const CounterReducer = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)

  const handleClick = (value: number) => {
    dispatch({ type: 'increaseBy', payload: { value } })
  }

  const handleReset = () => {
    dispatch({ type: 'reset' })
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <h1>Counter Reducer</h1>
      <span>Value: {state.counter}</span>
      <span>Previous: {state.previous}</span>
      <span>Clicks: {state.changes}</span>

      <button type='button' onClick={() => handleClick(1)}>
        +1
      </button>
      <button type='button' onClick={() => handleClick(5)}>
        +5
      </button>
      <button type='button' onClick={() => handleClick(10)}>
        +10
      </button>

      <button type='button' onClick={handleReset}>
        Reset
      </button>
    </div>
  )
}
