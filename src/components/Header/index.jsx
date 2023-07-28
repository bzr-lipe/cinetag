import { Link } from "react-router-dom";
import logo from './logo.png';
import styles from './Header.module.css';
import HeaderLink from "components/HeaderLink";

export default function Header() {
  return (
    <header className={ styles.cabecalho }>
      <Link to='./'>
        <img src={ logo } alt='Logo do Cinetag' />
      </Link>
      <nav>
        <HeaderLink url='./'>
          Home
        </HeaderLink>
        <HeaderLink url='./favoritos'>
          Favoritos
        </HeaderLink>
      </nav>
    </header>
  )
}
