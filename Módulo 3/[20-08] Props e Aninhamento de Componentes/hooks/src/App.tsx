import './App.css'
import Interval from './components/Interval'
import Timer from './components/Timer'
import useToogle from './hooks/use-toogle'

function App() {
  const {value, toogle} = useToogle();
  return (
    <>
      <Timer />
      {
        value && <Interval />
      }
      <button onClick={toogle}>{
        value ? 'Fechar Intervalo' : 'Abrir intervalo'
        }</button>
    </>
  )
}

export default App
