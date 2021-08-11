const Banner = () => {
  return (
    <>
      <style jsx>{`
        .banner {
          
          /* background-repeat: no-repeat; */
          background-size: cover;
          /* background-position: "center"; */
          background-image: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0) 76%,
            rgba(28, 44, 44, 1) 98%           
            ), url("./imagenes/almacen.png");
       
          height: 80vh;
          width: auto;
          /* background-color: green; */
          display: flex;
          margin-bottom: -130px;
          
        }
/* 
        .cover:after {
            width: auto;
            height:100%;
            background: rgb(255, 255, 255);
            background: linear-gradient(
                180deg,
                rgba(255, 255, 255, 0) 76%,
                rgba(28, 44, 44, 1) 98%
            ); */
        }
      `}</style>
       
            <div className="banner"></div>
      
    </>
  );
};

export default Banner;
