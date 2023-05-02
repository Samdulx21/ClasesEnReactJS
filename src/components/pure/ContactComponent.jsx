import React from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../../models/Contact_class'

const ContactComponent = ({ contact }) => {
    return (
        <div>
            <h2>Nombre: { contact.name }</h2>
            <h2>Apellido: { contact.lastname }</h2>

            <h4>Email: { contact.email }</h4>

            <h5>Estado: { contact.status ? 'on-line' : 'off-line' }</h5>

        </div>
    )
}

ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact)
}

export default ContactComponent