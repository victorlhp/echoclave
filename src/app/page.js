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

export default function Home(){
  return (
    <>
    <Img x={67} y={295}/>
    <Seta x={909} y={317} z={58}/>
    
    </>
  )
}
