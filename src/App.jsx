import { Outlet } from "react-router-dom"
import NavbarComponent from "./components/NavbarComponent"


function App() {

  return (
    <>
      <NavbarComponent />

      {/* Prikazivanje */}
      <Outlet />
    </>
  )
}

export default App
