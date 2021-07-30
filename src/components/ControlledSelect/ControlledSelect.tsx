import React, {useState} from 'react';
import s from './ControlledSelect.module.css';

type OptionsType = {
    id: number
    option: string
}

type ControlledSelectpropsType = {
    value: any
    items: OptionsType[]
    onChange:(value:any)=> void
}

export const ControlledSelect = (props:ControlledSelectpropsType) => {

    const [active, setActive] = useState(true)
    const selectedItem = props.items.find(i => i.id === props.value)



    const onToogleItem = ()=> {setActive(!active)}

    return (
        <>
            <div className={s.select}>
                <span className={s.main} onClick={onToogleItem}>{selectedItem && selectedItem.option}</span>
                {
                    active &&
                <div className={s.items}>
                    {props.items.map(i => <div
                        key={i.id}
                        onClick={()=> props.onChange}
                    >{i.option}</div>)}
                </div>
                }
            </div>
        </>
    )

}
