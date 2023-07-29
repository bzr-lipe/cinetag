import React from 'react'
import Banner from 'components/Banner';
import Title from 'components/Title';
import Card from 'components/Card';
import styles from './Favoritos.module.css';

export default function Favoritos() {
  return (
    <>
     <Banner imagem='favoritos' />
      <Title>
          <h1>Meus Favoritos</h1>
      </Title>
      <section className={ styles.container }>
          <Card id='1' titulo='Gato bonifácio' capa='https://thecatapi.com/api/images/get?format=src&type=png' />
      </section>
    </>
  )
}
