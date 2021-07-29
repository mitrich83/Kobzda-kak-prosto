import React, {ChangeEvent, useState} from 'react';

export const ControlledSelect = () => {
    const [select, setSelect] = useState('2')

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        const currentSelect = e.currentTarget.value
        setSelect(currentSelect)
    }
    return (
        <div>
            <select value={select} onChange={onChangeHandler}>
                <option value={'1'}>Moscow</option>
                <option value={'2'}>Minsk</option>
                <option value={'3'}>Kiev</option>
            </select>
        </div>
    )

}

