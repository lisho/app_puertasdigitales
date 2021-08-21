import { Text } from "@chakra-ui/react";
import Banner from "../components/Banner";
import PuertaCard from "../components/PuertaCard";
import PuertaCardVertical from "../components/PuertaCardVertical";
import PuertasRow from "../components/PuertasRow";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const randomNumPuerta = ()=> {

  const array = [];

  for (let i=0; i< 25; i++){
    let num = Math.floor((Math.random() * (24 - 1 + 1)) + 1);
    
/*     array.push(`./imagenes/g${num}.png`)
 */    array.push(`./imagenes/puerta-abierta_ayto.png`)
  }
  
  return array
}

let valores_iniciales =[];
for (let i = 0; i <4; i++) {
  valores_iniciales = [...valores_iniciales, randomNumPuerta()]

}

export default function Puertas() {
  
 /*  const [numPuerta, setnumPuerta] = useState(randomNumPuerta()) */
 const [puertas, setPuertas] = useState(valores_iniciales);

 useEffect( () => {

  
     
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
   
        <PuertasRow titulo="Mis Favoritos" mt="3" pt="5">
       { console.log(puertas)}

          {puertas[0]?.map( puerta => 
            <PuertaCardVertical
                key= {uuidv4()}
                url="https://www.seg-social.es/wps/portal/wss/internet/Inicio" 
                img={puerta}
                ratioH={0.8} 
                ratioW={0.8}  
            />
            
            )}
        </PuertasRow>

        <PuertasRow titulo="Seguridad Social" mt="3">

          {puertas[1]?.map( puerta => 
            <PuertaCard
                key= {uuidv4()}
                url="https://www.seg-social.es/wps/portal/wss/internet/Inicio" 
                img={puerta}
                ratioH={0.8} 
                ratioW={0.8}  
            />
            
            )}
        </PuertasRow>

        <PuertasRow titulo="Ayuntamiento de León" mt="3">

          {puertas[2]?.map( puerta => 
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