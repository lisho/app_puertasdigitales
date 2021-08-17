import { Text } from "@chakra-ui/react";
import Banner from "../components/Banner";
import PuertaCard from "../components/PuertaCard";
import PuertasRow from "../components/PuertasRow";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const randomNumPuerta = ()=> {

  const array = [];

  for (let i=0; i< 25; i++){
    let num = Math.floor((Math.random() * (24 - 1 + 1)) + 1);
    
    array.push(`./imagenes/g${num}.png`)
  }
    
  return array
}

export default function Puertas() {
  
 /*  const [numPuerta, setnumPuerta] = useState(randomNumPuerta()) */
 const [puertas, setPuertas] = useState(null);

 useEffect(() => {
   const puertasArray = randomNumPuerta();
   setPuertas(puertasArray)
  
 }, []);
  
  return (

    <>
      <style jsx>{`
        .container {
          width: 100vw;
          flex-direction: column;
          min-height: 100%;
          display: grid;
          background-color: ${process.env.NEXT_PUBLIC_COLOR_FONDO_ALMACEN}/*rgb(28, 44, 44)*/;
        }

      `}</style>

   
      <div className="container">
      <Banner />
        <PuertasRow titulo="Mis Favoritos">

          {puertas?.map( puerta => 
            <PuertaCard
                key= {uuidv4()}
                url="https://www.seg-social.es/wps/portal/wss/internet/Inicio" 
                img={puerta}
                ratioH={0.5} 
                ratioW={0.5}  
            />
            
            )}
        </PuertasRow>

        <PuertasRow titulo="Seguridad Social">

          {puertas?.map( puerta => 
            <PuertaCard
                key= {uuidv4()}
                url="https://www.seg-social.es/wps/portal/wss/internet/Inicio" 
                img={puerta}
                ratioH={0.8} 
                ratioW={0.8}  
            />
            
            )}
        </PuertasRow>


          {/* <PuertaCard
              url="https://www.seg-social.es/wps/portal/wss/internet/Inicio" 
              img={numPuerta}
                ratioH={0.8} 
              ratioW={0.8} 
          />
          <PuertaCard
              url="https://www.seg-social.es/wps/portal/wss/internet/Inicio" 
              img={numPuerta}
                ratioH={0.8} 
              ratioW={0.8} 
          />
          <PuertaCard
              url="https://www.seg-social.es/wps/portal/wss/internet/Inicio" 
              img={numPuerta}
                ratioH={0.8} 
              ratioW={0.8} 
          />
          <PuertaCard
              url="https://www.seg-social.es/wps/portal/wss/internet/Inicio" 
              img={numPuerta}
                ratioH={0.8} 
              ratioW={0.8} 
          />
          <PuertaCard
              url="https://www.seg-social.es/wps/portal/wss/internet/Inicio" 
              img={numPuerta}
                ratioH={0.8} 
              ratioW={0.8} 
          />
          <PuertaCard
              url="https://www.seg-social.es/wps/portal/wss/internet/Inicio" 
              img={numPuerta}
                ratioH={0.8} 
              ratioW={0.8} 
          />
          <PuertaCard
              url="https://www.seg-social.es/wps/portal/wss/internet/Inicio" 
              img={numPuerta}
                ratioH={0.8} 
              ratioW={0.8} 
          />
          <PuertaCard
              url="https://www.seg-social.es/wps/portal/wss/internet/Inicio" 
              img={numPuerta}
                ratioH={0.8} 
              ratioW={0.8} 
          />
          <PuertaCard
              url="https://www.seg-social.es/wps/portal/wss/internet/Inicio" 
              img={numPuerta}
                ratioH={0.8} 
              ratioW={0.8} 
          />
          <PuertaCard
              url="https://www.seg-social.es/wps/portal/wss/internet/Inicio" 
              img={numPuerta}
                ratioH={0.8} 
              ratioW={0.8} 
          />
          <PuertaCard
              url="https://www.seg-social.es/wps/portal/wss/internet/Inicio" 
              img={numPuerta}
                ratioH={0.8} 
              ratioW={0.8} 
          />
          <PuertaCard
              url="https://www.seg-social.es/wps/portal/wss/internet/Inicio" 
              img={numPuerta}
                ratioH={0.8} 
              ratioW={0.8} 
          />
          <PuertaCard
              url="https://www.seg-social.es/wps/portal/wss/internet/Inicio" 
              img={numPuerta}
                ratioH={0.8} 
              ratioW={0.8} 
          />
          <PuertaCard
              url="https://www.seg-social.es/wps/portal/wss/internet/Inicio" 
              img={numPuerta}
                ratioH={0.8} 
              ratioW={0.8} 
          /> 
        </PuertasRow>
       
        <PuertasRow titulo="Puertas Recomendadas">
          <PuertaCard
              url="https://www.seg-social.es/wps/portal/wss/internet/Inicio" 
              img={numPuerta}
              ratioH={1.5} 
              ratioW={1.5} 
            />
          <PuertaCard
              url="https://www.seg-social.es/wps/portal/wss/internet/Inicio" 
              img={numPuerta}
              ratioH={1.5} 
              ratioW={1.5} 
            />
          <PuertaCard
              url="https://www.seg-social.es/wps/portal/wss/internet/Inicio" 
              img={numPuerta}
              ratioH={1.5} 
              ratioW={1.5} 
            />
          <PuertaCard
              url="https://www.seg-social.es/wps/portal/wss/internet/Inicio" 
              img={numPuerta}
              ratioH={1.5} 
              ratioW={1.5} 
            />
          <PuertaCard
              url="https://www.seg-social.es/wps/portal/wss/internet/Inicio" 
              img={numPuerta}
              ratioH={1.5} 
              ratioW={1.5} 
            />
          <PuertaCard
              url="https://www.seg-social.es/wps/portal/wss/internet/Inicio" 
              img={numPuerta}
              ratioH={1.5} 
              ratioW={1.5} 
            />
          <PuertaCard
              url="https://www.seg-social.es/wps/portal/wss/internet/Inicio" 
              img={numPuerta}
              ratioH={1.5} 
              ratioW={1.5} 
            />
        </PuertasRow>

        <PuertasRow titulo="Ayuntamiento de León">
          <PuertaCard
              url="https://www.seg-social.es/wps/portal/wss/internet/Inicio" 
              img={numPuerta}
          />
          <PuertaCard
              url="https://www.seg-social.es/wps/portal/wss/internet/Inicio" 
              img={numPuerta}
          />
          <PuertaCard
              url="https://www.seg-social.es/wps/portal/wss/internet/Inicio" 
              img={numPuerta}
          />
          <PuertaCard
              url="https://www.seg-social.es/wps/portal/wss/internet/Inicio" 
              img={numPuerta}
          />
          <PuertaCard
              url="https://www.seg-social.es/wps/portal/wss/internet/Inicio" 
              img={numPuerta}
          />
          <PuertaCard
              url="https://www.seg-social.es/wps/portal/wss/internet/Inicio" 
              img={numPuerta}
          />
          <PuertaCard
              url="https://www.seg-social.es/wps/portal/wss/internet/Inicio" 
              img={numPuerta}
          />
          <PuertaCard
              url="https://www.seg-social.es/wps/portal/wss/internet/Inicio" 
              img={numPuerta}
          />
          <PuertaCard
              url="https://www.seg-social.es/wps/portal/wss/internet/Inicio" 
              img={numPuerta}
          />
          <PuertaCard
              url="https://www.seg-social.es/wps/portal/wss/internet/Inicio" 
              img={numPuerta}
          />
          <PuertaCard
              url="https://www.seg-social.es/wps/portal/wss/internet/Inicio" 
              img={numPuerta}
          />
          <PuertaCard
              url="https://www.seg-social.es/wps/portal/wss/internet/Inicio" 
              img={numPuerta}
          />
          <PuertaCard
              url="https://www.seg-social.es/wps/portal/wss/internet/Inicio" 
              img={numPuerta}
          />
          <PuertaCard
              url="https://www.seg-social.es/wps/portal/wss/internet/Inicio" 
              img={numPuerta}
          />
        </PuertasRow>

        <PuertasRow titulo="Seguridad Social">
          <PuertaCard
              url="https://www.seg-social.es/wps/portal/wss/internet/Inicio" 
              img={numPuerta}
          />
          <PuertaCard
              url="https://www.seg-social.es/wps/portal/wss/internet/Inicio" 
              img={numPuerta}
          />
          <PuertaCard
              url="https://www.seg-social.es/wps/portal/wss/internet/Inicio" 
              img={numPuerta}
          />
          <PuertaCard
              url="https://www.seg-social.es/wps/portal/wss/internet/Inicio" 
              img={numPuerta}
          />
          <PuertaCard
              url="https://www.seg-social.es/wps/portal/wss/internet/Inicio" 
              img={numPuerta}
          />
          <PuertaCard
              url="https://www.seg-social.es/wps/portal/wss/internet/Inicio" 
              img={numPuerta}
          />
          <PuertaCard
              url="https://www.seg-social.es/wps/portal/wss/internet/Inicio" 
              img={numPuerta}
          />
        </PuertasRow> */}

        </div>
    
    </>
    
    )
} 