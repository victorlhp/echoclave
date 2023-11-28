import { Inter } from 'next/font/google'
import './globals.css'
import Image from 'next/image'
import lupa from '../../public/lupa.svg'
import styles from './page.module.css'

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
    <Image src={lupa} style={{left: x, top:y}} className={styles.lupa}/>
  );
  
}

export default function RootLayout({ children }){
  return(
  <>
    <Titulo x={713} y={24}></Titulo>
    <BackTitulo x={1728} y={122}></BackTitulo>  
    <Lupa x={1581} y={85}/>
    {children}
  </>
  )
}
