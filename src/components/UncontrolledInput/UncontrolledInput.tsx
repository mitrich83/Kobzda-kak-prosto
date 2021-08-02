import React, {ChangeEvent, useRef, useState} from 'react';

export const TrackValueOfUncontrolledInput = React.memo(() => {
    const [value, setValue] = useState('')

    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        const currentValue = e.currentTarget.value
        setValue(currentValue)
    }
    return (
        <div>
            <input onChange={onChangeHandler}/>{value}
        </div>
    )
})

export const GetValueOfUncontrolledInput = React.memo(() => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }
    return (
        <>
            <input ref={inputRef}/>
            <button onClick={save}>save</button>
            actual value : {value}
        </>
    )
})
