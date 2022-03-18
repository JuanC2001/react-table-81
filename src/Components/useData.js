import { useEffect, useState } from "react";
import { getData } from "./getData";

export const useData = () => {
    const [state, setState] = useState({// Se encarga de crear una variable de estado
        data: [],
        loading: true
    });

    useEffect(() => {// Con useEffect conseguíamos que todas las cosas se estén ejecutando por lo menos una vez
        getData()
            .then(filas => {
                    console.log(filas);
                    setState({
                        data: filas,
                        loading: false
                    });
            })
    },[]);// Con categoria como parámetro este hook se va a ejecutar cada que la variable categoria cambie
    console.log(state.loading)
    return state; // Es un objeto, trae una data vacía {data:[], loading: true};
}