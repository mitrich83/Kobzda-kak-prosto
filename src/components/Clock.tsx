import React, {useEffect, useState} from 'react';

export const Clock = () => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalID = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => {
            clearInterval(intervalID)
        }
    }, [])

    const getTwoNumbers = (num: number) => num < 10 ? '0' + num : num

    const secondsString = getTwoNumbers(date.getSeconds())
    const minutesString = getTwoNumbers(date.getMinutes())
    const hoursString = getTwoNumbers(date.getHours())

    return <div>
        <span>{hoursString}</span>:
        <span>{minutesString}</span>:
        <span>{secondsString}</span>
    </div>
}


/*

const [seconds, setSeconds] = useState(0)

let clock = new Date()

useEffect(() => {

    setInterval(() => {
        setSeconds(seconds => seconds + 1)
    }, 1000)
}, [setSeconds])

return(
    <>
        {clock.getHours()}:{clock.getMinutes()}:0{seconds}
    </>
)*/
