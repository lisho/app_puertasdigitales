import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
    Providers.Credentials({
      name: "Mi Logueo",
      credentials: {
        usuario: { label: "Usuario",
                    type: "text",
                    placeholder: "Nombre de usuario"},
        password: { label: "Password", 
                    type: "password", 
                    placeholder: "Password"}
      },
      async authorize(credentials) {
          console.log(credentials)
      }
    })
  ],
  session: { jwt:true}
  // A database is optional, but required to persist accounts in a database
  /* database:  */
})