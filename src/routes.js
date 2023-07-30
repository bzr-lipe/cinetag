import { BrowserRouter, Routes, Route } from "react-router-dom";
import Favoritos from "pages/Favoritos";
import Home from "pages/Home";
import Player from "pages/Player";
import NotFound from "pages/NotFound";
import Template from "pages/Template";


export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Template />}>
          <Route index element={ <Home /> } />
          <Route path='favoritos' element={ <Favoritos /> } />
          <Route path=':id' element={ <Player /> } />
          <Route path='*' element={ <NotFound /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
