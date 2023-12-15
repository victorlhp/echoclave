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
import featured from '../../public/featured.png'
import pontos from '../../public/pontos.svg'
import esquerda from '../../public/esquerda.svg'
import direita from '../../public/direita.svg'
import caixapesquisa from '../../public/caixapesquisa.png'


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

function Titulos({children, x, y, width, fontSize, color='black'}) {
  return (
    <h2 style={{left: x , top : y, width: width, fontSize: fontSize, color: color}} className={styles.titulos}>{children}</h2>
  );
}

function Noticias({children, x, y, width, height, fontSize, size, letterSpacing, color='#6C6C6C'}) {
  return (
    <h3 style={{left: x , top : y, width: width, height: height, fontSize: fontSize, size: size, letterSpacing: letterSpacing, color: color}} className={styles.noticias}>{children}</h3>
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

function Featured({x, y}) {
  return (
    <Image src={featured} style={{left: x, top: y}} className={styles.featured} alt='img'/>
  );
}

function Pontos({x, y}) {
  return (
    <Image src={pontos} style={{left: x, top: y}} className={styles.pontos} alt='img'/>
  );
}

function Esquerda({x, y}) {
  return (
    <Image src={esquerda} style={{left: x, top: y}} className={styles.esquerda} alt='img'/>
  );
}

function Direita({x, y, color='white'}) {
  return (
    <Image src={direita} style={{left: x, top: y, color: color}} className={styles.direita} alt='img'/>
  );
}

function Caixa({x, y}) {
  return (
    <Image src={caixapesquisa} style={{left: x, top: y}} className={styles.caixa} alt='img'/>
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


  <div className={styles.card}>
    <Titulos x={20} y={21} width={734}>Rediscovering the Allure of the Past</Titulos>
    <Noticias x={20} y={202} width={714} height={132} fontSize={28} size={28} letterSpacing={1.3}>Immerse yourself in the world of vintage fashion, design, and culture as we explore timeless trends, iconic moments, and the enduring charm of yesteryears.</Noticias>
    <Autores x={74} y={363} width={178} fontSize={24} height={28}>James Harisson</Autores>
    <Ellipse img={ellipse2} x={20} y={354} width={46} height={46}/>
    <Datas x={602} y={363} width={178} fontSize={24} height={28}>6 Aug 2023</Datas>
    <Blog x={20} y={811}>BLOG</Blog>
    <Blog2 x={150} y={811}>AUDIO BLOG</Blog2>
    <Img2 x={20} y={419}> </Img2>
  </div>
    
    
   
    <div className={styles.card2}>
      <Titulos x={20} y={21} width={734}>Tales of Taste and Travel Over World</Titulos> 
      <Noticias x={20} y={202} width={714} height={132} fontSize={28} size={26} letterSpacing={1.3}>Embark on a gastronomic adventure as we combine the joys of travel with culinary discoveries, exploring global cuisines and their cultural significance in the complete travel space.</Noticias> 
      <Autores x={74} y={363} width={178} fontSize={24} height={28}>Sam Raimi</Autores>
      <Ellipse img={ellipse3} x={20} y={354} width={46} height={46}/>
      <Datas x={602} y={363} width={124} fontSize={24} height={28}>4 Aug 2023</Datas>
      <Blog x={20} y={811}>BLOG</Blog>
      <Blog2 x={150} y={811}>AUDIO BLOG</Blog2>
      <Img3 x={20} y={419}></Img3>
    </div>

    <div className={styles.card3}>
      <Titulos x={17.8} y={18.69} width={475} fontSize={62}>Mastering The Art Of Culinary</Titulos> 
      <Noticias x={17.8} y={185.11} width={475} height={87} fontSize={24} size={25} letterSpacing={1.3}>Delve into the world of gastronomy as we demystify gourmet cooking techniques.</Noticias>
      <Autores x={65.86} y={294.57} width={141} fontSize={19} height={22}>James Harisson</Autores>
      <Ellipse img={ellipse2} x={17.8} y={287.45} width={37} height={37}/>
      <Datas x={389} y={294.57} width={104} fontSize={19} height={22}>11 July 2023</Datas>
      <Blog x={17.8} y={649.66}>BLOG</Blog>
      <Blog2 x={131.71} y={649.66}>AUDIO BLOG</Blog2>
      <Img4 x={17.8} y={341.74}></Img4>
    </div>

    <div className={styles.card4}>
      <Titulos x={17.8} y={18.69} width={475} fontSize={62}>Exploring the Frontiers </Titulos> 
      <Noticias x={17.8} y={185.11} width={475} height={87} fontSize={24} size={25} letterSpacing={1.3}>Landscape of technology with in-depth analysis, cutting-edge discoveries, and a glimpse into the future of innovation.</Noticias>
      <Autores x={65.86} y={294.57} width={128} fontSize={19} height={22}>Rebba Monica</Autores>
      <Ellipse img={ellipse4} x={17.8} y={287.45}  width={37} height={37}/>
      <Datas x={389} y={294.57} width={96} fontSize={19} height={22}>1 Aug 2023</Datas>
      <Blog x={17.8} y={649.66}>BLOG</Blog>
      <Blog2 x={131.71} y={649.66}>AUDIO BLOG</Blog2>
      <Img5 x={17.8} y={341.74}></Img5>
    </div>

    <div className={styles.card5}>
      <Titulos x={17.8} y={18.69} width={475} fontSize={62}>Sustainable Living Oasis</Titulos> 
      <Noticias x={17.8} y={185.11} width={475} height={87} fontSize={26} size={26} letterSpacing={1.3}>Eco-conscious tips and stories of individuals making a positive impact on the environment.</Noticias>
      <Autores x={65.86} y={294.57}  width={119} fontSize={19} height={22}>Robert Evans</Autores>  
      <Ellipse img={ellipse} x={17.8} y={287.45} width={37} height={37}/>
      <Datas x={389} y={294.57}width={106} fontSize={19} height={22}>31 July 2023 </Datas>
      <Blog x={17.8} y={649.66}>BLOG</Blog>
      <Blog2 x={131.71} y={649.66}>AUDIO BLOG</Blog2>
      <Img6 x={17.8} y={341.74}></Img6>
    </div>

    <div className={styles.faixa}>
      <Titulos x={66} y={100} width={477} fontSize={110} color='white'>Featured</Titulos>
       
      <Noticias x={500} y={140} width={153} height={118} fontSize={50} size={26} letterSpacing={2.5} color='white'>On Board</Noticias>
      <Pontos x={792} y={1183}></Pontos>
      <Esquerda x={1475} y={1170}></Esquerda>
      <Direita x={1621} y={1170}></Direita>
      <div className={styles.image}>
      <Featured x={190} y={341}></Featured>
      <Titulos x={256} y={799} width={1213} fontSize={80} color='white'>Cosmic Musings: Exploring the Wonders of the Universe</Titulos> 
      <Datas x={256} y={1004} width={204} fontSize={40} height={47}>1 Aug 2023</Datas>
      </div>
    </div>

    <Titulos x={486} y={4441} width={477} fontSize={110}>Subscribe</Titulos>
    <Noticias x={1015} y={4442} width={153} height={118} fontSize={50} size={26} letterSpacing={2.5} >For More Updates</Noticias>
    
    <div className={styles.caixa}>
    <Caixa x={486} y={4626}></Caixa>
    <div>
    <Noticias x={61} y={40} width={279} height={40} fontSize={34} size={26} letterSpacing={1.7} color='#9D9D9D'>Type your email</Noticias>
    <Direita x={657.93} y={22.42} color='#000'></Direita>
    </div>
    </div>
    

    <div className={styles.rodape}>
      <Titulos x={66} y={55} width={251} fontSize={50} color='#6C6C6C'>EchoClave</Titulos>
      <Noticias x={66} y={207} width={137} height={40} fontSize={30} size={26} letterSpacing={1.5} color='#545454'>Features</Noticias>
      <Noticias x={431} y={207} width={170} height={40} fontSize={30} size={26} letterSpacing={1.5} color='#545454'>Categories</Noticias>
      <Noticias x={789} y={207} width={160} height={40} fontSize={30} size={26} letterSpacing={1.5} color='#545454'>Site Cards</Noticias>
        <Noticias x={66} y={263} width={229} height={160} fontSize={30} size={26} letterSpacing={1.5} color='#545454'>
        Audio Blogs
        Blogs
        Video Updates
        Site Cards
        </Noticias>
        <Noticias x={431} y={263} width={222} height={360} fontSize={30} size={26} letterSpacing={1.5} color='#545454'>
        Travel
        Technology
        Sports
        Literature
        Entertainment
        Business
        Art
        Health
        Climate
        </Noticias>
        <Noticias x={789} y={263} width={239} height={200} fontSize={30} size={26} letterSpacing={1.5} color='#545454'>
        1 min Reads
        Quick Note
        Trending Note
        Roll On’s Note
        Enclaved Blogs
        </Noticias>

      <Noticias x={66} y={757} width={648} height={28} fontSize={24} size={26} letterSpacing={1.2} color='#545454'>Copyright © 2023 EchoClave Inc. All rights reserved.
      </Noticias>
      <Noticias x={819} y={757} width={172} height={28} fontSize={24} size={26} letterSpacing={1.2} color='#545454'>Privacy Policy</Noticias>
      <Noticias x={1031} y={757} width={161} height={40} fontSize={24} size={26} letterSpacing={1.2} color='#545454'>Terms of Use</Noticias>   
      <Noticias x={1232} y={757} width={108} height={40} fontSize={24} size={26} letterSpacing={1.2} color='#545454'>Site Map</Noticias> 




    </div>
   
    </>
  )
}