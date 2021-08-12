import React, {useState} from 'react';
import './App.css';
import {Input} from "./components/Input/Input";
import {Input2} from "./components/Input2/Input2";
import {Counter} from "./components/Counter/Counter";


function App ()  {



    return (
        <div>
            <Input />
            <Input2/>
            <Counter/>
        </div>
    );
}


export default App;