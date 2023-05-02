import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Contacto } from '../../models/ContactClass';

const ContactStatus = ( estado ) => {

    const [ conectado, setConectado ] = useState( estado );

    return (
        <div>
            <h3> { conectado === false ? 'Contacto no disponible' : 'Contacto en linea' }</h3>
            <button 
            onClick={() => setConectado(!conectado)}
            >
                { conectado === false ? 'Conectado' : 'Desconectado' }
            </button>
        </div>
    )
}

ContactStatus.propTypes = {
    estado: PropTypes.bool, 
}

export default ContactStatus