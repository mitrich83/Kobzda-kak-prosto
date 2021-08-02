import React, {useReducer} from 'react';
import {reducer, TOGGLE_COLLAPSED} from './Reducer';

type UncontrolledAccordionProps = {
    titleValue: string
}

export const UncontrolledAccordion = React.memo((props: UncontrolledAccordionProps) => {

    let [state, dispatch] = useReducer(reducer, {collapsed:false})
    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={() => {
                dispatch({type: TOGGLE_COLLAPSED})
            }}/>
            {!state.collapsed && <AccordionBody/>}
        </div>
    )
})


type AccordionTitlePropsType = {
    title: string | undefined
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={() => {
        props.onClick()
    }}>{props.title}</h3>
}

function AccordionBody() {
    return (
        <ul className={'ul'}>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}
