import React, {useEffect, useState} from 'react';


export const ExampleSetTimeOut = () => {

    const [counter, setCounter] = useState(0)


    useEffect(()=> {
        console.log('useEffect every render')

        setInterval(() => {
            setCounter(counter + 1)

            /*        setTimeout(()=> {
                document.title = counter.toString()
                }, 1000)
                }, [counter]*/
        },1000)
    },[])

// setTimeOut должен работать внутри useEffect, чтобы можно было задать частотность его вывоза, один раз, каждый раз при изменение.
/*setTimeout(()=> {
    document.title = counter.toString()
    }, 1000)*/

    return <>
        <button onClick={() => setCounter(counter+1)}>+</button>
        {counter}
    </>
}