import NextAuth from "next-auth";
import Providers from "next-auth/providers";

const options = {
  // Configure one or more authentication providers
  providers: [
   
    Providers.Credentials({
    //site: 'http://0.0.0.0:4030/api/usuarios/login', 
    
    pages: {
      signIn: '/',
      signOut: '/',
      error: null, // Error code passed in query string as ?error=
      verifyRequest: null, // (used for check email message)
      newUser: null // If set, new users will be directed here on first sign in
    },
      /*  credentials: {
        username: { label: "Usuario",
                    type: "text",
                    placeholder: "Nombre de usuario"},
        password: { label: "Password", 
                    type: "password", 
                    placeholder: "Password"}, */
      /* credentials : {token},  */
      name: 'Credentials',
      callbacks: {
        async signIn(user, account, profile) {
          console.log("user", user)
          return true
        },
        async redirect(url, baseUrl) {
          return baseUrl;
        },
        async session(session, token) {
          // Add property to session, like an access_token from a provider.
          session.accessToken = token.accessToken
          return session
        },
        async jwt(token, user, account, profile, isNewUser) {
          return token;
        },
      },

      async authorize(credentials, req) {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)
        const user = await fetch("http://0.0.0.0:4030/api/usuarios/login", {
          method: "POST",
          body: JSON.stringify(credentials), 
          headers: {
            "Content-Type": "application/json",
          },
        }).then(res => console.log(res))

        // If no error and we have user data, return it
        if (res.ok && user) {
          console.log("logueado: ", user);
          return user;
        }
        // Return null if user data could not be retrieved
        return null;
      },
    }),
  ],
  session: { jwt: true },
  // A database is optional, but required to persist accounts in a database
  /* database:  */
};

export default (req, res) => NextAuth(req, res, options);
