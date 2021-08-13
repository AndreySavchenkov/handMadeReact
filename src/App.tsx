import React from 'react';
import {Counter} from "./components/Counter/Counter";


function App ()  {



    return (
        <div>
            <Counter maxValue={5}/>
            <Counter maxValue={10}/>
        </div>
    );
}


export default App;