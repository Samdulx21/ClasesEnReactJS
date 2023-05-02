import React from 'react'
import PropTypes from 'prop-types'
import { Contacto } from '../../models/ContactClass'
import ContactStatus from '../container/ContactStatus'

const ContactComponent = ({ contacto }) => {
    return (
    <div>
        <h2>Nombre: {contacto.nombre}</h2>
        <h3>Apellidos: {contacto.apellido}</h3>
        <h3>Email: {contacto.email}</h3>
        <ContactStatus estado={true} />
    </div>
    )
}

ContactComponent.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
}

export default ContactComponent