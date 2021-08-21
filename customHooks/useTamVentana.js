import { useEffect, useState } from "react";



export default function useTamVentana() {

  const [tamVentana, setTamVentana] = useState([])
  useEffect(() => {
    
    var tam = [0, 0];
    if (typeof window.innerWidth != 'undefined')
    {
      tam = [window.innerWidth,window.innerHeight];
    }
    else if (typeof document.documentElement != 'undefined'
        && typeof document.documentElement.clientWidth !=
        'undefined' && document.documentElement.clientWidth != 0)
    {
      tam = [
          document.documentElement.clientWidth,
          document.documentElement.clientHeight
      ];
    }
    else   {
      tam = [
          document.getElementsByTagName('body')[0].clientWidth,
          document.getElementsByTagName('body')[0].clientHeight
      ];
    }

    setTamVentana(tam);

  }, []);
  

    const tamVertical = tamVentana[0];
    const tamHorizontal = tamVentana[1];
    return {tamHorizontal, tamVertical};
  }