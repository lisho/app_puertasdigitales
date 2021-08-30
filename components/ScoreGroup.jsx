/* import { StarIcon } from "@chakra-ui/icons"; */
import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import StarMediaIcon from "./iconos/StarMediaIcon";
import StarIcon from "./iconos/StarIcon";


const ScoreGroup = ({score, color = "#ffd42a"}) => {
    
    const refs = useRef([])
    useEffect(() => {

        
    }, []);

    const createEstrellas = () => {

        const estrellas = [];
        let totalEstrellas = 5;

        if (score) {
            for(let i = 1; i <= Math.round(score); i++){
               estrellas.push(
                    <StarIcon 
                        fill={color}  
                        key={uuidv4()} 
                        m="0.5"
                        ref={(ref) => refs.current.push(ref)}
                    />);
            }
            totalEstrellas = totalEstrellas-Math.round(score);
            
        }

        if (score%1 !== 0) {
            estrellas.push(
                <StarMediaIcon 
                    fill={color} 
                    key={uuidv4()} 
                    m="0.5"
                    ref={(ref) => refs.current.push(ref)}
                />)
            totalEstrellas--;
            console.log(` totalEstrellas`,  totalEstrellas)
        }

        for(let i = 1; i <= totalEstrellas; i++){
            estrellas.push(
                <StarIcon 
                    fill={"grey"}  
                    key={uuidv4()} 
                    m="0.5"
                    ref={(ref) => refs.current.push(ref)}
                />)
           
        }

        return estrellas;
    }

    return (
        <>
        {createEstrellas()}
        </>

    );
}

export default ScoreGroup;
