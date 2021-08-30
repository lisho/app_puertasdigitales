
const AnotacionInformal = ({children}) => {
  return (
    <>
      <style jsx>{`
        
        .anotacion {
            font-family: 'Architects Daughter', cursive;
        }
      `}</style>
      <div className="anotacion">{children}</div>
    </>
  );
};

export default AnotacionInformal;
