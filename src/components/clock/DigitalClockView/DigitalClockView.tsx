import React from 'react';
import {ClockViewPropsType} from '../Clock';

const getTwoNumbers = (num: number) => num < 10 ? '0' + num : num

export const DigitalClockView: React.FC<ClockViewPropsType> = ({date} )=>  {
    return <>
        <span>{getTwoNumbers(date.getHours())}</span>:
        <span>{getTwoNumbers(date.getMinutes())}</span>:
        <span>{getTwoNumbers(date.getHours())}</span>
    </>
}