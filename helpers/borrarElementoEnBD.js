


const borrarElementoEnBd = (url, setEstado) => {

    fetch(url, {
      method: "DELETE", 
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => {
          console.log("response:", response)
        setEstado(response)
    
    });
  };
  
  export default borrarElementoEnBd;