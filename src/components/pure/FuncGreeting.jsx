import React, { useState } from 'react'
import PropTypes from 'prop-types'

function FuncGreeting (props) {

    // * breve introduccion useState 
    // * const [ "variable", "metodo para actualizarla" ] = useState("valor inicial")
    const [ age, setAge ] = useState(23)

    const birthday = () => {
        // * Actualizar el state
        setAge( age + 1 ) 
    }
    
    return (
        <div>
        <h1>
        My name is { props.name } (Component function)
        </h1>
        <h2>
        My age is { age } years old
        </h2>
        <div>
            <button
                onClick={ birthday }
            >Add years old</button>
        </div>
    </div>
    )
}

FuncGreeting.propTypes = {
    name: PropTypes.string
}

export default FuncGreeting
