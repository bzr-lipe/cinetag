import { BrowserRouter, Routes, Route } from "react-router-dom";
import Favoritos from "pages/Favoritos";
import Home from "pages/Home";
import Header from "components/Header";
import Footer from "components/Footer";
import Container from './components/Container/index';


export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/favoritos' element={ <Favoritos /> } />
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  )
}
