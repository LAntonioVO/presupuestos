import { Fragment, useState } from "react";
import Error from "./Error";
const Pregunta = ({setPresupuesto, setRestante}) => {

    const [presupuesto, setCantidad] = useState(0);
    const [error, setError] = useState(false)
    
    const agregarPresupuesto = e=>{
        e.preventDefault();

        if(presupuesto<1 || isNaN(presupuesto)){
            setError(true);
            return;
        }

        setError(false);

        setPresupuesto(presupuesto);
        setRestante(presupuesto)
    }

    return ( 
        <Fragment>
            <h2>Tu presupuesto:</h2>
            {
                error?
                    <Error
                        mensaje="Presupuesto incorrecto"
                    ></Error>
                :
                    null
            }
            <form onSubmit={agregarPresupuesto}>
                <input 
                    type="number"
                    className="u-full-width"
                    onChange={e=>setCantidad(parseInt( e.target.value,10 ))}   
                />
                <input 
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir Presupuesto" 
                />
            </form>

        </Fragment>
     );
}
 
export default Pregunta;