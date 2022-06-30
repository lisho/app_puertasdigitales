

const addNuevaFoto = async (url, data, setEstado, estado) => {

    
    const imagen = data

    const data_name = data.name;
    let myData = new FormData();
    myData.append('file', data);
    myData.append('file_name', data_name);

    await fetch(url, {
        method: "POST",
        body: myData, 
     
      })
       /*  .then((res) => res.json()) */
        .catch((error) => console.error("Error:", error))
        .catch((error) => error && setErrores(error))
         .then((response) => console.log(`lo que llega`, response))   
        /* .then((response) => estado && setEstado([response, ...estado]) ); */ 
}

export default addNuevaFoto;