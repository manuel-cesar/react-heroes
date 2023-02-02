import { useState } from 'react';

// Recibe un objeto donde cada una de sus propiedades seran un campo de texto, selector o campo de 
// formulario a manipular con el handleInputChange
export const useForm = ( initialState = {} ) => {

    const [formValues, setValues] = useState(initialState);

    const reset = () => {
        setValues( initialState );
    }

    const handleInputChange = ({ target }) => {

        setValues({ 
            ...formValues,
            [ target.name ]: target.value,

        });
    }

    return[ formValues, handleInputChange, reset ];

}
