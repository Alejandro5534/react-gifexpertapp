import { useState } from 'react'
import PropTypes from 'prop-types';
export const AddCategory = ({setCategories}) => {
    
    const [inputValue, setinputValue] = useState('')
    const handleInputChange = (e)=> {
        setinputValue(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length>2) {
            setCategories(categories => [ inputValue,...categories])
            setinputValue('')
        }
        // console.log('Submit Hecho')
    }
    return (
          
            <form onSubmit = {handleSubmit}>    
                <input 
                    placeholder= "Escribe una o mas palabras clave para que encuentres, entre 10 GIFS, tu preferido"
                    type="text"
                    value = {inputValue}
                    onChange={handleInputChange}

                />
            </form>    
        
    )
}

AddCategory.prototype={
    setCategories: PropTypes.func.isRequired        
}