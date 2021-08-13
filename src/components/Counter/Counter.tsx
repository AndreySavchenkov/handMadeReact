import React, {useState} from "react";
import {Display} from "./Display/Display";
import {Buttons} from "./Buttons/Buttons";
import s from './Counter.module.css'

type CounterPropsType = {
    maxValue: number;
}

export const Counter = (props: CounterPropsType) => {

    const [count, setCount]=useState<number>(0)

    const changeHandler = () => {
        if(count < props.maxValue) {
            setCount(count + 1)
        }
    }

    const resetHandler = () => {
        setCount(0)
    }

    return(
        <div className={s.wrapper}>
            <Display maxValue={props.maxValue} count={count}/>
            <Buttons maxValue={props.maxValue} count={count} changeHandler={changeHandler} resetHandler={resetHandler}/>
        </div>
    )
}