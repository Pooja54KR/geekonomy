import { Container } from "react-bootstrap"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { Outlet } from "react-router-dom"

const App = () => {
  return (
    <>
      <main>
        <Header />
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App
