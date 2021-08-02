import React, {ChangeEvent, useState} from 'react';

export const ControlledCheckBox = React.memo(() => {
    const [select, setSelect] = useState(false)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const currentSelect = e.currentTarget.checked
        setSelect(currentSelect)
    }
    return (
        <div>
            <input type={'checkbox'} checked={select} onChange={onChangeHandler}/>
        </div>
    )

})