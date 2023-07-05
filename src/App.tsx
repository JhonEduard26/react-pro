import { Counter } from './components/Counter'
import { CounterBy } from './components/CounterBy'
import { CounterEffect } from './components/CounterEffect'
import { CounterReducer } from './components/CounterReducer'

function App () {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      minHeight: '80vh'
    }}
    >
      <Counter initialValue={15} />
      <CounterBy initialValue={15} />
      <CounterEffect />
      <CounterReducer />
    </div>
  )
}

export default App
