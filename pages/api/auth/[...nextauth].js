import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const options = {
  // Configure one or more authentication providers
  providers: [
    /* Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }), */
    Providers.Credentials({
      site: 'http://0.0.0.0:4030/api/usuarios/login',
      pages: { signIn: "/auth/credentials-signin",
                error: '/auth/error?error=Default',},
      name: "MiLogueo",
      credentials: {
        username: { label: "Usuario",
                    type: "text",
                    placeholder: "Nombre de usuario"},
        password: { label: "Password", 
                    type: "password", 
                    placeholder: "Password"},
      },
      
      async authorize(credentials, req) {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address) 
        
  
        // If no error and we have user data, return it
        if (res.ok && user) {
          console.log("logueado: ", user)
          return user
        }
        // Return null if user data could not be retrieved
        return null
      }
    })
  ],
  session: { jwt:true}
  // A database is optional, but required to persist accounts in a database
  /* database:  */
 
}

export default (req, res) => NextAuth(req, res,options);