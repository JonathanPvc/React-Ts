//import {useState} from 'react';
import { useCounter } from '../Hooks/useCounter';
const ContadorConHook = () => {
const {valor, acumular, restar} =useCounter();
   
  return (
    <>
    <h3> ContadorConHook <small>{valor}</small></h3>

    <button className="btn btn-primary" onClick={() => acumular(1)}>+1</button>
    <button className="btn btn-primary"onClick={() => restar(1)} >-1</button>

    </>
  )
}

export default ContadorConHook