import React, {useEffect, useState} from 'react';


export const Timer = () => {

    const [time, setTime] = useState(0)

    let timer = new Date()

    useEffect(() => {

        setInterval(() => {
            setTime(seconds => seconds + 1)
        }, 1000)
    }, [setTime])

    return(
    <>
        {timer.getHours()}:{timer.getMinutes()}:{time}
    </>
    )
}