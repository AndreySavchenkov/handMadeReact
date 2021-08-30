import React, {useState} from "react";


export const CounterLocale = () => {

    const [value, setValue] = useState(0)

    const incHandler = () => {
        setValue(value + 1)
    }

    const setToLocalstorageHandler = () => {
        localStorage.setItem('counterValue', JSON.stringify(value))
        localStorage.setItem('counterValue + 1', JSON.stringify(value))
    }

    const getFromLocalstorageHandler = () => {
        let valueAsString = localStorage.getItem('counterValue')
        if(valueAsString) {
            let newValue = JSON.parse(valueAsString);
            setValue(newValue)
        }

    }

    const clearLocalstorageHandler = () => {
        localStorage.clear()
        setValue(0)
    }

    const removeItemLocalstorageHandler = () => {
        localStorage.removeItem('counterValue')
    }




    return (
        <div>
            <h1>{value}</h1>
            <button onClick={incHandler}>inc</button>
            <button onClick={setToLocalstorageHandler}>setToLocalstorage</button>
            <button onClick={getFromLocalstorageHandler}>getFromLocalstorage</button>
            <button onClick={clearLocalstorageHandler}>clearLocalstorage</button>
            <button onClick={removeItemLocalstorageHandler}>removeItemLocalstorage</button>
        </div>
    )
}