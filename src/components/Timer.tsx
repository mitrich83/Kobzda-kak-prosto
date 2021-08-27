import React, {useEffect, useState} from 'react';


export const ExampleSetTimeOut = () => {

    const [counter, setCounter] = useState(0)


    useEffect(() => {
        console.log('useEffect every render')

        setInterval(() => {
            setCounter(counter + 1)

            /*        setTimeout(()=> {
                document.title = counter.toString()
                }, 1000)
                }, [counter]*/
        }, 1000)
    }, [])

    return
    <>
    </>
}