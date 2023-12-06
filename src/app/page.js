import Image from 'next/image'
import styles from './page.module.css'
import img1 from '../../public/img1.png'
import seta1 from '../../public/seta1.png'

function Img({x, y}) {
  return (
    <Image src={img1} style={{left: x, top: y}} className={styles.img} alt='img'/>
  );
}

function Seta({x, y, z}) {
  return (
    <Image src={seta1} style={{left: x, top: y, radius: z}} className={styles.seta} alt='seta'/>
  );
}

function Trending({x, y}) {
  return (
    <h1 style={{left: x , top : y}} className={styles.trending}>TRENDING ON BOARD <span style={{left: x, top: y}} className={styles.comp}>#1</span></h1>
  );
}

function Off({x, y}) {
  return (
    <h2 style={{left: x , top : y}} className={styles.off}>Off-the-Beaten-Path Destinations</h2>
  );
}

function Embark({x, y}) {
  return (
    <h3 style={{left: x , top : y}} className={styles.embark}>Embark on a virtual journey to discover lesser-known travel destinations that offer unique cultural experiences.</h3>
  );
}


export default function Home(){
  return (
    <>
    <Img x={67} y={295}/>
    <Seta x={909} y={317} z={58}/>
    <Trending></Trending>
    <Off></Off>
    <Embark></Embark>
    
    
    </>
  )
}
