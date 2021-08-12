import React, {useState} from "react";

export const Input2 = () => {
    const [value, setValue] = useState('');

    const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value) ;
    }



    return(
        <div>
            <input onChange={handlerChange} type="text"/>
            <p>текст: {value}</p>
        </div>
    )
}