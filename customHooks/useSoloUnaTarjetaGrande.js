import { useState, useEffect, useRef } from 'react';

export default function useSoloUnaTarjetaGrande(situacionInicial, isTarjetaGrande) {
    const [isSoloUnaTarjetaGrande, setIsSoloUnaTarjetaGrande] = useState(situacionInicial);
    const ref = useRef(null);

    const handleClickOutside = (event) => {
        
        if (isTarjetaGrande && ref.current && !ref.current.contains(event.target)) {
            setIsSoloUnaTarjetaGrande(true);
          
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    });

    return { ref, isSoloUnaTarjetaGrande, setIsSoloUnaTarjetaGrande };
}
