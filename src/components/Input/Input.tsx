import React, {useState} from "react";



export const Input = () => {

    const [value, setValue] = useState('');

    const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    const addMessage = () => {
        alert(value)
        setValue('')
    }


    return(
        <div>
            <input value={value} onChange={handlerChange} type="text"/>
            <button onClick={addMessage}>Send</button>
        </div>
    )
}