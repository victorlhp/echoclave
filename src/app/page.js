import Image from 'next/image'
import styles from './page.module.css'
import img1 from '../../public/img1.png'
import img2 from '../../public/img2.png'
import img3 from '../../public/img3.png'
import img4 from '../../public/img4.png'
import img5 from '../../public/img5.png'
import img6 from '../../public/img6.png'
import seta1 from '../../public/seta1.png'
import ellipse from '../../public/ellipse.svg'
import ellipse2 from '../../public/ellipse2.svg'
import ellipse3 from '../../public/ellipse3.svg'
import ellipse4 from '../../public/ellipse4.svg'
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

function Titulos({children, x, y, width, fontSize}) {
  return (
    <h2 style={{left: x , top : y, width: width, fontSize: fontSize}} className={styles.titulos}>{children}</h2>
  );
}

function Noticias({children, x, y, width, height, fontSize, size, letterSpacing}) {
  return (
    <h3 style={{left: x , top : y, width: width, height: height, fontSize: fontSize, size: size, letterSpacing: letterSpacing}} className={styles.noticias}>{children}</h3>
  );
}

function Ellipse({img ,x, y, width, heigth}) {
  return (
    <Image src={img} style={{left: x, top: y, width: width, height: heigth}} className={styles.ellipse} alt='ellipse'/>
    
  );
}

