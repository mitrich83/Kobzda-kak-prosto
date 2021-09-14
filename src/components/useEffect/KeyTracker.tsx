import React, {useEffect, useState} from 'react';

export const KeyTracker = () => {

    const [text, setText] = useState('')
    console.log('component rendered')

    useEffect(() => {
        console.log('Effect occurred')

        const handler = (e:KeyboardEvent) => {
            console.log(e.key)
            setText(text + e.key)
        }
        window.document.addEventListener('keypress', handler)

        return () => {
            window.removeEventListener('keypress', handler)
        }
    }, [])

    return <>
        {text}
    </>
}