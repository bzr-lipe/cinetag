import Banner from "components/Banner";
import Title from "components/Title";
import styles from './Home.module.css';
import Card from 'components/Card';
import { useEffect, useState } from "react";

export default function Home() {
  const [ videos, setVideos ] = useState([]);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/bzr-lipe/cinetag-api/videos')
    .then(response => response.json())
    .then(dados => {
      setVideos( dados )
    })
  }, [])

  return (
    <>
      <Banner imagem='home'/>
      <Title>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Title>
      <section className={ styles.container }>
        {videos.map((video) => {
          return <Card {...video} key={video.id} />
        })}
      </section>
    </>
  )
}
