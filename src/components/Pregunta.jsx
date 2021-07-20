import { Fragment } from "react";

const Pregunta = () => {
    return ( 
        <Fragment>
            <h2>Tu presupuesto:</h2>
            <input 
                type="text"
                className="u-full-width"    
            />
            <input 
                type="submit" 
                value=""
                className="button-primary u-full-width"
                value="Definir Presupuesto" 
            />

        </Fragment>
     );
}
 
export default Pregunta;