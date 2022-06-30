
export const solicitarLogin = async (credenciales) => {

  console.log("credenciales", credenciales)
    const login = await fetch(process.env.NEXT_PUBLIC_URL_API+"usuarios/login", {
      
        method: "POST",
        body: JSON.stringify(credenciales), 
        headers: {
          "Content-Type": "application/json",
         
        },
      })

      const data = await login.json();
      console.log("data devuelta para el login", data)
      return data;
}
