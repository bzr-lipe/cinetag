import Container from 'components/Container';
import Header from 'components/Header';
import FavoritosProvider from 'contexts/Favoritos';
import Footer from 'components/Footer';
import { Outlet } from 'react-router-dom';

export default function Template() {
  return (
    <main>
      <Header />
      <FavoritosProvider>
        <Container>
          <Outlet />
        </Container>
      </FavoritosProvider>
      <Footer />
    </main>
  )
}
