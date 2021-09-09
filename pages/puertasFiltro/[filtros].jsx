import { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import traerListaFiltrada from "../../helpers/traerListaFiltrada";

const puertasFiltro = () => {
  const [puertas, setPuertas] = useState({});
 

  const router = useRouter();
  const {filtros, etiqueta} = router.query;
  console.log(`etiqueta`, router.query)
/*   useEffect(() => {
     console.log(`puertas`, puertas)
     console.log(`query`, query)
  }, [puertas])
 */
  useEffect(() => {
     const lista = traerListaFiltrada(
      process.env.NEXT_PUBLIC_URL_API + "puertas/filtradas/",
      etiqueta
    );
    lista.then((resultado) => /* setPuertas(resultado) */ console.log(`resultado`, resultado)); 
  }, []);

  return <div>Etiquetas: {filtros} </div>;
};

export default puertasFiltro;
