import { useState } from 'react';

export const useCounter = (initial : number = 5) => {

    const [valor, setValor] = useState(initial)

    const acumular = (numero : number  ) => {
        setValor(valor + numero)
    }

    const restar = (numero : number) => {
        setValor(valor - numero)

    }

    return{
        valor,
        acumular,
        restar  
    }
}