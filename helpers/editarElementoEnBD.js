

const editarElementoEnBd = (url, data, setEstado, estado, indexParaEditar) => {

    console.log(url);
    fetch(url, {
      method: "PUT", 
      body: JSON.stringify(data), 
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => {
        const items =[...estado];
        items[indexParaEditar] = response;
        estado && setEstado([...items])
    
    });
  };
  
  export default editarElementoEnBd;