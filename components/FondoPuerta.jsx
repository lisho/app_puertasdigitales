import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FondoPuerta = ({ children, height, width, url, img }) => {
    const [unicoId ] = useState(uuidv4())
 
    return (
        <>
    <style jsx>{`
    
        .carddiv {
          height: ${height}; 
          width: ${width}; 
          max-width: 80vw;
          background-image: url("${img}");
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
         
          display: grid;
          flex-direction: column;
          align-items: flex-end;
          text-align: center;
          
          justify-content: center;
          transition: transform 450ms;
          border-radius: 10px;
          border: solid 2px rgba(0, 0, 0, 0.8);
          
        }

      `}</style> 

      <div className="carddiv" >{children}</div>
        </>
    );
}

export default FondoPuerta;