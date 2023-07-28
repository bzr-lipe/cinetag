import Header from "components/Header";
import Footer from "components/Footer";
import Banner from "components/Banner";
import Title from "components/Title";

export default function Home() {
  return (
    <>
      <Header />
      <Banner imagem='home'/>
      <Title>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Title>
      <Footer />
    </>
  )
}
