import Image from 'next/image'
import styles from './page.module.css'
import img1 from '../../public/img1.png'
import seta1 from '../../public/seta1.png'
import ellipse from '../../public/ellipse.svg'
import icn from '../../public/icn.svg'

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
    <h1 style={{left: x , top : y}} className={styles.trending}>TRENDING ON BOARD </h1>
  );
}

function Comp({x, y}) {
  return (
    <h4 style={{left: x, top: y}} className={styles.comp}>#1</h4>
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

function Ellipse({x, y}) {
  return (
    <Image src={ellipse} style={{left: x, top: y}} className={styles.ellipse} alt='ellipse'/>
  );
}

function Rob({x, y}) {
  return (
    <h2 style={{left: x , top : y}} className={styles.rob}>Robert Evans</h2>
  );
}

function Botao({x, y}) {
  return (
    <button style={{left: x, top: y}} className={styles.botao}>Read It</button>
  )
}

function Button({x, y}) {
  return (
    <button style={{left: x, top: y}} className={styles.button}>
      <Image src={icn} className={styles.icn} alt='icn'/>
      <span className={styles.aaa}> Listen It </span>
    </button>
  
  )
}



export default function Home(){
  return (
    <>
    <Img x={67} y={295}/>
    <Seta x={909} y={317} z={58}/>
    <Ellipse>x={1080} y={731}</Ellipse>
    <Trending></Trending>
    <Comp></Comp>
    <Off></Off>
    <Embark></Embark>
    <Rob></Rob>
    <Botao>x={1080} y={807}</Botao>
    <Button></Button>
    
    
    
    </>
  )
}