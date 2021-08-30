import Head from "next/head";
/* import Html from "next/html"; */
import styles from "../styles/Home.module.css";
import FooterPrincipal from "../components/FooterPrincipal";
import Navbar from "../components/Navbar";
import { LoginProvider } from "../contextos/LoginProvider";

function DefaultLayout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Almacén de Puertas Digitales</title>
        <meta
          name="description"
          content="Aplicacion para facilitar el acceso a la administración electrónica y a otros recursos de internet a todas las personas"
        />
        <meta name="viewport" content="width=device-width " />
        <meta name="charset" content="utf-8 " />

        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Architects+Daughter&family=Roboto:wght@500&display=swap" rel="stylesheet"></link>
        
      </Head>
      <LoginProvider>
        <Navbar />
        <div className={styles.main}>{children}</div>

        <footer className={styles.footer}>
          <FooterPrincipal />
        </footer>
      </LoginProvider>
    </div>
  );
}

export default DefaultLayout;
