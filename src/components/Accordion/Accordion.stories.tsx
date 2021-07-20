import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {Accordion, AccordionPropsType} from './Accordion';
import {Story} from '@storybook/react';

export default {
    title:'Accordion',
    component: Accordion
}

const callback = action('accordion mode change event fired')
const onClickCallback = action('some item ws clicked')

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />
const callbackProps = {
    onChange: callback,
    onClick: onClickCallback
}
export const MenuCollapsedMode = Template.bind({})
MenuCollapsedMode.args = {
    ...callbackProps,
    titleValue: 'Menu',
    collapsed: true,
}

export const UsersCollapsedMode = Template.bind({})
UsersCollapsedMode.args = {
    ...callbackProps,
    titleValue: 'Users',
    collapsed: false,
}

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion titleValue={'Users'} collapsed={value} onChange={() => setValue(!value)}
    onClick={(value) => {
        alert(`user with to ${value} should be happy`)
    }}
    />
}
