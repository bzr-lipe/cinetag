import Banner from 'components/Banner';
import Title from 'components/Title';
import styles from './Player.module.css';
import { useParams } from 'react-router-dom';
import NotFound from 'pages/NotFound';
import { useEffect, useState } from 'react';

export default function Player() {
  const [ video, setVideo ] = useState();
  const params = useParams();

  useEffect(() => {
    fetch(`https://my-json-server.typicode.com/bzr-lipe/cinetag-api/videos?id=${params.id}`)
      .then(response => response.json())
      .then(dados => {
        setVideo( ...dados )
      })
  }, []);

  if(!video){
    return <NotFound />
  }

  return (
     <>
      <Banner imagem='player' />
      <Title>
        <h1>Player</h1>
      </Title>
      <section className={ styles.container }>
        <iframe 
          width="100%" 
          src={ video.link } 
          title={ video.titulo }
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowfullscreen>
        </iframe>
      </section>
     </>
  )
}
