import { Navbar } from './components/navbar'
import { Landing } from './screens/landing'

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      <Landing />
    </div>
  )
}

export default App
