
export const solicitarLogin = async (credenciales) => {

    const login = await fetch("http://0.0.0.0:4030/api/usuarios/login", {
        method: "POST",
        body: JSON.stringify(credenciales), 
        headers: {
          "Content-Type": "application/json",
        },
      })

      const data = await login.json();
      console.log(data)
      return data;
}
