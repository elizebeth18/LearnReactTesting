import './App.css';
import Application  from './components/Application/Application';
import Skills from './components/Skills/Skills';
import Counter from './components/Counter/Counter'

function App() {

  return (
    <>
      <div className="card">
        <Skills skills={["HTML","JavaScript"]} />
        <Counter />
      </div>
    </>
  )
}

export default App
