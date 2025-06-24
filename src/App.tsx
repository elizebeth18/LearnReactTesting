import './App.css';
import Application  from './components/Application/Application';
import Skills from './components/Skills/Skills';

function App() {

  return (
    <>
      <div className="card">
        <Skills skills={["HTML","JavaScript"]} />
      </div>
    </>
  )
}

export default App
