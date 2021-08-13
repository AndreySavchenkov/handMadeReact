import React from "react";
import s from '../Counter.module.css'

type ButtonsPropsType = {
    count: number,
    changeHandler: () => void,
    resetHandler: () => void,
    maxValue: number
}

export const Buttons = (props: ButtonsPropsType) => {
    return (
        <div className={s.buttons}>
            <button className={s.button} disabled={props.count >= props.maxValue} onClick={props.changeHandler}>inc</button>
            <button className={s.button} disabled={props.count == 0} onClick={props.resetHandler}>reset</button>
        </div>
    )
}