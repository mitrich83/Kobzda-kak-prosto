import React from 'react';
import s  from './Accordion.module.css'

type ItemType = {
    title:string
    value:any
}

export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    items:ItemType[]
    onClickItem:()=> void

}

export const Accordion = React.memo((props: AccordionPropsType) => {
    return (
        <div>
            <AccordionTitle title={props.titleValue}
                            onChange={props.onChange}
            />
            {!props.collapsed && <AccordionBody items={props.items} onClickItem={props.onClickItem}/>}
        </div>
    )
})

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={props.onChange}>{props.title}</h3>
    )
}

type AccordionBodyPropsType = {
    items: ItemType[]
    onClickItem:()=> void
}

export function AccordionBody(props:AccordionBodyPropsType) {
    return (
    <ul className={s.styleUL}>
        {props.items.map((i,index )=>
            <li key={index}
            onClick={props.onClickItem}
            >{i.title}</li>)}
    </ul>
    )
}
