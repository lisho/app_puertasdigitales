import Head from "next/head";
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
        <link rel="icon" href="/favicon.ico" />
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
