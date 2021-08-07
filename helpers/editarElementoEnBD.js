

const editarElementoEnBd = (url, data, setEstado) => {

    console.log(url);
    fetch(url, {
      method: "PUT", // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => {
        setEstado(response)
    
    });
  };
  
  export default editarElementoEnBd;