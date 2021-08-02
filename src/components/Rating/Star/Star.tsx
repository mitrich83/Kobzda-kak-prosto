import React from 'react';
import {RType} from '../../UncontrolledRating/UncontrolledRating';

type StarPropsType = {
    selected: boolean
    callback: (value: RType) => void
    value: RType
}

export const Star = React.memo((props: StarPropsType)=> {

    const fill= <img height={20} width={20}  src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Full_Star_Yellow.svg/1200px-Full_Star_Yellow.svg.png'/>

    const unFill= <img  height={15} width={15} src= 'https://img.icons8.com/ios/452/star--v1.png'/>

    return (
        <span onClick={() => {props.callback(props.value)}}>
               {props.selected ? fill : unFill}
        </span>
    )
})