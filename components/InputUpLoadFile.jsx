import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

const InputUpLoadFile = ({ setValueFoto }) => {
  const [miniFoto, setMiniFoto] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    // Guardamos el valor de la foto
    setValueFoto(acceptedFiles[0]);

    // Generamos la miniatura para el formulario
    let reader = new FileReader();
    reader.readAsDataURL(acceptedFiles[0]);
    reader.onloadend = () => setMiniFoto(reader.result);
  }, []);

  const { acceptedFiles, getRootProps, getInputProps, isDragActive } =
    useDropzone({ onDrop, accept: "image/jpeg, image/png" });

  const files = acceptedFiles.map((file) => (
    <p key={file.path}>
      {file.path} - {file.size} bytes
    </p>
  ));

  return (
    <>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          font-family: sans-serif;
        }

        .container > p {
          font-size: 1rem;
        }

        .container > em {
          font-size: 0.8rem;
        }

        .dropzone {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px;
          border-width: 2px;
          border-radius: 2px;
          border-color: #eeeeee;
          border-style: dashed;
          background-color: #fafafa;
          color: #bdbdbd;
          outline: none;
          transition: border 0.24s ease-in-out;
        }

        .dropzone:focus {
          border-color: #2196f3;
        }

        .dropzone.disabled {
          opacity: 0.6;
        }

        .lista {
          margin-left: 20px;
        }

        #foto {
          height: auto;
          width: 150px;
          display: block;
          margin: auto;
          margin-top: 10px;
        }

        aside {
          background-color: #888888;
          color: #ffffff;
          outline: none;
          padding: 20px;
          text-align: center;
        }
      `}</style>
      <section className="container">
        <div className="dropzone" {...getRootProps({ className: "dropzone" })}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Suelta aquí tus archivos</p>
          ) : (
            <p>Arrastra hasta aquí un archivo o haz click para seleccionarlo</p>
          )}
        </div>

        <aside>
          <h4>Archivo cargado:</h4>
          <div className="lista">{files}</div>
          <img id="foto" src={miniFoto} alt="" />
        </aside>
      </section>
    </>
  );
};

export default InputUpLoadFile;
