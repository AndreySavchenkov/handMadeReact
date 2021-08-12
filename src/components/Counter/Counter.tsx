import React, {useState} from "react";

export const Counter = () => {

    const [count, setCount]=useState<number>(0)

    const changeHandler = () => {
        setCount(count + 1)
    }

    return(
        <div>
            <div>{count}</div>
            <button onClick={changeHandler}>add</button>
        </div>
    )
}