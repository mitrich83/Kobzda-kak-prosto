import React, {useState} from 'react';

function generateData() {
    console.log('generateData')
    return 3254846545
}

export const ExampleUseState = () => {

    // const [counter, setCounter] = useState(generateData)
    const [counter, setCounter] = useState(generateData)
// changer должен быть со стандартными простыми вычислениями
    const changer = (state:number)=> {
        return state +  1
    }

    return <>
        <button onClick={() => setCounter(changer)}>+</button>
        {counter}
    </>
}