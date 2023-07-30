import React from 'react'
import Banner from 'components/Banner';
import Title from 'components/Title';
import Card from 'components/Card';
import styles from './Favoritos.module.css';
import { useFavoritoContext } from 'contexts/Favoritos';

export default function Favoritos() {
  const { favorito } = useFavoritoContext();

  return (
    <>
     <Banner imagem='favoritos' />
      <Title>
          <h1>Meus Favoritos</h1>
      </Title>
      <section className={ styles.container }>
        {favorito.map((fav) => {
          return <Card {...fav} key={fav.id} />
        })}
      </section>
    </>
  )
}
