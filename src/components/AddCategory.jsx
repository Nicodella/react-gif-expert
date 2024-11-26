import React, { useState } from 'react'

export const AddCategory = ( {onNewCategory} ) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) =>{
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(inputValue);
        //validacion de mas de un caracter
        if(inputValue.trim().length <= 1) return;
        onNewCategory(inputValue.trim());
        //setCategories( categories => [inputValue, ...categories]);
        setInputValue('');
      }


  return (
    <form onSubmit={ (event) => onSubmit(event)}>
        <input
        type='text'
        placeholder='Buscar gifs'
        value={inputValue}
        onChange={ onInputChange }
        />
    </form>
  )
}

export default AddCategory
