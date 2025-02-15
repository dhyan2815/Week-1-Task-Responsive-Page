import './App.css'
import Navbar from './Includes/Navbar'
import Section1 from './Components/Section1'
import Section2 from './Components/Section2'

function App() {

  return (
    <>
      <div className="App">
        <div className="main">
          <Navbar/>
          <Section1/>
          <Section2/>
        </div>
      </div>
    </>
  )
}

export default App
