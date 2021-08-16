const FabricaBanner = () => {
    return (
        <>
      <style jsx>{`
        .banner {
         
          background-size: cover;
          background-position: center;
          background-image: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0) 76%,
            rgba(28, 44, 44, 1) 98%           
            ), url("./imagenes/almacen.png");
       
          height: 80vh;
          width: auto;
          display: flex;
          margin-bottom: -130px;
          
        }

      `}</style>
       
            <div className="banner"></div>
      
    </>
    );
}

export default FabricaBanner;