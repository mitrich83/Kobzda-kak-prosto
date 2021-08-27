import React, {useEffect, useState} from 'react';


export const ExampleUseEffect = () => {

     const [counter, setCounter] = useState(0)

    useEffect(()=> {
        // все сайд эффекты, всю грязь, можно делать в useEffect, все асинронные запросы
        // api.getUsers().then('') - запросы на сервер
        // setInterval
        // indexedOB
        // document.getElementById
        // document.title = 'User'
    })

    useEffect(()=> {
        console.log('useEffect every render')
    })

    useEffect(()=> {
        console.log('useEffect only first render same as (componentDidMount)')
    },[])

    useEffect(()=> {
        console.log('useEffect first render and every counter changed')
    },[counter])

    return <>
        <button onClick={() => setCounter(counter+1)}>+</button>
        {counter}
    </>
}