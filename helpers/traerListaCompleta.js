import recuperaToken from "./recuperaToken"


const traerListaCompleta = async (url) => {

    const token = recuperaToken()

    const res = await fetch(url, {
        headers: {
            "user-token": token,
          }
    })
    const data = await res.json()
    /* console.log(data) */
    return data;
}

export default traerListaCompleta;  