import React from 'react';

type ItemType = {
    title:string
    value: number
}
export type AccordionPropsType = {
    titleValue?: string
    collapsed?: boolean
    onChange?: () => void
    items?:ItemType[]
    onClick?: (value: string) => void
}

export const Accordion = (props: AccordionPropsType) => {
    return (
        <div>
            <AccordionTitle title={props.titleValue}
                            onChange={props.onChange}
            />
            {!props.collapsed && <AccordionBody />}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string|undefined
    onChange?: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={props.onChange}>{props.title}</h3>
    )
}


export function AccordionBody() {
    return (
    <ul>
        <li>1</li>
        <li>1</li>
        <li>1</li>
    </ul>
    )
}
