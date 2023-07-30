import { useFavoritoContext } from 'contexts/Favoritos';
import styles from './Card.module.css';
import iconeFavoritar from './favoritar.png'
import iconeDesfavoritar from './desfavoritar.png'
import { Link } from 'react-router-dom';

export default function Card({ id, titulo, capa}) {
  const { favorito, adicionarFavorito } = useFavoritoContext();
  const isFavorito = favorito.some((fav) => fav.id === id);
  const icon = !isFavorito ? iconeFavoritar : iconeDesfavoritar;

  return (
    <div className={ styles.container }>
      <Link className={ styles.link } to={`/${id}`}>
        <img src={ capa } alt={titulo} className={ styles.capa } />
        <h2>{ titulo }</h2>
      </Link>
      <img src={ icon }
        alt="Favoritar filme"
        className={ styles.favoritar } 
        onClick={() => {
          adicionarFavorito({ id, titulo, capa })
        }} />
    </div>
  )
}