function Autores({children, x, y, height, width, fontSize}) {
  return (
    <h2 style={{left: x , top : y, height: height, width: width, fontSize: fontSize}} className={styles.autores}>{children}</h2>
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

function Datas({children, x, y, height, width, fontSize}) {
  return (
    <h2 style={{left: x , top : y, height: height, width: width, fontSize: fontSize}} className={styles.datas}>{children}</h2>
  );
}

function Img2({x, y}) {
  return (
    <Image src={img2} style={{left: x, top: y}} className={styles.img2} alt='img'/>
  );
}

function Img3({x, y}) {
  return (
    <Image src={img3} style={{left: x, top: y}} className={styles.img3} alt='img'/>
  );
}

function Blog ({children, x, y}) {
  return (
    <h2 style={{left: x , top : y}} className={styles.blog}>{children}</h2>
  );
}

function Blog2 ({children, x, y}) {
  return (
    <h2 style={{left: x , top : y}} className={styles.blog2}>{children}</h2>
  );
}

function Img4({x, y}) {
  return (
    <Image src={img4} style={{left: x, top: y}} className={styles.img4} alt='img'/>
  );
}

function Img5({x, y}) {
  return (
    <Image src={img5} style={{left: x, top: y}} className={styles.img5} alt='img'/>
  );
}

function Img6({x, y}) {
  return (
    <Image src={img6} style={{left: x, top: y}} className={styles.img6} alt='img'/>
  );
}

export default function Home(){
  return (
    <>
    <Img x={67} y={295}/>
    <Seta x={909} y={317} z={58}/>
    <Trending></Trending>
    <Comp></Comp>
    <Botao>x={1010} y={807}</Botao>
    <Button></Button> 
    <Titulos x={1006} y={429} width={564}>Off-the-Beaten-Path Destinations</Titulos>
    <Noticias x={1010} y={615} width={533} height={93} fontSize={26} size={26} letterSpacing={1.3}>Embark on a virtual journey to discover lesser-known travel destinations that offer unique cultural experiences.</Noticias>
    <Autores x={1070} y={740} width={138} fontSize={22} height={26}>Robert Evans</Autores>
    <Ellipse img={ellipse} x={1010} y={731} width={44} height={44}/>

    <Titulos x={84} y={1000} width={734}>Rediscovering the Allure of the Past</Titulos>
    <Noticias x={87} y={1181} width={714} height={132} fontSize={28} size={28} letterSpacing={1.3}>Immerse yourself in the world of vintage fashion, design, and culture as we explore timeless trends, iconic moments, and the enduring charm of yesteryears.</Noticias>
    <Autores x={141} y={1342} width={178} fontSize={24} height={28}>James Harisson</Autores>
    <Ellipse img={ellipse2} x={87} y={1333} width={46} height={46}/>
    <Datas x={650} y={1342} width={178} fontSize={24} height={28}>6 Aug 2023</Datas>
    <Blog x={87} y={1790}>BLOG</Blog>
    <Blog2 x={217} y={1790}>AUDIO BLOG</Blog2>
    <Img2>x={87} y={1398}</Img2>

    <Titulos x={898} y={1000} width={734}>Tales of Taste and Travel Over World</Titulos> 
    <Noticias x={898} y={1181} width={714} height={132} fontSize={28} size={26} letterSpacing={1.3}>Embark on a gastronomic adventure as we combine the joys of travel with culinary discoveries, exploring global cuisines and their cultural significance in the complete travel space.</Noticias> 
    <Autores x={952} y={1342} width={178} fontSize={24} height={28}>Sam Raimi</Autores>
    <Ellipse img={ellipse3} x={898} y={1333} width={46} height={46}/>
    <Datas x={1521} y={1342} width={124} fontSize={24} height={28}>4 Aug 2023</Datas>
    <Blog x={898} y={1790}>BLOG</Blog>
    <Blog2 x={1028} y={1790}>AUDIO BLOG</Blog2>
    <Img3>x={898} y={1398}</Img3>

    <Titulos x={84} y={2072} width={475} fontSize={62}>Mastering The Art Of Culinary</Titulos> 
    <Noticias x={84} y={2239} width={475} height={87} fontSize={24} size={25} letterSpacing={1.3}>Delve into the world of gastronomy as we demystify gourmet cooking techniques.</Noticias>
    <Autores x={133} y={2349} width={141} fontSize={19} height={22}>James Harisson</Autores>
    <Ellipse img={ellipse2} x={85} y={2341} width={37} height={37}/>
    <Datas x={456} y={2349} width={104} fontSize={19} height={22}>11 July 2023</Datas>
    <Blog x={85} y={2704}>BLOG</Blog>
    <Blog2 x={199} y={2704}>AUDIO BLOG</Blog2>
    <Img4>x={85} y={2396}</Img4>


    <Titulos x={640} y={2072} width={475} fontSize={62}>Exploring the Frontiers </Titulos> 
    <Noticias x={640} y={2239} width={475} height={87} fontSize={26} size={26} letterSpacing={1.3}>Landscape of technology with in-depth analysis, cutting-edge discoveries, and a glimpse into the future of innovation.</Noticias>
    <Autores x={674} y={2349} width={128} fontSize={19} height={22}>Rebba Monica</Autores>
    <Ellipse img={ellipse4} x={626} y={2341} width={37} height={37}/>
    <Datas x={1005} y={2349} width={96} fontSize={19} height={22}>1 Aug 2023</Datas>
    <Blog x={626} y={2704}>BLOG</Blog>
    <Blog2 x={740} y={2704}>AUDIO BLOG</Blog2>
    <Img5>x={626} y={2396}</Img5>

    <Titulos x={1166} y={2072} width={475} fontSize={62}>Sustainable Living Oasis</Titulos> 
    <Noticias x={1167} y={2239} width={475} height={87} fontSize={26} size={26} letterSpacing={1.3}>Eco-conscious tips and stories of individuals making a positive impact on the environment.</Noticias>
    <Autores x={1215} y={2349} width={119} fontSize={19} height={22}>Robert Evans</Autores>  
    <Ellipse img={ellipse} x={1167} y={2341} width={37} height={37}/>
    <Datas x={1535} y={2349} width={106} fontSize={19} height={22}>31 July 2023 </Datas>
    <Blog x={1167} y={2704}>BLOG</Blog>
    <Blog2 x={1281} y={2704}>AUDIO BLOG</Blog2>
    <Img6>x={1167} y={2396}</Img6>
    
    </>
  )
}