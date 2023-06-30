import { Counter } from './components/Counter'

function App () {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      minHeight: '100vh'
    }}
    >
      <Counter initialValue={15} />
    </div>
  )
}

export default App
