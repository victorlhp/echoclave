import { Inter } from 'next/font/google'
import './globals.css'
import Image from 'next/image'
import lupa from '../../public/lupa.svg'
import styles from './styles.module.css'

function Titulo({x, y}) {
  return (
    <h1 style={{left: x , top : y}} className={styles.titulo}>EchoClave</h1>
  );
}

function BackTitulo({x, y}) {
  return (
    <h1 style={{width: x , height : y}} className={styles.backTitulo}></h1>
  );
}

function Lupa({x, y}) {
  return (
    <Image src={lupa} style={{left: x, top: y}} className={styles.lupa} alt='Lupa'/>
  );
}

function Menu({children, x, y}){
  return(
    <ul style={{left: x, top: y}} className={styles.menu}>
      {children.map((itemMenu) => (
        <li key={itemMenu.nome}>{itemMenu}</li>
      ))}
    </ul>
  );
}

function ItemMenu({nome}){
  return (
    <p className={styles.itemMenu}>{nome}</p>
  );
}

export default function RootLayout({ children }){
  return(
  <>
    <Titulo x={713} y={24}></Titulo>
    <BackTitulo x={1728} y={122}></BackTitulo>  
      <Menu x={435} y={60}>
              <ItemMenu nome="All"/>
              <ItemMenu nome="Travel"/>
              <ItemMenu nome="Technology"/>
              <ItemMenu nome="Sports"/>
              <ItemMenu nome="Literature"/>
              <ItemMenu nome="Entertainment"/>
              <ItemMenu nome="Art"/>
              <ItemMenu nome="Business"/>
              <ItemMenu nome="Health"/>
              <ItemMenu nome="Climate"/>
            </Menu>
    <Lupa x={1581} y={85}/>
    {children}
  </>
  )
}
