import recuperaToken from "./recuperaToken"


const traerListaFiltrada = async (urlBase, filtros) => {

    const token = recuperaToken()
    console.log(`filtros`, filtros)
    const urlCompleta = urlBase +":" +filtros;
    console.log(`urlCompleta`, urlCompleta)
   /*  const res = await fetch(urlCompleta, {
        headers: {
            "user-token": token,
          }
    })
    const data = await res.json()
    console.log("data", data)  */
  /*   return data; */
}

export default traerListaFiltrada;  