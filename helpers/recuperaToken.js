

const recuperaToken = () => {

    const token = sessionStorage.getItem("login puertas digitales")
   
    return token
}

export default recuperaToken;