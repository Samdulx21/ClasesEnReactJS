import React from 'react'
import { Contact } from '../../models/Contact_class'
import ContactComponent from '../pure/ContactComponent'

const ContactUser = () => {

    const defaultContact = new Contact( 'default name', 'default latname', 'default email', false )

    return (
        <div>
            <div>
                <h1>Contact</h1>
            </div>
            <div>
                <ContactComponent contact={defaultContact}></ContactComponent>
            </div>
        </div>
    )
}

export default ContactUser