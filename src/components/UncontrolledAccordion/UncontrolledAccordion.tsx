import React, {useState} from 'react';
import {AccordionPropsType} from '../Accordion/Accordion';


function UncontrolledAccordion (props: AccordionPropsType) {
    let [collapsed, setCollapsed] = useState(false)
    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick ={ ()=> {setCollapsed((!collapsed))}}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )
}


type AccordionTitlePropsType = {
    title: string|undefined
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={ () => {props.onClick()}}>{props.title}</h3>
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

export default UncontrolledAccordion;