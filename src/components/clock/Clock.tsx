import React, {useEffect, useState} from 'react';
import {AnalogClockView} from './AnalogClockView/AnalogClockView';
import {DigitalClockView} from './DigitalClockView/DigitalClockView';

type ClockPropsType = {
    mode?: 'analog' | 'digital'
}

export type ClockViewPropsType = {
    date: Date
}

export const Clock: React.FC<ClockPropsType> = (props) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalID = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => {
            // clearInterval(intervalID)
        }
    }, [])

    let view;
    switch (props.mode){
        case 'analog':
            view = <AnalogClockView date={date} />
            break;
        case 'digital':
        default:
            view = <DigitalClockView date={date}/>
    }

    return <div>
        {view}
    </div>
}




