import FabricaBanner from "../components/FabricaBanner"

const fabrica = () => {
    return (
        <>
      <style jsx>{`
        .container {
            width: 100vw; 
            flex-direction: column;
            min-height: 100%;
            display: grid;
            background-color: rgb(28, 44, 44);
        }

      `}</style>

   
      <div className="container">
          <FabricaBanner />
          Fábrica de puertas
      </div>
      </>
    );
}

export default fabrica;