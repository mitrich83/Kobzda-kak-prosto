import React, {ChangeEvent, useState} from 'react';


export const ControlledInput = React.memo(() => {
    const [value, setValue] = useState('')

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const currentValue = e.currentTarget.value
        setValue(currentValue)
    }
    return (
        <div>
            <input value={value} onChange={onChangeHandler}/>{value}
        </div>
    )

})
