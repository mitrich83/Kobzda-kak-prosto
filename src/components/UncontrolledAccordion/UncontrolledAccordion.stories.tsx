import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {UncontrolledAccordion} from './UncontrolledAccordion';



export default {
    title: 'UncontrolledAccordion',
    component: UncontrolledAccordion
}

const callback = action('accordion mode change event fired')

export const MenuCollapsedMode = () => <UncontrolledAccordion titleValue={'Menu'} collapsed={true} onChange={callback}/>
export const UsersCollapsedMode = () => <UncontrolledAccordion titleValue={'Users'} collapsed={false} onChange={callback}/>


export const ModeChanging = () => {
const [value, setValue] = useState<boolean>(true)
    return <UncontrolledAccordion titleValue={'Users'} collapsed={value} onChange={() => setValue(!value)}/>
}